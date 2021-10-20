import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Mahedimm/Mahedimm/main/doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    
    const handleAddCart = (doctor)=>{
        const newCart=[...cart,doctor];
        setCart(newCart);
    }
    
    return (
        <section className=" mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-green-100 py-14">
            <div className="text-center pb-12">
                <h3 className="text-2xl tracking-widest text-green-600 text-center">Online Medical Consultation</h3>
                <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">Doctor List</h1>
            </div>   
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {
                     
                          
                          doctors.map(doctor=><DoctorCard key={doctor.key} doctor={doctor} handleAddCart={handleAddCart}></DoctorCard>)
                          
                            
                    }
            
          </div>          
        </section>
    );
};

export default Doctors;