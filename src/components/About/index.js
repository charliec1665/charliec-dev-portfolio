import React from 'react'
import Photo from '../../assets/images/me-img-300x400.jpg'

// REACT BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <section className='my-5 mx-4 py-5' id='about-me'>
            <h3 id='about'>
                About Me
            </h3>
            <Container fluid='md' className='d-flex flex justify-content-center'>
                <Row>
                    <Col className='flex justify-content-center mx-2'>
                        <img src={Photo} className='my-3' alt='Charlie Carter' id='photo'/>
                    </Col>
                    <Col id='about-paragraph' className=''>
                        <Row>
                            <p className='py-3' id='p1'>
                                Charlie is a full stack web developer with a certification from UNC Charlotte's Coding Bootcamp. Coming from a background
                                in art and illustration (with their MA in Illustration from SCAD), Charlie combines their love of learning and thirst for 
                                challenge with their skill in creativity. Charlie offers a unique perspective when working with code, knowing that
                                it can be just as important to nail down those little details as it is to have a design work comprehensively as a whole.
                            </p>
                        </Row>
                        <Row>
                            <p className='pb-3' id='p2'>
                                Charlie's skill set includes working with Javascript, CSS, Bootstrap, and React on the front end. As well as APIs, Node.js, 
                                Object-Oriented Programming (OOP), Express.js, SQL, Object-Relational Mapping (ORM), Model-View-Controllers (MVC), NoSQL
                                with Mongoose and MongoDB, PWAs, and MERN.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;