import React from 'react';
import Expert from '../../Home/Expert/Expert'
import experts1 from '../../../images/experts/expert-1.jpg'
import experts2 from '../../../images/experts/expert-2.jpg'
import experts3 from '../../../images/experts/expert-3.jpg'
import experts4 from '../../../images/experts/expert-4.jpg'
import experts5 from '../../../images/experts/expert-5.jpg'
import experts6 from '../../../images/experts/expert-6.png'

const Experts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: experts1 },
        { id: 2, name: 'Paul Walker', img: experts2 },
        { id: 3, name: 'Joes Bejub', img: experts3 },
        { id: 4, name: 'Dana Smith', img: experts4 },
        { id: 5, name: 'Gabrial Arthur', img: experts5 },
        { id: 6, name: 'Cotiunho', img: experts6 }
    ]

    return (
        <div id="experts" className="container mt-5">
            <h2 className="text-primary text-center ">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id}
                        expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;