import React, { useCallback, useState } from "react";
import NavbarItem from "./NavbarItem";
import {
    BellIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';
import MobileMenu from "./MobileMenu";

const Navbar = () => {

    const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    const [showBackground, setShowBackground] = useState<boolean>(false);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900`}
            >
                <img src="/assets/logo.png" className="h-4 lg:h-7" alt="Logo" />

                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" active />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>

                <div
                    className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
                    onClick={toggleMobileMenu}
                >
                    <p className="text-white text-sm">Browse</p>
                    <ChevronDownIcon className={`w-4 text-white fill-white transition`} />
                    <MobileMenu visible={showMobileMenu}/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;