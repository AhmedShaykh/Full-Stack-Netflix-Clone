import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/Components/Navbar";
import Billboard from "@/Components/Billboard";
import MovieList from "@/Components/MovieList";

export async function getServerSideProps(context: NextPageContext) {

    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }
        }
    };

    return {
        props: {}
    };
};

const Home = () => {
    return (
        <>
            <Navbar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" />
                <MovieList title="My List" />
            </div>
        </>
    )
};

export default Home;