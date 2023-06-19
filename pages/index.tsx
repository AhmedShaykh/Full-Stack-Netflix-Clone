import Auth from './auth';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>
                    Netflix
                </title>
            </Head>

            <Auth />
        </>
    )
};

export default Home;