"use client";

import { useLang } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

// Подвал сайта: описание, колонки ссылок (Проект / Книги / Работа / Правовое), язык, копирайт.
export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="fwm">NcAi</div>
      <div className="w footer-inner">
        <div className="fgrid">
          <div>
            <div className="flogo">NcAi</div>
            <p className="ftag">{t("footer.tagline")}</p>
            <div className="fsoc">
              <a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" className="fsi" aria-label="Telegram">
                ✈
              </a>
              <a href="mailto:ilya.novitskii@yandex.ru" className="fsi" aria-label="Email">
                ✉
              </a>
            </div>
          </div>

          <div>
            <div className="fch">{t("footer.colProject")}</div>
            <ul className="fls">
              <li><a href="/o-proekte">{t("footer.about")}</a></li>
              <li><a href="/blog">{t("footer.blog")}</a></li>
              <li><a href="/portfolio">{t("footer.cases")}</a></li>
              <li><a href="/partners">Партнёры</a></li>
            </ul>
          </div>

          <div>
            <div className="fch">{t("footer.colBooks")}</div>
            <ul className="fls">
              <li><a href="/book">{t("nav.bookNeuro")}</a></li>
              <li><a href="/agency-in-a-box">{t("nav.bookAgency")}</a></li>
              <li><a href="/prompts">Промпты NCAi</a></li>
            </ul>
          </div>

          <div>
            <div className="fch">{t("footer.colWork")}</div>
            <ul className="fls">
              <li><a href="/consulting">{t("footer.consulting")}</a></li>
              <li><a href="/ai-training">{t("footer.aiTraining")}</a></li>
              <li><a href="/consulting#cases">{t("footer.cases")}</a></li>
              <li><a href="/consulting#mechanism">{t("footer.method")}</a></li>
            </ul>
          </div>

          <div>
            <div className="fch">{t("footer.colLegal")}</div>
            <ul className="fls">
              <li><a href="/privacy">{t("footer.privacy")}</a></li>
              <li><a href="/offer">{t("footer.offer")}</a></li>
              <li><a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="mailto:ilya.novitskii@yandex.ru">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="fbot">
          <span className="fcp">© {new Date().getFullYear()} NcAi · Илья Новицкий. {t("footer.rights")}</span>
          <span className="fright">
            <LangSwitch light />
            <span className="fea">
              {t("footer.easter")} <span>{t("footer.easter2")}</span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
