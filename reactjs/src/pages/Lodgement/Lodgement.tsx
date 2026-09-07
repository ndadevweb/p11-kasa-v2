import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import { useFindLodgement } from '../../hooks/useFindLodgement';
import Loading from '../../components/Loading/Loading';
import styles from './Lodgement.module.css';
import Slideshow from '../../components/Slideshow/Slideshow';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Lodgement() {
  const { id } = useParams();
  const { lodgement, isLoading, error } = useFindLodgement(id);

  useEffect(() => {
    if (lodgement) {
      document.title = `${lodgement.title} - ${lodgement.location}`;
    } else {
      document.title = 'Aucune information sur ce logement';
    }
  }, [lodgement]);

  if (error !== null || (lodgement === null && isLoading === false)) {
    return <Navigate to="error" replace={true} />;
  }

  if (isLoading === true) {
    return <Loading />;
  }

  if (lodgement === null) {
    return null;
  }

  return (
    <>
      <Slideshow pictures={lodgement.pictures} />

      <section className={styles.informations}>
        <header className={styles.header}>
          <h2 className={styles.lodgementTitle}>{lodgement.title}</h2>
          <h3 className={styles.locationTitle}>{lodgement.location}</h3>
        </header>

        <aside className={styles.complementary}>
          <Host name={lodgement.host.name} picture={lodgement.host.picture} />
          <Rating rating={Number(lodgement.rating)} />
        </aside>

        <div className={styles.tags}>
          <Tags tags={lodgement.tags} />
        </div>

        <div className={styles.details}>
          <Dropdown title={'Description'} isDefaultExpanded={true} optionStyle="thin">
            <p>{lodgement.description}</p>
          </Dropdown>

          <Dropdown title={'Équipements'} isDefaultExpanded={true}>
            <ul>
              {lodgement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </section>
    </>
  );
}
