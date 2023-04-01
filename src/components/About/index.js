import React from 'react'
import Photo from '../../assets/images/me-img-resized.jpg'

function About() {
    return (
        <section className='my-5 mx-3' id='about-me'>
            <h3 id='about'>
                About Me
            </h3>
            <div className='d-flex justify-content-between'>
                <img src={Photo} className='my-1 mx-1' alt='Charlie Carter' />
                <div className='ml-5 pt-3' id='about-paragraph'>
                    <p className='py-3'>
                        Charlie is a full stack web developer with a certification from UNC Charlotte's Coding Bootcamp. Coming from a background
                        in art and illustration (with their MA in Illustration from SCAD), Charlie combines their love of learning and thirst for 
                        challenge with their skill in creativity. Charlie offers a unique perspective when working with code, knowing that
                        it can be just as important to nail down those little details as it is to have a design work comprehensively as a whole.
                    </p>
                    <p className='pb-3'>
                        Charlie's skill set includes working with Javascript, CSS, Bootstrap, and React on the front end. As well as APIs, Node.js, 
                        Object-Oriented Programming (OOP), Express.js, SQL, Object-Relational Mapping (ORM), Model-View-Controllers (MVC), NoSQL
                        with Mongoose and MongoDB, PWAs, and MERN.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;