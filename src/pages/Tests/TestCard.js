import React from 'react';
import img1 from '../../images/MedTests/1.png'
import img2 from '../../images/MedTests/2.png'
import img3 from '../../images/MedTests/3.png'
const TestCard = () => {
    return (
        <div class="md:flex md:justify-center md:space-x-8 md:px-14">
      
        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div class="w-sm">
            <img class="w-64" src={img1} alt="" />
            <div class="mt-4 text-green-600 text-center">
              <h1 class="text-xl font-bold">Working women Health Checkup</h1>
              <p class="mt-4 text-gray-600">This checkup tests for Intellectual Abnormality, Thyroid Disorder, Liver Disorder, Diabetes Mellitus and Kidney Disorder. It also evaluates your Heart, Thyroid, Liver and Kidney.</p>
              <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Details</button>
            </div>
          </div>
        </div>
  
        
        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div class="w-sm">
            <img class="w-64" src={img2} alt="" />
            <div class="mt-4 text-green-600 text-center">
              <h1 class="text-xl font-bold">Young Indevidual Health Checkup</h1>
              <p class="mt-4 text-gray-600">This checkup tests for Intellectual Abnormality, Thyroid Disorder, Liver Disorder, Diabetes Mellitus and Kidney Disorder. It also evaluates your Heart, Thyroid, Liver and Kidney.</p>
              <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Details</button>
            </div>
          </div>
        </div>
  
        
        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div class="w-sm">
            <img class="w-64" src={img3} alt="" />
            <div class="mt-4 text-green-600 text-center">
              <h1 class="text-xl font-bold">Active Professional Health Checkup</h1>
              <p class="mt-4 text-gray-600">This checkup tests for Intellectual Abnormality, Thyroid Disorder, Liver Disorder, Diabetes Mellitus and Kidney Disorder. It also evaluates your Heart, Thyroid, Liver and Kidney.</p>
              <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TestCard;