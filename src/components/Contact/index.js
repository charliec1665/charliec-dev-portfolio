import React, { useState, useRef } from 'react'
import { validateEmail } from '../../utils/helpers'
import emailjs from '@emailjs/browser';
// REACT BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ContactForm() {
    // Hook to manage error message, starting message as blank
    const [errorMessage, setErrorMessage] = useState('');

    // Hook to manage form data, starting form as blank
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync state of the component with user input
    function handleChange(e) {
        // data validation
        // if the <input> is email then validate the value
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
                // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
        } else {
            // if the <input> values of message or name are blank, an error message is assigned
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // using setFormState function to update formState value for the name property
        // we use the spread operator to retain the other key-value pairs in this object, 
            // otherwise the formState object would be overwritten to only contain the name: value key pair
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // Handle submission of form data
        // function handleSubmit(e) {
        //     e.preventDefault();
        //     console.log(formState);
        // };

   
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('portfolio_contact', 'portfolio_contact_form', form.current, 'BfYQUzIt-ih1oyqmY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    
    
    // JSX
    return (
        <section className='my-5 mx-5 justify-content-center'>
            <h3 className='my-3 d-flex justify-content-center' id='contact'>Contact Me</h3>
            <Container className='my-5 mx-5 d-flex justify-content-around'>
                <Row>
                    <Col>
                        <p className='my-3 mx-3'>If you like my work, please feel free to contact me via my information below or fill out the contact form! Please remember to include your name and contact info so that I can get back to you.</p>
                        <p className='my-3 mx-3'><span>Phone:</span> (336)-613-9142</p>
                        <p className='my-3 mx-3'><span>Email:</span> charliec1665@gmail.com</p>
                        <p className='my-3 mx-3'><span>GitHub:</span> <a href='https://github.com/charliec1665'>charliec1665</a></p>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group id='contact-form' ref={form} onSubmit={sendEmail} className='my-3'>
                                {/* name input */}
                                <div className='d-flex justify-content-center'>
                                    {/* <Form.Label htmlFor='name' className='px-3'>Name:</Form.Label> */}
                                    <Form.Control type='text' placeholder='Name' name='name' defaultValue={name} onBlur={handleChange} style={{ width: '65%' }} />
                                </div>
                                {/* email input */}
                                <div className='my-3 d-flex justify-content-center'>
                                    {/* <Form.Label htmlFor='email' className='px-3'>Email:</Form.Label> */}
                                    <Form.Control type='email' placeholder='Email' name='email' defaultValue={email} onBlur={handleChange} style={{ width: '65%' }} />
                                </div>
                                {/* message text area */}
                                <div className='my-3 d-flex justify-content-center'>
                                    {/* <Form.Label htmlFor='message' className='px-3'>Message:</Form.Label> */}
                                    <Form.Control as='textarea' placeholder='Message' name='message' rows={5} defaultValue={message} onBlur={handleChange} style={{ width: '65%' }} />
                                </div>
                                {/* if errorMessage print errorMessage text to alert user */}
                                {errorMessage && (
                                    <div className='my-3 d-flex justify-content-center'>
                                        <p className='error-text'>{errorMessage}</p>
                                    </div>
                                )}
                                <div className='my-3 d-flex justify-content-center'>
                                    <Button type='submit' data-testid='submit' className='btn'>Submit</Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactForm;