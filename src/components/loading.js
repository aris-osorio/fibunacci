import React from 'react';
import { PuffLoader } from 'react-spinners';

export default function Loading() {
    document.title = 'Loading';
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <PuffLoader color="#0A0A0A" size="300" />
            <p className="display-4 position-absolute txt-loading">Loading</p>
        </div>
    );
} 