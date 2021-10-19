import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DoctorCard from './DoctorCard';

const DoctorDetails = () => {
   const {id} = useParams();
  
   const [details,setDetails] = useState([]);
 

    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
//    const details = doctors.find(({key})=> key === id);
//    console.log(details);
   console.log(id);
   console.log(details);

    return (
        <div>
          
            
        </div>
    );
};

export default DoctorDetails;