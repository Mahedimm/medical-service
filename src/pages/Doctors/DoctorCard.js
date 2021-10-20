import React from 'react';
import {FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
    const {name,img,price,category,title,key ,handleAddCart,followers}= props.doctor;
    return (
        <div>
           
                <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2
                hover:shadow-xl transform  bg-white hover:scale-110 transition duration-500">
                    <div className="relative z-10" style={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))"}}>
                    <img className="w-full" src={img}
                    alt="Profile" />
                <div className="text-center absolute w-full" style={{bottom: "4rem"}}>
                    <p className="text-white tracking-wide uppercase text-lg font-bold">{name}</p>
                    <p className="text-yellow-300 text-sm">{category}</p>
                </div>
                </div>
                <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                <p className="flex items-center text-gray-400">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2">
                    </span>
                    online
                </p>
                <button onClick={handleAddCart}
                        className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6">
                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399C15.952,9,16,9.447,16,10z" />
                    </svg>
                </button>
                </div>
               
                <div className="pl-2 pb-8 text-center">
                <div
                            className = ' flex items-center content-center w-60'> <Link className="hidden  lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm bg-gray-600 text-white font-bold border-2 border-gray-800 hover:bg-gray-700 rounded-l-xl rounded-t-xl transition duration-200" to={`/doctor/${key}`}>Profile</Link>
                            <Link className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" to={`/doctor/${key}/appointment`}>Appointment</Link>
                            </div>
                
                </div>
               
                <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
                <div className="posts">
                <button className="bg-green-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 flex justify-evenly content-center justify-items-center items-center">
                <FiPhoneCall />
                    CaLL 
                </button>
                </div>
                <div className="followers">
                    <p className="text-gray-400 text-sm">Followers</p>
                    <p className="text-lg font-semibold text-blue-300">{followers}</p>
                </div>
                <div className="following">
                    <p className="text-gray-400 text-sm">Price</p>
                    <p className="text-lg font-bold text-blue-300">{price}৳</p>
                </div>
                </div>
            </div>
            
            </div>
        
    );
};

export default DoctorCard;