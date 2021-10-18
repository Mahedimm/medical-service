import React from 'react';

const Button = (props) => {
    return (
        <div>
            <div>
            <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">{props.children}</button>
        </div>
        </div>
    );
};

export default Button;