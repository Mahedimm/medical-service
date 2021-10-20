import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DoctorDetailsCard from './DoctorDetailsCard';



const DoctorDetails = () => {
  const {id} = useParams();
  const [doctor,setDoctor]=useState([]);
  useEffect(()=>{
      fetch('https://raw.githubusercontent.com/Mahedimm/Mahedimm/main/doctors.json')
      .then(res=>res.json())
      .then(data=>setDoctor(data.find(({key})=> key === id)));
  },[])

  
    return (
        <div>
          <DoctorDetailsCard key={id} doctor={doctor}/>  
        </div>
    );
};

export default DoctorDetails;