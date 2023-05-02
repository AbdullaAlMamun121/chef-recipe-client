import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../Chefs/ChefsCard';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <div className="chef-section py-5 ">
            <h2 className="text-center mb-4">Our Chefs</h2>
            <div className="d-flex w-100">
                {
                    chefs.map(chef => <ChefsCard
                        key={chef.id}
                        chef={chef}
                    >

                    </ChefsCard>)
                }
            </div>
        </div>
    );
};

export default Home;