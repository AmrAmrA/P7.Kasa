import React, {useState, useRef, useEffect} from 'react';
import "./__About.scss";
import backgroundAbout from "./background_about.png";
import chevron from './chevron.png';

const About = () => {

  const [toggle, setToggle] = useState(false); 
  const [heightEl, setHeightEl] = useState(); 

  const toggleState = () => {
    setToggle (!toggle)
  }

  const refHeight = useRef(); 

  useEffect(() => {

    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])


  return (
    <>
           <img src={backgroundAbout} alt="Arrière-plan d'une montagne" className="background__about"/>
           <div className="accord">
            <div
            onClick={toggleState} 
            className="accord__visible">
              <h2 className="accord__title">Fiabilité</h2>
              <img src={chevron } alt="" 
              className={toggle ? 'accord__chevron rotation' : 'accord__chevron'}/>
            </div>
              <div className="accord__toggle">
                <p ref={refHeight} 
                className= {toggle ? 'accord__paragraphe animated' : 'accord__paragraphe'}
                >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
              </div>
           </div>
           <div className="accord">
            <div
            onClick={toggleState} 
            className="accord__visible">
              <h2 className="accord__title">Respect</h2>
              <img src={chevron } alt="" 
              className={toggle ? 'accord__chevron rotation' : 'accord__chevron'}/>
            </div>
              <div className="accord__toggle">
                <p ref={refHeight} 
                className= {toggle ? 'accord__paragraphe animated' : 'accord__paragraphe'}
                >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </div>
           </div>
           <div className="accord">
            <div
            onClick={toggleState} 
            className="accord__visible">
              <h2 className="accord__title">Service</h2>
              <img src={chevron } alt="" 
              className={toggle ? 'accord__chevron rotation' : 'accord__chevron'}/>
            </div>
              <div className="accord__toggle">
                <p ref={refHeight} 
                className= {toggle ? 'accord__paragraphe animated' : 'accord__paragraphe'}
                >Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
              </div>
           </div>
           <div className="accord">
            <div
            onClick={toggleState} 
            className="accord__visible">
              <h2 className="accord__title">Sécurité</h2>
              <img src={chevron } alt="" 
              className={toggle ? 'accord__chevron rotation' : 'accord__chevron'}/>
            </div>
              <div className="accord__toggle">
                <p ref={refHeight} 
                className= {toggle ? 'accord__paragraphe animated' : 'accord__paragraphe'}
                >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </div>
           </div>
    </>
  );
};

export default About;