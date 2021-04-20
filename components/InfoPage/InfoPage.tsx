import { FC } from 'react';
import Link from 'next/link';

import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './InfoPage.module.scss';

const InfoPage: FC = () => (
  <section className={styles.info}>
    <ContentContainer>
      <h2 className={styles.info__header}>Информация</h2>
      <ul className={styles.info__list}>
        <li>
          <Link href="/info/definitions">Термины и определения</Link>
        </li>
        <li>
          <Link href="/info/steps">
            Последовательность разработки научно-проектной документации
          </Link>
        </li>
        <li>
          <Link href="/info/contents">
            Состав и содержание научно-проектной документации
          </Link>
        </li>
        <li>
          <Link href="/info/order">
            Порядок проведения историко-культурных исследований
          </Link>
        </li>
      </ul>
    </ContentContainer>
  </section>
);

export default InfoPage;
