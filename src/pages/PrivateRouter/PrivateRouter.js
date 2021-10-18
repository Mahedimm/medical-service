import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    //const {children, ...rest} = props;
    const {user,isLoading} =useAuth();
    if(isLoading){
        return <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-blue-400 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-blue-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-blue-400 rounded"></div>
              <div class="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    }
    return (
        <Route {...rest}
        render={({location}) =>user.email?children : <Redirect
            to={{
                pathname: '/signIn',
                state:{from: location}
            }}
        /> }>
            
        </Route>
    );
};

export default PrivateRoute;