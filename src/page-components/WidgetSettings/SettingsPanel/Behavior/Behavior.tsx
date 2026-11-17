import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Explanation,
  NumInput,
  RadioButton,
  Toggle,
} from '../../../../components'
import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Behavior.module.scss'

type VisitorChoice = 'no' | 'yes' | 'off-hours'

export const Behavior = () => {
  const { t } = useTranslation()
  const [visitorChoice, setVisitorChoice] =
    useState<VisitorChoice>('off-hours')

  return (
    <div className={styles.behavior}>
      <SettingsSection title={t('Поведение виджета на сайте')}>
        <Row title={t('Ловить звонки в нерабочее время')}>
          <Toggle mode="on" />
          <Explanation
            text={t(
              'Если опция включена, то виджет будет собирать телефоны в нерабочее время и генерировать звонки автоматически в начале следующего рабочего дня.'
            )}
          />
          <span className={styles.additionDesc}>
            {t('Дополнительные настройки для ”Ловить звонки в нерабочее время”')}
          </span>
        </Row>
      </SettingsSection>
      <SettingsSection>
        <Row
          className={styles.row}
          title={t(
            'Отступ от начала рабочего времени в минутах, для начала звонков, пойманных в нерабочее время'
          )}
        >
          <NumInput defaultValue={20} />
        </Row>
        <Row
          className={styles.row}
          title={t('Планировать звонок по часовому поясу клиента')}
        >
          <Toggle mode="off" />
          <Explanation
            text={t(
              'Осуществлять запланированный звонок не раньше указанного часа по часовому поясу клиента'
            )}
          />
        </Row>
        <Row
          className={styles.row}
          title={t(
            'Не использовать ”Ловить звонки в нерабочее время” в выходные дни'
          )}
        >
          <Toggle mode="off" />
          <Explanation
            text={t(
              'Если опция включена, режим “Ловить звонки в нерабочее время” не будет использоваться в выходные дни вашего рабочего графика.'
            )}
          />
        </Row>
        <Row className={styles.row} title={t('Ловить посетителя на выходе')}>
          <Toggle mode="on" />
          <Explanation
            text={t(
              'Если опция включена, то виджет будет автоматически показан посетителю за момент до того, как посетитель решит покинуть сайт (используется поведенческий анализ движения курсора мыши).'
            )}
          />
        </Row>
        <Row
          className={styles.row}
          title={t(
            'Показывать виджет через ... секунд после открытия страницы сайта'
          )}
        >
          <Toggle mode="off" />
        </Row>
        <Row
          className={styles.row}
          title={t('Изменить время “Мы перезвоним вам за ... секунд”')}
        >
          <div>
            <NumInput defaultValue={20} />
            <span className={styles.time}>{t('секунды')}</span>
          </div>
        </Row>
        <Row
          className={styles.row}
          title={t('Предлагать звонок 1 клиенту не чаще 1 раза за')}
        >
          <div>
            <NumInput defaultValue={20} />
            <span className={styles.time}>{t('часа')}</span>
          </div>
        </Row>
        <Row
          className={styles.row}
          title={t('Предоставить посетителю выбор удобного времени звонка')}
        >
          <div className={styles.radioButtons}>
            <RadioButton
              onChange={() => setVisitorChoice('no')}
              checked={visitorChoice === 'no'}
              label={t('Нет')}
            />
            <RadioButton
              onChange={() => setVisitorChoice('yes')}
              checked={visitorChoice === 'yes'}
              label={t('Да')}
            />
            <RadioButton
              onChange={() => setVisitorChoice('off-hours')}
              checked={visitorChoice === 'off-hours'}
              label={t('Только в нерабочее время')}
            />
          </div>
          <Explanation
            text={
              <>
                {t('Если включено, то в окне будет ссылка на')}{' '}
                <span>{t('форму')}</span>{' '}
                {t('выбора удобной даты и времени обратного звонка.')}
              </>
            }
          />
        </Row>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
