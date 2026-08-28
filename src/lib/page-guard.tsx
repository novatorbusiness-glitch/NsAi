"use client";

/**
 * PageGuard — экран ввода пароля для внутренних страниц.
 * Пароль: 1111. После успешного ввода — разблокировка в sessionStorage.
 * Без пароля контент не рендерится (только экран входа).
 */
import { useState, useEffect, type ReactNode } from "react";

const PASSWORD = "1111";
const STORAGE_KEY = "ncai_page_unlocked";

export default function PageGuard({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
      else setUnlocked(false);
    } catch {
      setUnlocked(false);
    }
  }, []);

  if (unlocked === null) return null; // проверяем sessionStorage

  if (unlocked) return <>{children}</>;

  const submit = () => {
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        background: "var(--bg, #080808)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 380, textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--fd, inherit)",
            fontSize: "1.8rem",
            fontWeight: 800,
            letterSpacing: "-.03em",
            color: "var(--t, #fff)",
            marginBottom: ".5rem",
          }}
        >
          Внутренняя страница
        </h1>
        <p style={{ color: "var(--t2, rgba(255,255,255,.6))", marginBottom: "1.5rem" }}>
          Введите пароль для доступа
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="••••"
          autoFocus
          style={{
            width: "100%",
            padding: ".8rem 1rem",
            fontSize: "1.2rem",
            textAlign: "center",
            borderRadius: 12,
            border: error ? "2px solid #e5484d" : "1px solid rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.06)",
            color: "#fff",
            outline: "none",
            marginBottom: "1rem",
            boxSizing: "border-box",
          }}
        />
        {error && (
          <p style={{ color: "#e5484d", marginBottom: ".8rem", fontSize: ".9rem" }}>
            Неверный пароль
          </p>
        )}
        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: ".85rem 1.5rem",
            fontSize: "1rem",
            fontWeight: 700,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            background: "var(--a, #FFD000)",
            color: "#080808",
          }}
        >
          Открыть
        </button>
      </div>
    </div>
  );
}
