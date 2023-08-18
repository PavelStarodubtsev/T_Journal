import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import data from '../../data';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';
import styles from './SideComments.module.scss';
import { useComments } from '../../hooks/useComments';

export const SideComments = () => {
  // кастомный хук, принимет id-поста, возвращает массив
  // комментариев по postId, делает fetch запрос к БД
  // postId мы уже передаем в компоненте PostComments,здесь только получаем комменты
  const { comments } = useComments();
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments?.map((obj) => <CommentItem key={obj?.id} {...obj} />)}
    </div>
  );
};
