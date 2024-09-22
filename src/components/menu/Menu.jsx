import logo from '/src/assets/doctorCare.svg';
import facebook from '/src/assets/facebook.svg';
import youtube from '/src/assets/youtube.svg';
import instagram from '/src/assets/instagram.svg';
import close from '/src/assets/close.svg';
import s from './menu.module.css'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';



export function Menu() {
    
    const {visibleState, changeState} = useContext(GlobalContext);

    return (
        <section className={s.menu} data-visible={visibleState}>
            <div className={s.header}>
                    <img src={logo} className={s.logo} alt="logo"/>
                    <img src={close} className={s.close} alt="close" onClick={changeState}/>
            </div>

            <nav className={s.nav}>
                <a href="#" className={s.link} data-active={true} >Início</a>
                <a href="#" className={s.link} data-active={false} >Sobre</a>
                <a href="#" className={s.link} data-active={false} >Serviços</a>
                <a href="#" className={s.link} data-active={false} >Depoimentos</a>
                <button className={s.btn} type='button'>Agendar sua consulta</button>
            </nav>

            <div className={s.footer}>
                <a href="#"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={youtube} alt="youtube" /></a>
            </div>
        </section>
    );
}