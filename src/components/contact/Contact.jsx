import s from '../about/about.module.css';
import pic from '/src/assets/picGuy.png';
import mail from '/src/assets/mail.svg';
import whatsapp from '/src/assets/whatsapp.svg';
import vector from '/src/assets/Vector.svg';


export function Contact() {
    
    return (
        <section className={`${s.sect} ${s.whiteBack}`}>
            <div className={s.cont}>
                <div className={s.txtCont}>
                    <h2 className={s.h1}>Entre em contato com a gente!</h2>
                    <p className={s.para}>
                        <img src={vector} alt="vector" />
                        R. Amauri Souza, 346
                    </p>
                    <p className={s.para}>
                        <img src={mail} alt="vector" />
                        contato@doctorcare.com
                    </p>
                    <button className={s.btn}>
                        <img src={whatsapp} alt="vector" />
                        Agende sua consulta
                    </button>
                </div>
                <img src={pic} alt="doctor with patient" className={s.img}/>
            </div>
        </section>
    );
}