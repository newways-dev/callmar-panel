import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Explanation.module.scss'

import question from '../../assets/icons/question.svg'

export interface ExplanationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string | ReactNode
}

export const Explanation = ({ className, text }: ExplanationProps) => {
  return (
    <div className={clsx(styles.explanation, className)}>
      <ReactSVG src={question} />
      <div>{text}</div>
    </div>
  )
}
