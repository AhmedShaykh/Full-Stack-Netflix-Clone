import React, { useCallback } from "react";
import useBillboard from "@/Hooks/useBillboard";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const Billboard = () => {

    const { data } = useBillboard();

    return (
        <div className="relative h-[58vw] w-full">
            <video
                className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}
                autoPlay
                muted
                loop
            >
            </video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white mt-1 md:mt-0 text-xl md:text-5xl h-full w-[80%] lg:text-6xl font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="text-white text-xs md:text-lg mt-2 md:mt-8 w-[95%] md:w-[80%] lg:w-[60%] drop-shadow-xl">
                    {data?.description}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <button
                        className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
                    >
                        <InformationCircleIcon className="w-4 md:w-7 mr-2" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Billboard;