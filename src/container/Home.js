import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Home({ languages }) {
  return (
    <MDBContainer className='mt-4'>
      <MDBRow>
        {languages.map((language) => (
          <MDBCol md="5" key={language.id} className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{language.name}</MDBCardTitle>
                <MDBCardText>
                  <strong>Paradigm:</strong> {language.paradigm}
                  <br />
                  <strong>First Appeared:</strong> {language.firstAppeared}
                  <br />
                  <strong>Inventor:</strong> {language.inventor}
                </MDBCardText>
                <MDBBtn href={language.officialWebsite} target="_blank">Visit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
