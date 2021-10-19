import React from 'react';
import { Link } from 'react-router-dom';

const TopPackages = () => {
    return (
        <div>
            <div id='topDoctors' class="mx-auto p-12 bg-gray-800 rounded-xl ">
             
            <div class="text-center pb-12">
                <h3 class="text-2xl tracking-widest text-green-600 text-center">Coming Soon</h3>
                <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Best packages</h1>
            </div>
             <Link className="hidden lg:inline-block py-2 px-6 mt-2 text-sm text-green-400 hover:text-red-500 rounded-l-xl rounded-t-xl transition duration-200 float-right" to="/packages">See All</Link>
    </div>
        </div>
    );
};

export default TopPackages;