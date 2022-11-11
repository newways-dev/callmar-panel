import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import Slider from 'react-slick'

import styles from './AvatarsSlider.module.scss'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import right from '../../assets/icons/right.svg'
import left from '../../assets/icons/left.svg'
import { avatars } from '../../assets/images/avatars'
import { Avatar } from '../../components'
import { useDispatch } from 'react-redux'
import { setAvatar } from '../../redux/avatar/slice'

interface ArrowProps {
  onClick: () => void
}

const PrevArrow = ({ onClick }: ArrowProps) => {
  return <ReactSVG onClick={onClick} src={left} />
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return <ReactSVG onClick={onClick} src={right} />
}

export const AvatarsSlider = () => {
  const [active, setActive] = useState<number>(0)
  const dispatch = useDispatch()

  const settings = {
    dots: true,
    slidesToScroll: 4,
    slidesToShow: 6,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
  }

  const handleClick = (index: number) => {
    setActive(index)
    dispatch(setAvatar(index))
  }

  return (
    <div className={styles.avatarSlider}>
      <p className={styles.title}>
        Выберите аватарку для оператора из стандартных:
      </p>
      <Slider className={styles.slider} {...settings}>
        {avatars.map((item, index) => (
          <Avatar
            onClick={() => handleClick(index)}
            active={active}
            index={index}
            img={item}
            key={index}
          />
        ))}
      </Slider>
    </div>
  )
}
