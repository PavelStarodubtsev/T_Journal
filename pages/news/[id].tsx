import { MainLayout } from '../../layouts/MainLayout';
import React, { FC } from 'react';
import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import { comments } from '../../data';

const FullPostPage: FC = () => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />

      <PostComments />
      {/* <PostComments items={comments.popular} /> */}
    </MainLayout>
  );
};

export default FullPostPage;
