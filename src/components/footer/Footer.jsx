import logo from '/src/assets/doctorCare.svg';
import facebook from '/src/assets/facebook.svg';
import youtube from '/src/assets/youtube.svg';
import instagram from '/src/assets/instagram.svg';
import s from './footer.module.css'


export function Footer() {
    
    return (
        <>
            <footer className={s.sect}>
                <div className={s.cont}>
                    <div className={s.txt}>
                        <img className={s.logoDoc} src={logo} alt="logo"  />
                        <p className={s.para}>&copy;2022 - DoctorCare.</p>
                        <p className={s.para}>Todos os direitos reservados.</p>
                    </div>
                    <div className={s.links}>
                        <a href="#"><img src={instagram} alt="instagram" /></a>
                        <a href="#"><img src={facebook} alt="facebook" /></a>
                        <a href="#"><img src={youtube} alt="youtube" /></a>
                    </div>
                </div>

            </footer>
        </>
    );
}