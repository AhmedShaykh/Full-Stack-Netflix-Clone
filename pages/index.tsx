import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/Components/Navbar";
import Billboard from "@/Components/Billboard";
import MovieList from "@/Components/MovieList";
import useMovieList from "@/Hooks/useMovieList";
import useFavorites from "@/Hooks/useFavorites";

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

    const { data: movies = [] } = useMovieList();

    const { data: favorites = [] } = useFavorites();

    return (
        <>
            <Navbar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" data={movies} />
                <MovieList title="My List" data={favorites} />
            </div>
        </>
    )
};

export default Home;