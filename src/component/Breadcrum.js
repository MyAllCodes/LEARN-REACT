import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import {
    Link
  } from "react-router-dom";
export default function Breadcrum() {
    return (
        <>
        <div className='m-3'>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                <Link to="/home">Learn React</Link>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active><Link to="/home">Home</Link></MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </div>
        </>
    );
}