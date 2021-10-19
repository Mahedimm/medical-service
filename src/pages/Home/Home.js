import { Switch } from '@headlessui/react';
import React from 'react';
import { Route, Router } from 'react-router';
import Slider from './Slider/Slider';
import TopDoctors from './Tabs/TabPages/TopDoctors';
import Tabs from './Tabs/Tabs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
                <Tabs />
               
            
        </div>
    );
};

export default Home;