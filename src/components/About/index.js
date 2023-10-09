import React from 'react'
import Photo from '../../assets/images/prof-photo-400x534.jpg'

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
            <Container fluid='md' className='d-flex flex justify-content-around'>
                <Row className='d-flex flex justify-content-around'>
                    <Col className='flex xxl={4} justify-content-center mx-4'>
                        <img src={Photo} className='my-5' alt='Charlie Carter' id='photo'/>
                    </Col>
                    <Col id='about-paragraph' className='flex my-4 xxl={8} justify-content-center'>
                        <Row>
                            <p className='py-3' id='p1'>
                                Charlie is a Frontend React Developer with a certification from UNC Charlotte's Coding Bootcamp. Coming from a background
                                in art and illustration (with their MA in Illustration from SCAD), Charlie combines their love of learning and thirst for 
                                challenge with their skill in creativity. Charlie offers a unique perspective when working with code, knowing that
                                it can be just as important to nail down those little details as it is to have a design work comprehensively as a whole.
                            </p>
                        </Row>
                        <Row>
                            <p className='pb-3' id='p2'>
                                Charlie's skill set includes working with Typescript, CSS frameworks such as Tailwind and Bootstrap, and React on the 
                                front end. Their history gives them proficiency working within Agile development teams and experience with review and
                                critique of their peer's work.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;