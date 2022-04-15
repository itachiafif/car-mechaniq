import React from 'react';
import sleeping from '../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h3 className="text-danger text-center">Sshhhhh Mechanic Sleeping</h3>
            <img className="w-100 " style={{ height: "600px" }} src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;