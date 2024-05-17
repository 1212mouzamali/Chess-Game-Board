import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Backarrow from "./FinalImages/Backarrow.png";
import Chessy from "./FinalImages/Chessy.png";
import '../Skill/Skill.css';
import '../Header/Header.css';
const Final = () => {
    return (
        <div className='skill-main'>
            <div className="container p-4 ">
                <div className="row">
                    <div className="col-3 d-flex justify-content-center">
                        <div>
                            <Link to='/skill'> <img src={Backarrow} /></Link>
                        </div>
                    </div>

                    <div className="col-5">

                        <div className='d-flex justify-content-center'>
                            <img src={Chessy} alt="" />
                        </div>
                        <div className='text-center'>
                            <p className='skill-level'>Enter your email and password</p>
                        </div>
                        <div className='text-center'>
                            <p className='starting-point'>This allows you to log in on any device</p>
                        </div>



 
                         <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control
                                    type="email"
                                    className='username-input-bg-img'
                                    placeholder="Email"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className='password-input-bg-img'
                                />
                            </Form.Group>

                        </Form>




                            <button className='continue-btn'>
                                Continue
                            </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Final
