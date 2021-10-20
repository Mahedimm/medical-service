import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../../../Doctors/DoctorCard';



const TopDoctors = () => {
    const [topDoctors,setTopDoctors]=useState([])
    useEffect(()=>{
            fetch('doctors.json')
            .then(res=>res.json())
            .then(data=> setTopDoctors(data.slice(0,4)))
    },[])
    return (
        <div id='topDoctors' class="mx-auto p-12 bg-gray-800 rounded-xl ">
            
             <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-24 space-y-4 sm:space-y-0 justify-around">
                 {  
                    topDoctors.map(doctor =><DoctorCard key={doctor.key}doctor={doctor}></DoctorCard>) 
                 }     
             </div>
             <Link className="hidden lg:inline-block py-2 px-6 mt-2 text-sm text-green-400 hover:text-red-500 rounded-l-xl rounded-t-xl transition duration-200 float-right" to="/doctors">See All</Link>
             
        </div>
    );
};

export default TopDoctors;