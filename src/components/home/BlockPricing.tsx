"use client";

import { useEffect } from "react";

export default function BlockPricing() {
  useEffect(() => {
    const root = document.getElementById("pricing");
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
    <section id="pricing">
      <div className="w">
        <div className="pin">
          <span className="lb rv">Инвестиция</span>
          <h2 className="ph2 rv d1">Сколько стоит работа</h2>
          <p className="psub rv d2">
            Не прайс-лист ради прайс-листа. Ниже ориентиры, чтобы сразу понимать бюджет и формат
            входа в работу.
          </p>

          <div className="pgrid rv d2">
            <div className="pcard">
              <div className="ptag">Формат 01</div>
              <div className="pname">Архитектурный аудит</div>
              <div className="pprice">от 120 000 ₽</div>
              <p className="pdesc">
                Для тех, кому нужно понять, где система теряет деньги и что исправлять в первую
                очередь.
              </p>
              <ul className="plist">
                <li>Диагностика текущей воронки и трафика</li>
                <li>Карта узких мест и точек роста</li>
                <li>План внедрения на 4-8 недель</li>
              </ul>
            </div>

            <div className="pcard">
              <div className="ptag">Формат 02</div>
              <div className="pname">Сборка системы под ключ</div>
              <div className="pprice">от 480 000 ₽</div>
              <p className="pdesc">
                Основной формат на 2-3 месяца: стратегия, реализация, автоматизация и передача
                команде.
              </p>
              <ul className="plist">
                <li>Сайт / воронка / аналитика</li>
                <li>AI-автоматизация ключевых процессов</li>
                <li>Документация и обучение команды</li>
              </ul>
            </div>

            <div className="pcard">
              <div className="ptag">Формат 03</div>
              <div className="pname">Сопровождение и масштаб</div>
              <div className="pprice">от 160 000 ₽/мес</div>
              <p className="pdesc">
                Если система уже работает и нужна регулярная оптимизация, рост и контроль метрик.
              </p>
              <ul className="plist">
                <li>Еженедельные спринты и приоритизация</li>
                <li>Оптимизация конверсии по данным</li>
                <li>Поддержка запусков и новых гипотез</li>
              </ul>
            </div>
          </div>

          <div className="pnote rv d3">
            <strong>Финальная стоимость</strong> фиксируется после короткого диагностического
            созвона (20-30 минут): зависит от объема, сроков и текущей готовности команды.
          </div>
        </div>
      </div>
    </section>
  );
}
