import React from 'react';
import  { useState, Fragment } from "react";
import { HiOutlineHome } from 'react-icons/hi';
import { FaBell, FaBriefcaseMedical ,FaClipboard,FaClipboardList, FaRegTimesCircle, FaShoppingCart, FaSistrix} from 'react-icons/fa';
import { FcMenu } from "react-icons/fc";
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import {  Menu, Transition } from '@headlessui/react'
import { BellIcon} from '@heroicons/react/outline'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const Header = () => {

    const {user,signOutGoogle} = useAuth();
    const [show, setShow] = useState(null);
    return (
        <>
        <div className="bg-gray-200 h-full w-full border-b-2 border-fuchsia-60">
            
            <nav className="w-full bg-gray-800 hidden xl:block shadow">
                <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
                    <div className="flex items-center">
                        <div className="mr-10 flex items-center">
                            <Link to='/home'>
                                <img src='./logo.png'className='h-14'alt='logo'/>
                            </Link>
                            
                        </div>
                        <ul className="hidden xl:flex items-center h-full">
                            <li className="cursor-pointer h-full flex items-center text-lg text-green-400
                            tracking-normal transition duration-150 ease-in-out">
                                <span className="mr-2">
                                <HiOutlineHome />
                                </span>
                               <Link to='/home'> Home</Link> 
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-lg hover:text-green-400 text-white mx-10 tracking-normal transition duration-150 ease-in-out">
                                <span className="mr-2">
                                <FaBriefcaseMedical />
                                </span>
                                <Link to='/doctors'>Doctors</Link> 
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-lg hover:text-green-400 text-white mr-10 tracking-normal transition duration-150 ease-in-out">
                                <span className="mr-2">
                                <FaClipboard/>
                                </span>
                                <Link to='/tests'>Tests</Link> 
                            </li>
                            <li className="cursor-pointer h-full flex items-center  hover:text-green-400 text-white text-lg tracking-normal transition duration-150 ease-in-out">
                                <span className="mr-2">
                                <FaClipboardList />
                                </span>
                                <Link to='/packages'>Packages</Link> 
                            </li>
                        </ul>
                    </div>
                    <div className="h-full hidden xl:flex items-center justify-end">
                        <div className="h-full flex">
                            <div className="px-6 h-full flex items-center justify-center border-l text-2xl border-gray-700 text-gray-400 ">
                                <input type="text" className="bg-transparent focus:outline-none text-xs w-0 transition duration-150 ease-in-out" placeholder="Type something..." />
                                <FaSistrix/>
                                    
                            </div>
                            <div className="w-20 h-full flex items-center justify-center border-l  border-r border-gray-700 text-gray-400">
                                <FaShoppingCart className='text-xl'/>
                                 <span className="inline-block w-6 h-6 m-1 text-center text-white bg-green-400 rounded-full font-semibold font-heading">3</span>
                            </div>
                           
                            {
                            
                            user.email ?
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                type="button"
                                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <Menu as="div" className="ml-3 relative">
                              <div>
                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:ring-offset-gray-800 ">
                                  <span className="sr-only">Open user menu</span>
                                  
                                  <img
                                    className="h-8 w-8 rounded-full focus:ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                    src={user.photoURL}
                                    alt='profile'
                                  />
                                  <p className="text-white text-sm ml-2">{user.displayName}</p>
                                </Menu.Button>
                                
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" style={{zIndex: 40}}>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/profile"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                      >
                                        Your Profile
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/setting"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                      >
                                        Settings
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick ={signOutGoogle}
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                      >
                                        Sign out
                                      </button>
                                    )}
                                  </Menu.Item>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                            </div>
                            :<div
                            className = ' flex items-center content-center w-60'> <Link className="hidden  lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-white font-bold border-2 border-gray-800 hover:border-gray-700 rounded-l-xl rounded-t-xl transition duration-200" to="/signIn">Sign In</Link>
                            <Link className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" to="/signUp">Sign up</Link>
                            </div>
                        }                         
                    </div>
                    
                </div>
                </div>
                
            </nav>
            {/* Navbar */}
            <nav>
                <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
                    <div className="w-24">
                      <Link><img src="./logo.png" alt="" /></Link> 
                    </div>
                    <div>
                        <div id="menu" className="text-white text-2xl" onClick={() => setShow(!show)}>
                            {show ? (
                                " "
                            ) : (
                             
                                    <FcMenu/>
                               
                                
                            )}
                        </div>
                    </div>
                </div>
                {/*Mobile responsive sidebar*/}
                <div className={show ? "absolute w-full h-full transform -translate-x-0 z-40" : "absolute w-full h-full transform -translate-x-full z-40"} id="mobile-nav">
                    <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <Link to="/home">
                                                    <img src="./logo.png" alt="" />
                                                </Link>
                                            </div>
                                            <div id="cross" className="text-white text-2xl" onClick={() => setShow(!show)}>
                                            <FaRegTimesCircle/>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        <Link to='/home' className="cursor-pointer">
                                            <li className="text-white pt-10">
                                                <div className="flex items-center content-center text-green-400 xl:text-base text-xl ml-3 ">
                                                    <div className="text-2xl mr-2">
                                                    <HiOutlineHome /> 
                                                    </div>

                                                    <p className="">Home</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/doctors' className="cursor-pointer">
                                            <li className="text-white pt-10">
                                                <div className="flex items-center content-center hover:text-green-400 xl:text-base text-xl ml-3 ">
                                                    <div className="text-2xl mr-2">
                                                    <HiOutlineHome /> 
                                                    </div>

                                                    <p className="">Doctors</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/tests' className="cursor-pointer">
                                            <li className="text-white pt-10">
                                                <div className="flex items-center content-center hover:text-green-400 xl:text-base text-xl ml-3 ">
                                                    <div className="text-2xl mr-2">
                                                    <HiOutlineHome /> 
                                                    </div>

                                                    <p className="">Tests</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/packages' className="cursor-pointer">
                                            <li className="text-white pt-10">
                                                <div className="flex items-center content-center hover:text-green-400 xl:text-base text-xl ml-3 ">
                                                    <div className="text-2xl mr-2">
                                                    <HiOutlineHome /> 
                                                    </div>

                                                    <p className="">Packages</p>
                                                </div>
                                            </li>
                                        </Link>
                                       
                                    </ul>
                                </div>
                                <div className="w-full pt-4">
                                    <div className="flex justify-center mb-4 w-full">
                                        <div className="relative w-full">
                                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <FaSistrix/>  
                                            </div>
                                            <input className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2" type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    
                                    <div className="border-t border-gray-700">
                                    { 
                                    user.email?
                                        <div className="w-full flex items-center justify-between pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src={user.photoURL}className="w-8 h-8 rounded-md" />
                                                <p className=" text-white text-base leading-4 ml-2">{user.displayName}</p>
                                            </div>
                                            <ul className="flex">
                                                <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                        </svg>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        :<div
                                        className = ' flex items-center content-center w-auto mt-2'> 
                                        <Link className="hidden  md:inline-block md:ml-auto md: py-2 px-6 text-sm text-white font-bold border-2 border-gray-800 hover:border-gray-700 rounded-l-xl rounded-t-xl transition duration-200" to="/signIn">Sign In</Link>
                                        <Link className="hidden md:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" to="/signUp">Sign up</Link>
                                        </div>
    
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar ends */}
            {/* Code block ends */}
        </div>
    </>

    );
};

export default Header;