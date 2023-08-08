import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {}

const AddCommentForm = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
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
