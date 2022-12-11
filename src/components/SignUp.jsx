import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const SignUp = () => {

    const [user, setUser] = useState({});
    // console.log(user)
    function handleCallbackResponse(response) {
        // console.log("Encoded JWT ID token" + response.credential);
        var userObject = jwt_decode(response.credential);
        // console.log(userObject)
        setUser(userObject);
    }
    useEffect(() => {
        /*global google */
        google.accounts.id.initialize({
            client_id: '524354286451-oj1e1ffda06adh26vf5chhvh7n10ekop.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size: "large" }
        );
    }, []);
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

            <div className='mb-5 items-center' id='signInDiv'></div>
        </div>
    );
};

export default SignUp;