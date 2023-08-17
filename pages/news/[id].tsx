import { MainLayout } from '../../layouts/MainLayout';
import React, { FC } from 'react';
import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import { comments } from '../../data';
import { Api } from '../../utils/api';
import { GetServerSideProps } from 'next';
import { PostItem } from '../../utils/api/types';

interface FullPostPageProps {
  post: PostItem;
}

const FullPostPage: FC<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} blocks={post.body} />

      <PostComments />
      {/* <PostComments items={comments.popular} /> */}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id;
    const post = await Api(ctx).post.getOne(+id);

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log('Fulll post page', err);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default FullPostPage;
