import React from 'react';
import { Link } from 'react-router-dom';
import TestCard from '../../../Tests/TestCard';

const TopTest = () => {
    return (
        <div id='topDoctors' class="mx-auto p-12 bg-gray-800 rounded-xl ">
             
                 <TestCard/>
                 <Link className="hidden lg:inline-block py-2 px-6 mt-2 text-sm text-green-400 hover:text-red-500 rounded-l-xl rounded-t-xl transition duration-200 float-right" to="/tests">See All</Link>
        </div>
    );
};

export default TopTest;