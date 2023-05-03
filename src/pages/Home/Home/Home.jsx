import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../Chefs/ChefsCard';
import FoodCard from '../FoodCard/FoodCard';
import Location from '../Location/Location';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <div className="py-5 ">
            <div>
                <h2 className="text-center mb-5">Our Chefs</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto">
                    {
                        chefs.map(chef => <ChefsCard
                            key={chef.id}
                            chef={chef}
                        >

                        </ChefsCard>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-center mb-2 mt-5">Our Menu Items</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto">
                    {
                        chefs.map(food => <FoodCard
                            key={food.id}
                            food={food}
                        >

                        </FoodCard>)
                    }
                </div>
            </div>
            
            <div>
                <Location></Location>
            </div>

        </div>
    );
};

export default Home;