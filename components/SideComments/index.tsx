import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import data from '../../data';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';
import styles from './SideComments.module.scss';

export const SideComments = () => {
  //   const { comments } = useComments();
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible &&
        data.comments?.popular?.map((obj) => (
          <CommentItem
            key={obj?.id}
            user={obj?.user}
            text={obj?.text}
            post={obj?.post}
          />
        ))}
    </div>
  );
};
