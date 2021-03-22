import Link from 'next/link';
import React from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import MainMenu from '../MainMenu/MainMenu';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <ContentContainer>
        <div className={styles.header__content}>
          <Link href="/">
            <a href="/" className={styles.header__logo} tabIndex={-1}>
              НПП Реставрационный центр
            </a>
          </Link>
          <MainMenu />
        </div>
      </ContentContainer>
    </div>
  );
}

export default Header;
