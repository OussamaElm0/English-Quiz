import React, { useState } from 'react';
import "../styles/Contact.css";
import Fab from '@mui/material/Fab';
import NavigationIcon from "@mui/icons-material/Navigation";
import Swal from 'sweetalert2';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        try {
            Swal.fire({
                icon: "success",
                title: "Email sent",
                text: "Thank you for contacting us!",
                timer:2000
            });
            setEmail('')
            setName('')
            setSubject('')
            setMessage('')
        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please re-send this email",
                timer: 2000
            })
        }
    };

    return (
      <>
        <div className="contact-section">
          <h2 className="contact-title">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="name" className="input-group-text">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="inputs form-control"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-group-text">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputs form-control"
              />
            </div>
            <div className="input-group">
              <label htmlFor="subject" className="input-group-text">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="inputs form-control"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message" className="input-group-text">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="inputs form-control"
              ></textarea>
            </div>
            {/* <button type='submit' className='btn btn-submit'>Submit</button> */}
            <Fab
              variant="extended"
              type="submit"
              className="btn-submit"
              color="red"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#EE9322",
              }}
            >
              <NavigationIcon sx={{ mr: 1 }} />
              Send
            </Fab>
          </form>
        </div>
      </>
    );
}