import React from 'react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import CustomLink from '../Shared/CustomLink/CustomLink';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className=" bg-teal-50">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full flex items-center justify-between">
                            <div >
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <CustomLink
                                        to="/"
                                        className="  px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                                    </CustomLink>

                                    <CustomLink
                                        to="/blog"
                                        className="  px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Blogs
                                    </CustomLink>

                                    <CustomLink
                                        to="/about"
                                        className=" px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        About
                                    </CustomLink>

                                    <CustomLink
                                        to="/login"
                                        className=" px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Login
                                    </CustomLink>
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
                                className="  px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </CustomLink>

                            <CustomLink
                                to="/blog"
                                className="  px-3 py-2 rounded-md text-base font-medium"
                            >
                                Blogs
                            </CustomLink>

                            <CustomLink
                                to="/about"
                                className=" px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </CustomLink>

                            <CustomLink
                                to="/login"
                                className=" px-3 py-2 rounded-md text-base font-medium"
                            >
                                Login
                            </CustomLink>
                        </div>
                    </div>

                </Transition>
            </nav>
        </div>
    );
};

export default Header;