import React from 'react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import CustomLink from '../Shared/CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import '../../Styles/Header/Header.css';
import logo from '../../images/logoes/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav className=" header-container z-10">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full flex items-center justify-between">
                            <div >
                                <img
                                    className="h-16"
                                    src={logo}
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {
                                        user ?
                                            <>
                                                <CustomLink
                                                    to="inventory"
                                                    className="  px-3 py-2 rounded-full text-base font-medium"
                                                >
                                                    Manage Stock
                                                </CustomLink>
                                                <CustomLink
                                                    to="my-items"
                                                    className="  px-3 py-2 rounded-full text-base font-medium"
                                                >
                                                    My Items
                                                </CustomLink>
                                                <CustomLink
                                                    to="add-stock"
                                                    className="  px-3 py-2 rounded-full text-base font-medium"
                                                >
                                                    Add Item
                                                </CustomLink>

                                            </> : ''
                                    }
                                    <CustomLink
                                        to="/"
                                        className="  px-3 py-2 rounded-full text-base font-medium"
                                    >
                                        Home
                                    </CustomLink>

                                    <CustomLink
                                        to="/blog"
                                        className="  px-3 py-2 rounded-full text-base font-medium"
                                    >
                                        Blogs
                                    </CustomLink>

                                    <CustomLink
                                        to="/about"
                                        className="  px-3 py-2 rounded-full text-base font-medium"
                                    >
                                        About
                                    </CustomLink>
                                    {
                                        user ? <CustomLink
                                            onClick={() => signOut(auth)}
                                            to="/login"
                                            className="  px-3 py-2 rounded-full text-base font-medium"
                                        >
                                            Log Out
                                        </CustomLink> :
                                            <CustomLink
                                                to="/login"
                                                className="  px-3 py-2 rounded-full text-base font-medium"
                                            >
                                                Login
                                            </CustomLink>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="md:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <CustomLink
                                to="/"
                                className="  px-3 py-2 rounded-full text-base font-medium"
                            >
                                Home
                            </CustomLink>

                            <CustomLink
                                to="/blog"
                                className="  px-3 py-2 rounded-full text-base font-medium"
                            >
                                Blogs
                            </CustomLink>

                            <CustomLink
                                to="/about"
                                className="  px-3 py-2 rounded-full text-base font-medium"
                            >
                                About
                            </CustomLink>
                            {
                                user ?
                                    <CustomLink onClick={() => signOut(auth)}
                                        to="/login"
                                        className="  px-3 py-2 rounded-full text-base font-medium"
                                    >
                                        Log Out
                                    </CustomLink> :
                                    <CustomLink
                                        to="/login"
                                        className="  px-3 py-2 rounded-full text-base font-medium"
                                    >
                                        Login
                                    </CustomLink>
                            }

                        </div>
                    </div>

                </Transition>
            </nav>
        </div>
    );
};
//freefrontend
//bbbootstrap
//tailwindcomponents
//tailwindelement

export default Header;