import React, { FC, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import styles from './AddCommentForm.module.scss';
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';

interface AddCommentFormProps {
  postId: number;
  onSuccessAdd: (obj: CommentItem) => void;
}

const AddCommentForm: FC<AddCommentFormProps> = ({ postId, onSuccessAdd }) => {
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  const onAddComment = async () => {
    try {
      const comment = await Api().comment.create({ postId, text });
      onSuccessAdd(comment);

      setClicked(false);
      setText('');
      setIsLoading(true);
    } catch (error) {
      console.warn('Add comment', error);
      alert('Ошибка при отправки комментария');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий . . . "
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
