import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

// import data from '../../data';
import styles from './SideComments.module.scss';
// import { CommentItem } from './CommentItem';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
// import { useComments } from '../../hooks/useComments';

export const SideComments = () => {
  //   const { comments } = useComments();
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={clsx(styles.root, !visible && styles.rotated)}>
        <h3 onClick={toggleVisible}>
          Комментарии <ArrowRightIcon />
        </h3>
        <div className={styles.commentItem}>
          <div className={styles.userInfo}>
            <img src="/static/img/s.png" style={{ marginRight: 10 }} />
            <a>
              <b>Вася Пупкин</b>
            </a>
          </div>
          <p className={styles.text}>
            Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и . . .
          </p>
          <a>
            <span className={styles.postTitle}>Какая у вас дома ванна?</span>
          </a>
        </div>
      </div>

      <div className={clsx(styles.root, !visible && styles.rotated)}>
        <h3 onClick={toggleVisible}>
          Комментарии <ArrowRightIcon />
        </h3>
        <div className={styles.commentItem}>
          <div className={styles.userInfo}>
            <img src="/static/img/s.png" style={{ marginRight: 10 }} />
            <a>
              <b>Вася Пупкин</b>
            </a>
          </div>
          <p className={styles.text}>
            Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и . . .
          </p>
          <a>
            <span className={styles.postTitle}>Какая у вас дома ванна?</span>
          </a>
        </div>
      </div>

      <div className={clsx(styles.root, !visible && styles.rotated)}>
        <h3 onClick={toggleVisible}>
          Комментарии <ArrowRightIcon />
        </h3>
        <div className={styles.commentItem}>
          <div className={styles.userInfo}>
            <img src="/static/img/s.png" style={{ marginRight: 10 }} />
            <a>
              <b>Вася Пупкин</b>
            </a>
          </div>
          <p className={styles.text}>
            Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и . . .
          </p>
          <a>
            <span className={styles.postTitle}>Какая у вас дома ванна?</span>
          </a>
        </div>
      </div>
    </>
  );
};
