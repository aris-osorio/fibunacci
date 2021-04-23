import React from 'react';
import { PuffLoader } from 'react-spinners';

export default function Loading() {
    document.title = 'Loading';
    return (
        <div className="">
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <PuffLoader color="#2c7eb4" size="250" />
                <p className="font-weight-light position-absolute txt-loading color-blue-1">Loading</p>
            </div>
        </div>
    );
} 