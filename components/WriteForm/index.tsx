import React, { FC } from 'react';
import { Button, Input } from '@material-ui/core';
import styles from './WriteForm.module.scss';
import dynamic from 'next/dynamic';
import { TextsmsOutlined as MessageIcon } from '@material-ui/icons';
// import { Editor } from '../Editor';

// dynamic - будет динамически подгружать модуль Editor, только когда
// будет не SSR, а на клиентской, это будет отдельный бандл
const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  title: string;
}

const WriteForm: FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        <MessageIcon className="mr-10" />
        Опубликовать
      </Button>
    </div>
  );
};

export default WriteForm;
