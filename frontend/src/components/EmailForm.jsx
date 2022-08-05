import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useAuth0 } from '@auth0/auth0-react';
export const EmailForm = () => {
    const { isAuthenticated } = useAuth0();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service12345', 'template_r7auq4b', form.current, '8mNqfsV-m7hnJZyCI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        isAuthenticated && (
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <br/>
                <label>From</label>
                <input type="email" name="user_email" />
                <br />
                <label>To</label>
                <input type="email" name="to_email" />
                <br/>
                <label>Message</label>
                <textarea name="message" />
                <br/>
                <input type="submit" value="Send" />
            </form>
        )
  );
};