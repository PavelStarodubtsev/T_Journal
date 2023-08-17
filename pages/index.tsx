import type { NextPage } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { Api } from '../utils/api';

interface HomeProps {
  posts: any[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  console.log('fromBack-posts', posts);

  return (
    <div>
      <MainLayout>
        {posts.map((obj) => (
          <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} />
        ))}
      </MainLayout>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        posts: null,
      },
    };
  }
};

export default Home;
