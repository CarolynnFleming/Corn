import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast('Your email was Sent🍿')
const Smtp = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ly80jqp",
        "popcorn_contact_form",
        form.current,
        "RiEI1EOsNc4mqjUDi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button className="button-85" type="submit" value="Send" onClick={notify}><h3>Send🍿</h3></button>
      </form>
      <Toaster/>
    </StyledContactForm>
  );
};

export default Smtp;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
   button{
    margin: 1rem;
    width: 50%;
    justify-content:center;
   }
  }`;
