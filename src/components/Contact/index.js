import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'


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

    // handle submission of form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    // JSX
    return (
        <section className='my-5 mx-5'>
            <h3 className='my-3 d-flex justify-content-center' id='contact'>Contact Me</h3>
            <form id='contact-form' onSubmit={handleSubmit} className='my-3'>
                {/* name input */}
                <div className='my-3 pt-3 d-flex justify-content-center'>
                    <label htmlFor='name' className='px-3'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} style={{ width: '35%' }} />
                </div>
                {/* email input */}
                <div className='my-3 d-flex justify-content-center'>
                    <label htmlFor='email' className='px-3'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} style={{ width: '35%' }} />
                </div>
                {/* message text area */}
                <div className='my-3 d-flex justify-content-center'>
                    <label htmlFor='message' className='px-3'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} style={{ width: '35%' }} />
                </div>
                {/* if errorMessage print errorMessage text to alert user */}
                {errorMessage && (
                    <div className='my-3 d-flex justify-content-center'>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <div className='my-3 d-flex justify-content-center'>
                    <button type='submit' data-testid='submit' className='btn'>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;