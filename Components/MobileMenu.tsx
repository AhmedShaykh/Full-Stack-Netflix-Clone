import React, { FC } from "react";

interface Props {
    visible?: boolean;
};

const MobileMenu: FC<Props> = ({ visible }) => {

    if (!visible) return null;

    return (
        <div className="bg-black-blur-50 backdrop-blur-xl w-56 absolute top-8 left-0 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-2">
                <div className="p-2 text-center text-white hover:bg-white hover:text-black">
                    Home
                </div>
                <div className="p-2 text-center text-white hover:bg-white hover:text-black">
                    Series
                </div>
                <div className="p-2 text-center text-white hover:bg-white hover:text-black">
                    Films
                </div>
                <div className="p-2 text-center text-white hover:bg-white hover:text-black">
                    New & Popular
                </div>
                <div className="p-2 text-center text-white hover:bg-white hover:text-black">
                    My List
                </div>
                <div className="p-2 text-center text-white hover:bg-white hover:text-black">
                    Browse by Languages
                </div>
            </div>
        </div>
    )
};

export default MobileMenu;