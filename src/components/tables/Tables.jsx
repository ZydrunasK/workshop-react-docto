import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./tables.module.css";
import check from "../../assets/check.svg";
export function Tables() {
  return (
    <section className={styles.tableContainer}>
      <p className={styles.service}>SERVIÇOS</p>
      <h2 className={styles.title}>
        Como podemos ajudá-lo a se sentir melhor?
      </h2>
      <div className={styles.tablesContainer}>
        <div className={styles.table}>
          <img src={check} alt="checkMark" />
          <h2>Problemas digestivos</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div className={styles.table}>
          <img src={check} alt="checkMark" />
          <h2>Saúde Hormonal</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div className={styles.table}>
          <img src={check} alt="checkMark" />
          <h2>Bem-estar mental</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
      </div>
      <div className={styles.tablesContainer}>
        <div className={styles.table}>
          <img src={check} alt="checkMark" />
          <h2>Cuidados Pediátricos</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div className={styles.table}>
          <img src={check} alt="checkMark" />
          <h2>Autoimune e Inflamação</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div className={styles.table}>
          <img src={check} alt="checkMark" />
          <h2>Saúde do Coração</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
      </div>
    </section>
  );
}
