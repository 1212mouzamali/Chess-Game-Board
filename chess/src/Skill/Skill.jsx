import React from 'react'
import { Link} from 'react-router-dom';
import Backarrow from "./SkillImages/Backarrow.png";
import Greentick from "./SkillImages/Greentick.png";
import Chessy from "./SkillImages/Chessy.png";
import pawn from "./SkillImages/Pawn.png";
import Knight from "./SkillImages/Knight.png";
import Rook from "./SkillImages/Rook.png";
import Queen from "./SkillImages/Queen.png";
import '../Skill/Skill.css';
const Skill = () => {

 
 
 

  return (
    <div className='skill-main'>
      <div className="container p-4 ">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <div>
              <Link to='/signup'> <img src={Backarrow} /></Link>
            </div>
          </div>

          <div className="col-5">

            <div className='d-flex justify-content-center'>
              <img src={Chessy} alt="" />
            </div>
            <div className='text-center'>
              <p className='skill-level'>What is your chess skill level?</p>
            </div>
            <div className='text-center'>
              <p className='starting-point'>A starting point for match pairings</p>
            </div>

           


            <button className='d-flex justify-content-between pawn-btn' >
              <div>
                <span className='New-to-chess text-white'>New to chess</span>
                <img src={Greentick} className='Greentick'  />
                <p className='common'>Most Common</p>
              </div>
              <div>
              <img src={pawn}/>
              </div>
            </button>



            <button className='d-flex justify-content-between pawn-btn' >
              <div>
                <span className='New-to-chess text-white'>Beginner</span>
                <img src={Greentick} className='Greentick'  />
               
              </div>
              <div>
              <img src={Knight}/>
              </div>
            </button>


            <button className='d-flex justify-content-between pawn-btn'  >
              <div>
                <span className='New-to-chess text-white'>Intermediate</span>
                <img src={Greentick} className='Greentick'  />
           
              </div>
              <div>
              <img src={Rook}/>
              </div>
            </button>



            <button className='d-flex justify-content-between pawn-btn' >
              <div>
                <span className='New-to-chess text-white'>Advanced</span>
                <img src={Greentick} className='Greentick'  />
                
              </div>
              <div>
              <img src={Queen}/>
              </div>
            </button>


            <Link to='/final' className='continue-btn'>
             Continue
            </Link>        
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill;
