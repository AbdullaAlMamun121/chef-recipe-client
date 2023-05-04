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
                <div class="card">
                    <div class="card-header">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            A custom hook is a reusable JavaScript function in a React application that allows you to share logic across multiple components. You might create a custom hook to avoid code duplication, abstract complex logic, or encapsulate stateful logic that needs to be shared between multiple components.

                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        How to validate React props using PropTypes?
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            To validate React props using PropTypes, import PropTypes from the 'prop-types' package, add a 'propTypes' object to your component's definition that specifies the expected types and shapes of the props, use your component and pass in the props, and React will validate that the props match the expected types and shapes. If a prop is missing or has an unexpected type or shape, React will log a warning in the console. Make sure to remove or disable PropTypes checks in production builds.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Tell us the difference between nodejs and express js.
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a framework for building web applications in Node.js.
                            Node.js provides the foundation for building server-side applications in JavaScript, while Express.js builds on top of Node.js by providing an easy-to-use set of features for building web applications.
                            Node.js provides core modules for handling low-level tasks such as file system access and network communication, while Express.js provides higher-level abstractions for tasks such as routing, middleware, and template rendering.
                            Node.js can be used with other web frameworks besides Express.js, while Express.js is specifically designed for building web applications in Node.js.
                            Node.js is more general-purpose and can be used for a variety of applications, while Express.js is focused on building web applications and provides a streamlined set of features for that purpose.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
