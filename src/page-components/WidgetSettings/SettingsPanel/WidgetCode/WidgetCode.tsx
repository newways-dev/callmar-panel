import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Button } from '../../../../components'
import { demoWidgets } from '../../../../helpers/demoData'
import { Buttons } from '../Buttons/Buttons'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './WidgetCode.module.scss'

import copy_code from '../../../../assets/icons/copy-code.svg'

/** Placeholder snippet: the real service issues a per-site campaign id. */
const SNIPPET = `<!-- Callmar widget -->
<script>
  window._cm = window._cm || [];
  window._cm.push(['campaign', 'DEMO-CAMPAIGN-ID']);

  (function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://example.com/callmar-widget.js';
    document.head.appendChild(s);
  })();
</script>
<!-- /Callmar widget -->`

export const WidgetCode = () => {
  const { t } = useTranslation()
  const site = demoWidgets[0].site

  return (
    <div className={styles.widgetCode}>
      <SettingsSection title={t('Код виджета для установки на сайт')}>
        <div className={styles.wrapper}>
          <p>
            {t(
              'Код должен быть на каждой странице вашего сайта {{site}} перед тегом </body>.',
              { site }
            )}
          </p>
          <div className={styles.description}>
            <p>
              {t(
                'Данный код только для сайта {{site}}. Для установки виджета на другой сайт - добавьте новый виджет.',
                { site }
              )}
            </p>
          </div>
          <div className={styles.code}>
            <p>{SNIPPET}</p>
          </div>
          <Button className={styles.copyCode}>
            <ReactSVG src={copy_code} />
            {t('Скопировать код в буфер')}
          </Button>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
