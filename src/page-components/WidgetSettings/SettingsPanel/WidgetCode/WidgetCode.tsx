import { ReactSVG } from 'react-svg'
import { Button } from '../../../../components'
import { Buttons } from '../Buttons/Buttons'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './WidgetCode.module.scss'

import copy_code from '../../../../assets/icons/copy-code.svg'

export const WidgetCode = () => {
  return (
    <div className={styles.widgetCode}>
      <SettingsSection title="Код виджета для установки на сайт">
        <div className={styles.wrapper}>
          <p>{`Код должен быть на каждой странице вашего сайта tehnix.su перед тегом </body>.`}</p>
          <div className={styles.description}>
            <p>
              Данный код только для сайта tehnix.su. Для установки виджета на
              другой сайт - добавте новый виджет.
            </p>
          </div>
          <div className={styles.code}>
            <p>
              {`<!-- Begin LeadBack code {literal} -->
<script>
         var _emv = _emv ||  [];
         _emv[ ‘campaign’] = ‘89a91ae5c10525b894c3789d’;
         
         (function()  {
           var em = document.createElement(‘script’); em.type = ‘text/javascript’; em.async = true;
           var em = document.createElement(‘script’); em.type = ‘text/javascript’; em.async = true;
           var em = document.createElement(‘script’); em.type = ‘text/javascript’; em.async = true;
          })();
          </script>
          <!-- End LeadBack code {/literal} -->`}
            </p>
          </div>
          <Button className={styles.copyCode}>
            <ReactSVG src={copy_code} />
            Скопировать код в буфер
          </Button>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
