import HeaderImage from '../../components/HeaderImage/HeaderImage';
import image from '../../assets/images/mountain-and-ocean.jpg';
import { useEffect } from 'react';
import { useFetchLodgement } from '../../hooks/useFetchLodgement';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Cards from '../../components/Cards/Cards';

export default function Home() {
  const titlePage = 'Kasa - Accueil';
  const headerImageTitle = `Chez vous, partout ailleurs`;
  const imageAlternativeText = 'Mountain and ocean';
  const customClasses = ['mobileSmall'];

  useEffect(() => {
    document.title = titlePage;
  }, []);

  const { lodgements, isLoading, error } = useFetchLodgement();

  return (
    <>
      <HeaderImage image={image} title={headerImageTitle} imageAlternativeText={imageAlternativeText} customClasses={customClasses} />
      {isLoading === true ? <Loading /> : error !== null ? <Error message="Impossible de charger les données" /> : <Cards lodgements={lodgements} />}
    </>
  );
}
