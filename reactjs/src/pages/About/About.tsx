import { useEffect } from 'react';
import styles from './About.module.css';
import image from '../../assets/images/mountains.jpg';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function About() {
  const dropdownInformations = [
    {
      status: 'close',
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      status: 'open',
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      status: 'close',
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      status: 'close',
      title: 'Responsabilité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  useEffect(() => {
    document.title = 'A propos';
  }, []);

  return (
    <>
      <HeaderImage image={image} title="" customClasses={[]} imageAlternativeText="Mountains" />
      {dropdownInformations.map((information, index) => (
        <Dropdown title={information.title} isDefaultExpanded={information.status === 'open' ? true : false} optionStyle={'large'} key={index}>
          <p className={styles.dropdownInformationContent}>{information.content}</p>
        </Dropdown>
      ))}
    </>
  );
}
