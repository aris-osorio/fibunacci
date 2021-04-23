import React from 'react';

export default function Fail() {
    document.title = 'Fail';
    return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="display-1">500</h1>
                    <h1 className="display-4">Internal Server Error</h1>
                    <h5>An internal server error has occured</h5>
                </div>    
            </div>
    );
} 