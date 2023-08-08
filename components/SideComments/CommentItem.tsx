import React, { FC, useState } from 'react';
// import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
// import clsx from 'clsx';
// import data from '../../data';
import { Avatar, Link } from '@material-ui/core';

type userType = {
  id: number;
  fullname: string;
  avatarUrl: string;
};

type postType = {
  id: number;
  title: string;
};

interface CommentItemProps {
  user: userType;
  text: string;
  post: postType;
}

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }) => {


  return (
    <div className={styles.commentItem}>
    <div className={styles.userInfo}>
      <Avatar style={{ marginRight: 10 }}>{user.fullname[0]}</Avatar>
      <Link href={`/profile/${user.id}`}>
        <a>
          <b>{user.fullname}</b>
        </a>
      </Link>
    </div>
    <p className={styles.text}>{text}</p>
    <Link href={`/news/${post.id}`}>
      <a>
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </Link>
  </div>
  );
};
