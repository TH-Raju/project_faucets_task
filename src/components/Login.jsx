import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";


const Login = () => {
    const [user, setUser] = useState({});
    console.log(user);
    function handleCallbackResponse(response) {
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
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

        google.accounts.id.prompt();
    }, []);




    return (
        <div className='row mx-auto'
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <h2 className="fw-bold text-center my-5">Log in</h2>
            <Form className='col-md-6 mx-auto col-lg-4'>
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
            <p className='fw-bold text-center my-2'>Don't have an account? <Link to='/signup' style={{ color: '#9B1FE9', textDecoration: 'none' }}>Signup</Link></p>
            <p className="fw-bold text-center my-1">Or</p>
            <div className='text-center my-3' >
                <BsGithub style={{ height: '25px', width: '25px' }} />
                <BsFacebook className='mx-5' style={{ height: '20px', width: '20px' }} />
                <AiFillInstagram style={{ height: '25px', width: '25px' }} />

            </div>
            <div className='mb-5 items-center' id='signInDiv'></div>
            {
                Object.keys(user).length !== 0 &&
                <Button onClick={(e) => handleSignOut(e)}>Sign Out</Button>

            }

        </div>
    );
};

export default Login;