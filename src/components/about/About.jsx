import s from './about.module.css'
import pic from '/src/assets/picDoc.png'

export function About() {
    
    return (
        <section className={s.sect}>
            <div className={s.cont}>
                <img src={pic} alt="doctor with patient" className={s.img}/>
                <div className={s.txtCont}>
                    <h3 className={s.h3}>SOBRE NÓS</h3>
                    <h2 className={s.h2}>Entenda quem somos e por que existimos</h2>
                    <p className={s.para}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>
        </section>
    );
}