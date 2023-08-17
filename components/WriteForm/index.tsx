import React, { FC, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import styles from './WriteForm.module.scss';
import dynamic from 'next/dynamic';
import { TextsmsOutlined as MessageIcon } from '@material-ui/icons';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';
import { useRouter } from 'next/router';
// import { Editor } from '../Editor';

// dynamic - будет динамически подгружать модуль Editor, только когда
// будет не SSR, а на клиентской, это будет отдельный бандл
const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  data?: PostItem;
}

const WriteForm: FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(data?.title || '');
  const [blocks, setBlocks] = useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, obj);
      }
    } catch (error) {
      console.warn('Create post', error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={data}
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button disabled={isLoading || !blocks.length || !title} onClick={onAddPost} variant="contained" color="primary">
        <MessageIcon className="mr-10" />
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>
  );
};

export default WriteForm;
