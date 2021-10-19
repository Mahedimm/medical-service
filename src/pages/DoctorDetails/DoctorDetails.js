import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDoctors from '../../Hooks/useDoctors';


const DoctorDetails = () => {
   const {id} = useParams();

   useDoctors();
   //i don't find data why everything ok but data not showing

//    const details = doctors.find(({key})=> key === id);
   
   console.log(id);
   

    return (
        <div>
          {
              <h1>Doctor Id :{id}</h1>
          }
            
        </div>
    );
};

export default DoctorDetails;