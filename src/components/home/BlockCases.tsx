"use client";

import { useEffect } from "react";

export default function BlockCases() {
  useEffect(() => {
    const root = document.getElementById("cases");
    if (!root) {
      return;
    }

    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.08 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="cases" className="cases-section">
      <div className="w">
        <span className="lb rv">Кейсы · Новая эра</span>
        <h2 className="sh2 rv d1">
          AI-системы,
          <br />
          которые уже работают
        </h2>
        <p className="sl rv d2">Проекты 2024-2025. До этого - 300 кейсов классического маркетинга.</p>

        <div className="cgrid">
          <div className="ccard rv case-yellow">
            <div className="ctag">Сайт · Консалтинг · Next.js</div>
            <div className="ctit">Сайт-воронка для AI-консалтинга</div>
            <p className="csub">
              Личный сайт + 30 SEO-статей из книги + система заявок. Разработка - полностью в
              прямом эфире.
            </p>
            <div className="cress">
              <div className="cres">
                <strong>30 SEO-страниц</strong> - готовы с первого дня
              </div>
              <div className="cres">
                <strong>3 недели</strong> - от идеи до деплоя
              </div>
              <div className="cres">
                <strong>0 ₽</strong> - на агентство
              </div>
            </div>
          </div>

          <div className="ccard rv d1 case-cyan">
            <div className="ctag">Приложение · Marketing OS · React Native</div>
            <div className="ctit">Marketing OS - AI вместо маркетолога</div>
            <p className="csub">
              Мобильное приложение с AI-агентом: контент-план, генерация текстов, публикация по
              расписанию.
            </p>
            <div className="cress">
              <div className="cres">
                <strong>-2.5 часа/день</strong> - маркетинговой рутины убрано
              </div>
              <div className="cres">
                <strong>×3 скорость</strong> - публикации контента
              </div>
              <div className="cres">
                <strong>8 недель</strong> - до App Store
              </div>
            </div>
          </div>

          <div className="ccard rv d2 case-lavender">
            <div className="ctag">Приложение · SaaS · Claude API</div>
            <div className="ctit">Funnel Builder - конструктор воронок с AI</div>
            <p className="csub">
              Визуальный редактор воронок с AI-советником: анализирует логику, предсказывает
              конверсию.
            </p>
            <div className="cress">
              <div className="cres">
                <strong>-60%</strong> - времени на проектирование запуска
              </div>
              <div className="cres">
                <strong>12 архитектур</strong> - воронок в библиотеке
              </div>
              <div className="cres">
                <strong>10 недель</strong> - до MVP
              </div>
            </div>
          </div>
        </div>

        <div className="cold rv d3">
          <div className="coldtag">Прошлая эра →</div>
          <p className="coldtx">
            300 кейсов классического маркетинга: воронки, лендинги, Email-автоматизация, запуски,
            SEO - до того, как в работу вошел AI. Архив по запросу.
          </p>
        </div>
      </div>
    </section>
  );
}
