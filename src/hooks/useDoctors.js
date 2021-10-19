import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[])
    return console.log(details);
};

export default useDoctors;