import { useContext } from 'react';
import s from './header.module.css'
import logoColor from '/src/assets/doctorCareColored.svg';
import menu from '/src/assets/menu.svg';
import { GlobalContext } from '../../context/GlobalContext';


export function Header() {
    const {changeState} = useContext(GlobalContext);

    return (
        <>
            <header className={s.header}>
                    <img src={logoColor} alt="logo" className={s.logo}/>
                    <nav className={s.nav}>
                        <a href="" className={s.link} data-active={true} >Início</a>
                        <a href="" className={s.link} data-active={false} >Sobre</a>
                        <a href="" className={s.link} data-active={false} >Serviços</a>
                        <a href="" className={s.link} data-active={false} >Depoimentos</a>
                    </nav>
                    <button className={`${s.btn} ${s.light}`} type='button'>Agendar consulta</button>
                    
                    <span  className={s.logoWhite}>
                        <img src={logoColor} alt="logo"/>
                    </span>
                    <span className={s.menu} onClick={changeState}>
                        <img src={menu} alt="logo"/>
                    </span>
            </header>
        </>
    );
}