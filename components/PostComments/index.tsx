import React, { FC, useEffect, useState } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import AddCommentForm from '../AddCommentForm';
import data from '../../data';
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { useComments } from '../../hooks/useComments';

// type CommentObj = {
//   text: string;
//   id: number;
//   createdAt: string;
//   user: {
//     id: number;
//     fullname: string;
//     avatarUrl: string;
//   };
//   post: {
//     id: number;
//     title: string;
//   };
// };

// interface PostCommentsProps {
//   items: CommentObj[];
// }

interface PostCommentsProps {
  postId: number;
}

export const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = useState(0);
  // кастомный хук, принимет id-поста, возвращает массив
  // комментариев по postId, делает fetch запрос к БД
  const { comments, setComments } = useComments(postId);

  const onSuccessAdd = (obj: CommentItem) => {
    setComments((prev) => [...prev, obj]);
  };

  const onSuccessRemove = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-30">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          value={activeTab}
          className="mt-20"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        {userData && <AddCommentForm onSuccessAdd={onSuccessAdd} postId={postId} />}
        <div className="mb-20" />
        {comments?.map((obj) => (
          <Comment
            key={obj.id}
            id={obj.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
            currentUserId={userData?.id}
            onSuccessRemove={onSuccessRemove}
          />
        ))}
      </div>
    </Paper>
  );
};
