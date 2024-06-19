import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import {
    Link
  } from "react-router-dom";
export default function Breadcrum({routename}) {
    return (
        <>
        <div className='m-3'>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                <Link to="/home">Learn React</Link>
                </MDBBreadcrumbItem>
                {routename==='home'?<>
                    <MDBBreadcrumbItem active><Link to="/home">Home</Link></MDBBreadcrumbItem>
                </>:
                routename==='contactUs'?<>
                    <MDBBreadcrumbItem active><Link to="/contactUs">Contact Us</Link></MDBBreadcrumbItem>
                </>:''
                }
                
            </MDBBreadcrumb>
        </div>
        </>
    );
}