import React, { FC } from "react";
import useCurrentUser from "@/Hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const images = [
    "/assets/default-blue.png",
    "/assets/default-red.png",
    "/assets/default-slate.png",
    "/assets/default-green.png"
];

interface UserCardProps {
    name: string;
};

export async function getServerSideProps(context: NextPageContext) {

    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            }
        }
    };

    return {
        props: {}
    };
};

const UserCard: FC<UserCardProps> = ({ name }) => {

    const imgSrc = images[Math.floor(Math.random() * 4)];

    return (
        <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">

                <img
                    draggable={false}
                    className="w-max h-max object-contain"
                    src={imgSrc}
                    alt="Profiles Images"
                />
            </div>

            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {name}
            </div>
        </div>
    );
};

const Profiles = () => {

    const router = useRouter();

    const { data: currentUser } = useCurrentUser();

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">
                    {`Who's Watching?`}
                </h1>

                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push("/")}>
                        <UserCard name={currentUser?.name} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profiles;