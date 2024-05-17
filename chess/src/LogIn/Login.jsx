import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginChess from './LogInImages/LoginChess.png';
import LoginOR from './LogInImages/LoginOR.png';
import Apple from './LogInImages/Appleimg.png';
import F from './LogInImages/Fimg.png';
import G from './LogInImages/Gimage.png';
import username from './LogInImages/LoginUsernameicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/Header.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className='Login-background-img'>
            <div className="container ">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <a href="#"><img src={LoginChess} alt="" /></a>
                        <Form className='Login-form'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    className='username-input-bg-img'
                                    placeholder="Username or Email"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className='password-input-bg-img'
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" className="custom-checkbox" />
                            </Form.Group>



                            <img src={LoginOR} alt="" className='img-fluid' />

                            <Link className='Login-link'>Log In</Link>
                            <a href="#" className='d-flex border justify-content-center mt-5 '>
                                <img src={Apple} alt="" className='pe-5' />
                                <p> Log in with Apple</p>
                            </a>
                            <a href='#' className='d-flex border justify-content-center mt-4' onClick={() => loginWithRedirect()} >
                                <img src={G} alt="" className='pe-5' />
                                <p>Log in with Google</p>

                            </a>
                            <a href='#' className='d-flex border justify-content-center mt-4'>
                                <img src={F} alt="" className='pe-5' />
                                <p> Log in with Facebook</p>

                            </a>
                            <a href='#' className='d-flex border justify-content-center mt-4'>
                                New? Sign up- and start playing Chess!
                            </a>
                        </Form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
