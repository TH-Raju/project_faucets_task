import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const SignUp = () => {
    return (
        <div className='w-25 mx-auto'>
            <h2 className="fw-bold text-center my-5">Sign Up</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button style={{ backgroundColor: '#9B1FE9', border: 'none' }} className='w-100' type="submit">
                    Submit
                </Button>
            </Form>
            <p className='fw-bold text-center my-2'>Don't have an account? <Link to='/login' style={{ color: '#9B1FE9', textDecoration: 'none' }}>Login</Link></p>
            <p className="fw-bold text-center my-1">Or</p>
            <div className='text-center my-3' >
                <AiFillGoogleCircle style={{ height: '25px', width: '25px' }} />
                <BsFacebook className='mx-5' style={{ height: '20px', width: '20px' }} />
                <AiFillInstagram style={{ height: '25px', width: '25px' }} />
            </div>
        </div>
    );
};

export default SignUp;