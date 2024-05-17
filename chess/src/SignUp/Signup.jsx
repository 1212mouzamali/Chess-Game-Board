import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/Header.css';
import Chess from './SignUpImages/Chess.com.png';
import SignUpPawn from './SignUpImages/SignUpPawn.svg';
import Gimage from './SignUpImages/Gimage.png';
import Appleimg from './SignUpImages/Appleimg.png';
import Fimg from './SignUpImages/Fimg.png';
import OR from './SignUpImages/ORimg.png';
const Signup = () => {
  return (
    <div className='SignUP'>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-6">
            <ul>
              <li className='d-flex justify-content-center'><a href="#"><img src={Chess} alt="" className='img-fluid' /></a> </li>
              <li className='d-flex justify-content-center'><p className='create-account'>Create your Chess.com account</p></li>
              <li className='d-flex justify-content-center'>
                <img src={SignUpPawn} alt="" className='img-fluid SignUpPawn' />
              </li>
              <li className='d-flex justify-content-center'>
                <Link className='SignUp-decoration' to="/skill">Sign Up</Link>
              </li>
              <li className='d-flex justify-content-center mt-2'>
              <img src={OR} alt="" className='img-fluid' /></li>
              <li className='d-flex justify-content-center'>
                <button className='button-decoration'>
                  <img src={Gimage} alt="" className='me-4' />
                  Continue with Google</button>
              </li>
              <li className='d-flex justify-content-center'><button className='button-decoration'>
                <img src={Appleimg} alt="" className='me-5' />
                Continue with Apple</button></li>
              <li className='d-flex justify-content-center'><button className='button-decoration'>
                <img src={Fimg} alt="" className='pe-3' />
                Continue with Facebook</button></li>
            </ul>
          </div>
          <div className="col-3 Log-in">
            <a href="#">Log In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
