import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import styles from './Avatar.module.scss'

import close from '../../assets/icons/close-avatar.svg'
import drop from '../../assets/icons/drop-here.svg'
import { setAvatarModal } from '../../redux/modals/slice'
import { AvatarsSlider } from '../AvatarsSlider/AvatarsSlider'
import { ModalButtons } from '../ModalButtons/ModalButtons'

export interface AvatarModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AvatarModal = ({ className }: AvatarModalProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <div className={clsx(styles.avatar, className)}>
      <div className={styles.title}>
        <p>{t('Аватарка оператора')}</p>
        <ReactSVG onClick={() => dispatch(setAvatarModal(false))} src={close} />
      </div>
      <div className={styles.wrapper}>
        <p>{t('Загрузите фото сотрудника')}</p>
        <div className={styles.dragAndDrop}>
          <div className={styles.dadWrapper}>
            <ReactSVG src={drop} />
            <p>
              {t(
                'Загрузите фото сотрудника, нажав сюда или перетащив файл фотографии в эту область. Не более 2 МБ в формате jpg, png или gif'
              )}
            </p>
          </div>
        </div>
        <div className={styles.or}>{t('ИЛИ')}</div>
        <AvatarsSlider />
      </div>
      <ModalButtons />
    </div>
  )
}
