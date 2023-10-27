import React, { useState } from 'react';
import "../styles/Contact.css";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <>
            <div className='contact-section'>
                <h2 className='contact-title'>Contact Us</h2>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <div className='input-group'>
                        <label htmlFor='name' className='input-group-text'>Name</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='inputs form-control'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email' className='input-group-text'>Email</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='inputs form-control'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='subject' className='input-group-text'>Subject</label>
                        <input 
                            type='text'
                            id='subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className='inputs form-control'
                            required
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='message' className='input-group-text'>Message</label>
                        <textarea
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value) }
                            required
                            className='inputs form-control'
                        ></textarea>
                    </div>
                    <button type='submit' className='btn btn-submit'>Submit</button>
                </form>
            </div>
        </>
    );
}