import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

export default function Breadcrum() {
    return (
        <>
        <div className='m-3'>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Demo</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </div>
        </>
    );
}