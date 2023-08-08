import React, { FC, useState } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import AddCommentForm from '../AddCommentForm';
import data from '../../data';

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

export const PostComments: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const comments = data?.comments[activeTab === 0 ? 'popular' : 'new'];


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
        <AddCommentForm />
        <div className="mb-20" />
        {comments?.map((obj) => (
          <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt} />
        ))}
      </div>
    </Paper>
  );
};
