import React, { useState, useRef } from 'react'
import { validateEmail } from '../../utils/helpers'
// REACT BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


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


    // TUTORIAL STUFF HERE:
    // handle form submission and loading state

    // Hooks to manage form submission and loading state
    const [formSent, setFormSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    // send input submissions to EmailJS form using the 'form_name', 'form_email', and 'message' value pairs
    const handleSubmit = e => {
        e.preventDefault();
        const req = {
            from_name: name,
            from_email: email,
            message: message
        }
        setIsLoading(true);
        sendEmail(req);
    }

    // send form information through parameters using EmailJS
    const sendEmail = req => {
        const params = req;
        window.emailjs.send('portfolio_contact', 'template_suo050u', params, 'BfYQUzIt-ih1oyqmY')
            .then(res => {
                setIsLoading(false);
                setFormSent(true);
                console.log(res);
            }).catch(e => {
                setIsLoading(false);
            });
    }
    
    
    // JSX
    return (
        <section className='my-5 mx-5 justify-content-center'>
            <h3 className='my-3 d-flex justify-content-center' id='contact'>Contact Me</h3>
            <Container className='my-5 mx-5 d-flex justify-content-around'>
                <Row>
                    <Col>
                        <p className='my-3 mx-3'>If you like my work, please feel free to contact me via my information below or fill out the contact form! Please remember to include your name and contact info so that I can get back to you.</p>
                        <p className='my-3 mx-3'><span>Phone:</span> (336)-613-9142</p>
                        <p className='my-3 mx-3'><span>Email:</span> <a href='mailto:charliec1665@gmail.com'>charliec1665@gmail.com</a></p>
                        <p className='my-3 mx-3'><span>GitHub:</span> <a href='https://github.com/charliec1665'>charliec1665</a></p>
                    </Col>
                    <Col>
                        {/* Loading spinner upon form submission */}
                        {isLoading ?
                            <div className='d-flex justify-content-center'>
                                <Spinner animation='border' variant='info'/>
                            </div>
                            : formSent ? (
                                <div className='d-flex justify-content-center'>
                                    <p className='success-text'> Your message has been sent! </p>
                                </div>
                            )
                            : <></>
                        }
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='contact-form' ref={form}  className='my-3'>
                                {/* name input */}
                                <div className='d-flex justify-content-center'>
                                    {/* To Disable autocomplete in React components, must set attribute to non-existing value */}
                                    <Form.Control type='text' placeholder='Name' name='name' autoComplete='nope' defaultValue={name} onBlur={handleChange} style={{ width: '65%' }} />
                                </div>
                                {/* email input */}
                                <div className='my-3 d-flex justify-content-center'>
                                    <Form.Control type='email' placeholder='Email' name='email' autoComplete='nope' defaultValue={email} onBlur={handleChange} style={{ width: '65%' }} />
                                </div>
                                {/* message text area */}
                                <div className='my-3 d-flex justify-content-center'>
                                    <Form.Control as='textarea' placeholder='Tell me about your project' name='message' rows={5} defaultValue={message} onBlur={handleChange} style={{ width: '65%' }} />
                                </div>
                                {/* if errorMessage print errorMessage text to alert user */}
                                {errorMessage && (
                                    <div className='my-3 d-flex justify-content-center'>
                                        <p className='error-text'>{errorMessage}</p>
                                    </div>
                                )}
                                <div className='my-3 d-flex justify-content-center'>
                                    <Button type='submit' className='btn'>Send</Button>
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