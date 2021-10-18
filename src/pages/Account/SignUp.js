import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './AccountComponents/Button';
import Top from './AccountComponents/Top';

const SignUp = () => {
    return (
        <div>
             <section>
            <div className="flex  min-h-screen overflow-hidden flex-wrap  bg-gray-800 ">
              <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-2/5">
                <div className="w-full max-w-2xl mx-auto lg:w-96">
                <Top>
                    <Link to='/signIn'>Sign In</Link>
                    
                </Top>
                  <div>

                    <h2 className="mt-6 text-3xl font-extrabold text-gray-500">Sign Up.</h2>
                    <h3 className="text-2xl font-bold text-white">Create an account</h3>
                  </div>
                  <div className="mt-8">
                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label for="name" className="block text-sm font-medium text-white"> Enter your name </label>
                          <div className="mt-1">
                            <input id="name" name="name" type="text" autocomplete="name" required="" placeholder="Your Name" className="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label for="email" className="block text-sm font-medium text-white"> Email address </label>
                          <div className="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" className="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label for="password" className="block text-sm font-medium text-white"> Password </label>
                          <div className="mt-1">
                            <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" className="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                          </div>
                        </div>
                       
                        <div className='text-center'>
                          <Button>
                              Sign Up
                          </Button>
                          <span className="text-gray-400 text-xs ">
                            <span>Already have an account?</span>
                             <NavLink to='signIn' className="text-green-600 hover:underline" >Sign In</NavLink>
                        </span>
                        </div>
                      </form>
                   
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative flex-1 hidden  overflow-hidden lg:block w-3/5">
                <img className="absolute inset-0 object-cover w-full h-full" src="https://d33wubrfki0l68.cloudfront.net/871da9bc7972ea11744d2db42565e595ed655913/28dd7/images/placeholders/rectanglewide.svg" alt=""/>
              </div>
            </div>
          </section>
        </div>
    );
};

export default SignUp;