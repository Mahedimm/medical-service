import React from 'react';
import { Link } from 'react-router-dom';
import { FiNavigation } from "react-icons/fi";
const DoctorDetailsCard = ({doctor}) => {
    const {key,name,img,description,category,price,title}=doctor;
    return (
        <div>
            <section className="relative pt-12 bg-blueGray-50">
                <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full rounded-lg shadow-lg" src={img}/>
                    <h3 className="text-3xl font-semibold text-gray-800 text-center mt-3">{name}</h3>
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-400 mt-8">
                        <span className='font-bold'>{price} ৳</span>
                    </div>
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                        {description}
                    </p>
                    <ul className="list-none mt-6">
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><FiNavigation/></span>
                            </div>
                            <div>
                            <h4 className="text-blueGray-500">
                                {category}
                            </h4>
                            </div>
                        </div>
                        </li>
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><FiNavigation/></span>
                            </div>
                            <div>
                            <h4 className="text-blueGray-500">Amazing page examples</h4>
                            </div>
                        </div>
                        </li>
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><FiNavigation/> </span>
                            </div>
                            <div>
                            <h4 className="text-blueGray-500">Dynamic components</h4>
                            </div>
                        </div>
                        </li>
                        <Link to={`/doctor/${key}/appointment`}>
                        <button className="mb-2 w-full py-4 bg-green-400 hover:bg-green-700 rounded text-lg font-bold text-gray-50 transition duration-200">Appointment</button>
                        </Link>
                        
                    </ul>
                    </div>
                </div>
                </div>
                </section>
        </div>
    );
};

export default DoctorDetailsCard;