import type { NextPage } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </MainLayout>
    </div>
  );
};

export default Home;
