import { useState } from "react";
import styles from "../styles/header.module.css";
import Link from "next/link";
export default function Header() {
  const [activaElementName, setActiveElementName] = useState("getir");

  // sadece burasi icin method olusturmana gerek yoktu ama sen bilirsin...

  const clickAction = (tag) => {
    setActiveElementName(tag);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a
            href="#"
            className={activaElementName == "getir" ? styles.active : ""}
            onClick={() => clickAction("getir")}
          >
            getir
          </a>
          <a
            className={activaElementName == "getiryemek" ? styles.active : ""}
            href="#"
            onClick={() => clickAction("getiryemek")}
          >
            getiryemek
          </a>
          <a
            className={activaElementName == "getirbuyuk" ? styles.active : ""}
            href="#"
            onClick={() => clickAction("getirbuyuk")}
          >
            getirbüyük
          </a>
        </div>
        <div className={styles.right}>
          <a href="#" className={styles.iconButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            Türkçe (TR)
          </a>
          <a href="#" className={styles.iconButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Giriş Yap
          </a>
          <a href="#" className={styles.iconButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Kayıt Ol
          </a>
        </div>
      </div>
    </header>
  );
}
