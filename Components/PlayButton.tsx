import React, { FC } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

interface PlayButtonProps {
    movieId: string;
};

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {

    const router = useRouter();

    return (
        <button
            className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs 
            lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
            onClick={() => router.push(`/watch/${movieId}`)}
        >
            <PlayIcon className="w-4 md:w-7 text-black mr-1" />
            Play
        </button>
    )
};

export default PlayButton;