import React, { FC, useState } from 'react';
import { Paper, Button, IconButton, Avatar, Link } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import AuthDialog from '../AuthDialog';

export const Header: FC = () => {
  const [authVisible, setAuthVisible] = useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <a>
          <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
        </a>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {/* <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom style={{ color: 'black' }} />
          </a>
        </Link> */}
        <div className={styles.loginButton} onClick={openAuthDialog}>
          <UserIcon />
          Войти
        </div>
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
