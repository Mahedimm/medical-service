import React from 'react';

import { Tab } from '@headlessui/react'
import TopDoctors from './TabPages/TopDoctors';
import TopTest from './TabPages/TopTest';
import TopPackages from './TabPages/TopPackages';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const tabs =["Top Doctors", "Top Test", "Top Packages"]
const Tabs = () => {
    return (
        <div className="w-full max-w-md px-2  sm:px-0">
        <Tab.Group>
          <Tab.List className="flex mx-5 p-1 bg-blue-900/20 rounded-xl justify-center content-center justify-items-center">
            {tabs.map(tab => (
              <Tab
                
                className={({ selected }) =>
                  classNames(
                    'w-screen py-2.5 text-sm leading-5 font-medium m-2 bg-white text-green-400 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white ring-green-600 ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-green-400 hover:bg-white/[0.12] hover:text-green-600'
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 w-screen ">
          
              <Tab.Panel>
                <TopDoctors />
              </Tab.Panel>
              <Tab.Panel>
                <TopTest />
              </Tab.Panel>
              <Tab.Panel>
                <TopPackages />
              </Tab.Panel>
           
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
};

export default Tabs;