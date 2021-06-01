import { useState } from 'react';

import ActiveLink from '../ActiveLink/ActiveLink';
import styles from './MainMenu.module.scss';
import { MenuItem } from '../../types';
import SubMenu from './SubMenu';

type Props = {
  item: MenuItem;
};

const MainMenuItem = ({ item }: Props): JSX.Element => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  const itemButton = (
    <button type="button" className={styles['main-menu__link']}>
      {item.name}
    </button>
  );

  return (
    <li
      className={styles['main-menu__item']}
      onMouseOver={showSubMenu}
      onFocus={showSubMenu}
      onMouseOut={hideSubMenu}
      onBlur={hideSubMenu}
    >
      {item.link ? (
        <ActiveLink
          href={item.link}
          activeClassName={styles['main-menu__link_active']}
        >
          {itemButton}
        </ActiveLink>
      ) : (
        itemButton
      )}
      {item.sub && <SubMenu items={item.sub} visible={subMenuVisible} />}
    </li>
  );
};

export default MainMenuItem;
