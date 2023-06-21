import React from "react";
import { NextPageContext } from "next";
import useCurrentUser from "@/Hooks/useCurrentUser";
import { getSession, signOut } from "next-auth/react";

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

    const {data: user} = useCurrentUser();

    return (
        <>
            <h1 className="text-white">
                Hello
            </h1>

            <h2 className="text-white my-8">
                {user?.name}
            </h2>

            <button
                className="h-10 w-20 bg-white"
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </>
    )
};

export default Home;