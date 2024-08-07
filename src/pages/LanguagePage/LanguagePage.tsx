import { Button} from "@telegram-apps/telegram-ui";
import i18next from "i18next";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const LanguagePage: FC = () => {
  const { t } = useTranslation();
  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      t("key");
    });
  };
  return (
    <div className="">
      <div className="px-4 pt-5">
        <h1 className="text-3xl font-bold text--900 mb-5">{t('localization')}</h1>
        <div className="flex gap-3 mb-5 ">
          <Button onClick={() => changeLng('ru')}>Русский</Button>
          <Button onClick={() => changeLng('en')}>English</Button>
        </div>
        <div className="">
          <p className="pb-2">{t('else_text1')}</p>
          <p className="pb-2">{t('else_text2')}</p>
          <p className="pb-2">{t('else_text3')}</p>
          <p className="pb-2">{t('else_text4')}</p>
        </div>
        
      </div>
    </div>
  );
};
