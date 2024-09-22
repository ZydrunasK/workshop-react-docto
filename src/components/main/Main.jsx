import styles from "./main.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import button from "../../assets/button.svg";
import lady from "../../assets/lady.svg";
export function Main() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.info}>
          <p>BOAS-VINDAS A DOCTORCARE 👋</p>
          <h2>Assistência médica simplificada para todos</h2>
          <p>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </p>

          <img className={styles.imgBtn} src={button} alt="" />
        </div>
        <div className={styles.button}>
          <img src={lady} alt="Lady" />
        </div>
        <div className={styles.floater}>
          <div className={styles.stats}>
            <h2>+3.500</h2>
            <p>Pacientes atendidos</p>
          </div>
          <hr />
          <div className={styles.stats}>
            <h2>+15</h2>
            <p>Especialistas disponíveis</p>
          </div>
          <hr />
          <div className={styles.stats}>
            <h2>+10</h2>
            <p>Anos no mercado</p>
          </div>
        </div>
      </section>
    </>
  );
}
