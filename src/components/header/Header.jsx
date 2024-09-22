import { useContext } from 'react';
import s from './header.module.css'
import logoColor from '/src/assets/doctorCareColored.svg';
import logoWhite from '/src/assets/doctorCare.svg';
import menuIcon from '/src/assets/menu.svg';
import menuIconWhite from '/src/assets/menuWhite.svg';
import { GlobalContext } from '../../context/GlobalContext';


export function Header() {
    const {changeState, didScroll} = useContext(GlobalContext);
    

    return (
            <header className={s.header} data-scroll={didScroll}>
                    <img src={logoWhite} alt="logo" className={s.logoWhite} data-scroll={didScroll}/>
                    <img src={logoColor} alt="logo" className={s.logo} data-scroll={didScroll}/>
                    <nav className={s.nav}>
                        <a href="#" className={s.link} data-active={true}  data-scroll={didScroll}>Início</a>
                        <a href="#" className={s.link} data-active={false}  data-scroll={didScroll}>Sobre</a>
                        <a href="#" className={s.link} data-active={false}  data-scroll={didScroll}>Serviços</a>
                        <a href="#" className={s.link} data-active={false}  data-scroll={didScroll}>Depoimentos</a>
                    </nav>
                    <button className={`${s.btn} ${s.light}`} type='button' data-scroll={didScroll}>Agendar consulta</button>
                    
                    <span className={s.menu} onClick={changeState}>
                        <img src={menuIcon} className={s.menuIcon} alt="logo" data-scroll={didScroll} />
                        <img src={menuIconWhite} className={s.menuIconWhite} alt="logo" data-scroll={didScroll} />
                    </span>
            </header>
    );
}