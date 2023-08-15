import type { GetServerSideProps, NextPage } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api';
import { setUserData } from '../redux/slices/user';

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

// Гидрация - это синхронизация Redux(на серверной части) и Redux(на клиентской части)
// связываем index.tsx с Redux, теперь получаем корректно данные из Redux
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  try {
    const { authToken } = parseCookies(ctx);

    const userData = await UserApi.getMe(authToken);

    //@ts-ignore
    store.dispatch(setUserData(userData));

    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
});
export default Home;
