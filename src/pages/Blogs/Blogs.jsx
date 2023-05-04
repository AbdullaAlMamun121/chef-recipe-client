import React from 'react';
import ReactToPdf from 'react-to-pdf';

const Blogs = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [8.27, 11.69],
        scale: 0.5 // change the scale option to a valid value
    };

    return (
        <div className='mt-5 w-75 mx-auto'>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref}>
                <div class="card">
                    <div class="card-header">
                        Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Uncontrolled components:

                            Manage their own state and behavior internally
                            Are self-contained and have no dependencies on other parts of the application
                            Can be used in various contexts without modification
                            Useful for simple, standalone functionality
                            Controlled components:

                            Rely on external state management and behavior control
                            Receive their state and behavior as props from a parent component
                            Communicate changes back to the parent component through callbacks
                            More flexible and customizable than uncontrolled components
                            Suitable for complex forms, data grids, and interactive visualizations

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
