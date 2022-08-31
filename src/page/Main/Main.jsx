import Contacts from '../../components/Contato/contato';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Projects from '../../components/Projetos/projetos';
import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/AboutMe/AboutMe';
import * as S from './styles';

export default function Main(){
  return (
    <S.Container>
      <S.sectionHeader >
        <Header/>
      </S.sectionHeader>
      <S.sectionHome id='home'>
        <Home/>
      </S.sectionHome>
      <S.sectionAboutMe id='about'>
        <AboutMe/>
      </S.sectionAboutMe>
      <S.sectionProjects id='projects'>
        <Projects/>
      </S.sectionProjects>
      <S.sectionSkills id='skills'>
        <Skills/>
      </S.sectionSkills>
      <S.sectionContact id='contact'>
        <Contacts/>
      </S.sectionContact>
      <Footer/>
    </S.Container>
  );
}