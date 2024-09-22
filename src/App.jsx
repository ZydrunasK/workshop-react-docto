import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { ContextWrapper } from './context/GlobalContext';

export function App() {

  return (
    <>
    <ContextWrapper>
      <Menu /> 
      <Header />
      <About />
      <Contact />
      <Footer />
    </ContextWrapper>
    </>
  )
}

