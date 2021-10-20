import React, { useEffect, useState } from 'react';


const useDoctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Mahedimm/Mahedimm/main/doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    return doctors;
};

export default useDoctors;