import { Button, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss';
import { PostActions } from '../PostActions';

export const FullPost: FC = () => {
  return (
    <Paper elevation={0} className={styles.paper} style={{ padding: '25px 100px' }}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          Superjat, летящий из Волгограда в Москву, подал сигнал бедствия.Возможно ,в полете произошла разгерметизация.
        </Typography>
      </div>
      <Typography>
        Летящий из Волгограда в Москву лайнер Sukhoi Superjet 100 подал сигнал бедствия над Тамбовской областью. Лайнер
        сейчас находится на подлете к аэропорту Шереметьево. Самолет Sukhoi Superjet 100 авиакомпании
      </Typography>
      <Typography>
        «Россия», следующий по маршруту Волгоград — Москва, подал сигнал бедствия и снизился до 3000 метров над Липецкой
        областью из-за разгерметизации салона. По данным сервиса Flightradar, рейс FV6416 авиакомпании
      </Typography>
      <Typography>
        «Россия», выполнявшийся из Волгограда с вылетом в 12:56, резко снизился близ города Чаплыгина Липецкой области и
        продолжил полёт на малой высоте. В 14:27 самолет совершил посадку в аэропорту назначения — московском
        Шереметьево.
      </Typography>
      <div style={{ width: 250 }}>
        <PostActions />
      </div>
      <div className="d-flex justify-between align-center mt-30 mb-30">
        <div className={styles.userInfo}>
          <img
            src="https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
            alt="Avatar"
          />
          <b>Donnie Darko</b>
          <span>+1685</span>
        </div>
        <div>
          <Button variant="contained" className="mr-15">
            <MessageIcon />
          </Button>
          <Button variant="contained">
            <UserAddIcon />
            <b className="ml-10">Подписаться</b>
          </Button>
        </div>
      </div>
    </Paper>
  );
};
