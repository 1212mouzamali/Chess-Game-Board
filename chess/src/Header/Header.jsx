import React from 'react'
import "../Header/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// font awesome icons starts here
// font awesome icons starts here
import { faApple,faAppStore,faTiktok,faYoutube,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
// font awesome icons ends here
// font awesome icons endss here
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// All images started from here
import Chess from './HeaderImages/Chess.com.png';
import Play from './HeaderImages/Play.png';
import Puzzle from './HeaderImages/Puzzle.png';
import Learn from './HeaderImages/Learn.png';
import ChessImg from './HeaderImages/ChessImage.png';
import More from './HeaderImages/more.png';
import News from './HeaderImages/news.png';
import Watch from './HeaderImages/watch.png';
import HandPawn from './HeaderImages/HandPawn.png';
import PlayComputer from './HeaderImages/PlayComputer.png';
import Language from './HeaderImages/Language.png';
import Help from './HeaderImages/Help.png';
import Hikaru from './HeaderImages/GMHikaru.jpg';
import PuzzleChess from './HeaderImages/PuzzleChess.png';
import Anna from './HeaderImages/anna.jpg';
import Lessons from './HeaderImages/Lessons.png';
import Nak from './HeaderImages/Nak.png';
import Oldman from './HeaderImages/Oldman.png';
import Ambi from './HeaderImages/Ambi.jpg';
import Awful from './HeaderImages/Awful.png';


const Header = (props) => {
console.log(props.name);
// In this portion display none of the main container will be applied
function hideelements(){
  var elements=document.querySelectorAll('.second-col-img,.main-lessons,.main-puzzle, .main-footer,.main-follow-happening,.main-video-portion');
elements.forEach(function(element) {
  element.style.display = "none";
});

}









// In this portion display none of the main container will be end

  
// this is the tooltip displa portion
  const play = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>);

  const puzzle = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>);

  const learn = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>);

  const news = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>);

  const watch = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>);

  const more = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>);

  return (
    <div>
      <div className="container-fluid ">
        <div className="row main-row">
          <div className="col-1 sidebar">
            <img src={Chess} alt="" className='img-fluid' />
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ order: -1 }} className='toggle' />
                <Navbar.Collapse id="navbarScroll">
                  <ul className='header-margin-li'>
                    <li>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={play}
                      >
                        <a href="#"><img src={Play} className='img-fluid' /></a>
                      </OverlayTrigger>
                    </li>
                    <li>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={puzzle}
                      >
                        <a href="#"><img src={Puzzle} className='img-fluid' /></a>
                      </OverlayTrigger>
                    </li>
                    <li>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={learn}
                      >
                        <a href="#"><img src={Learn} className='img-fluid' /></a>
                      </OverlayTrigger>
                    </li>
                    <li>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={news}
                      >
                        <a href="#"><img src={News} className='img-fluid' /></a>
                      </OverlayTrigger>
                    </li>


                    <li>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={watch}
                      >
                        <a href="#"><img src={Watch} className='img-fluid' /></a>
                      </OverlayTrigger>
                    </li>


                    <li>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={more}
                      >
                        <a href="#"><img src={More} className='img-fluid' /></a>
                      </OverlayTrigger>
                    </li>
                    <li>
                      <input type="text" name="" placeholder='Search' className='search' />
                    </li>

                    <li className='linked-signup-li'>
                      <Link to="/signup" className='signup'> Sign Up</Link>
                    </li>

                    <li className='linked-login-li'>
                      <Link to="/login" className='Login'>Log In</Link>
                    </li>

                    <li><a href="#"><img src={Language} alt="" className='img-fluid' /></a></li>
                    <li><a href="#"><img src={Help} alt="" className='img-fluid' /></a></li>
                  </ul>

                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>




          <div className="col-10 second-col-img">
            <div className='firstchild'>
              <img src={ChessImg} alt="" className='ChessImg rounded' />
            </div>
            <div className='secondchild'>
              <div >
                <p className='PlayChess'>Play Chess</p>
                <p className='PlayChess'> Online </p>
                <p className='PlayChess'>on the #1 Site!</p>

              </div>
              <div>
                <button className='PlayOnline btn d-flex'  onClick={hideelements}>
                  <span className='handpawnspan'><img src={HandPawn} className='handpawn' /></span>
                  <span>
                    Play Online
                    <p className='secondp '>Play with someone at your level</p>
                  </span>
                </button>
              </div>
              <div>
                <Button className='PlayComputer btn d-flex '>
                  <span><img src={PlayComputer} className='playcomp-icon' /></span>
                  <span>
                    <p>Play Computer</p>
                    <p className='secondp '>Play vs customizable training bots</p>
                  </span>
                </Button>
              </div>
            </div>
          </div>


          {/* solve puzzle row starts here
           solve puzzle row starts here
           solve puzzle row starts here */}

          <div className="row main-puzzle ">
            <div className="col d-flex  main-puzzle-col">
              <div className='Hikaruimg-span'>
                <div>
                  <p className='Solve-puzzle-p'>Solve Chess Puzzles</p>
                  <button className='Solve-Puzzle-button'>Solve Puzzles</button>
                </div>

                <div className='d-flex align-items-end'>
                  <div>
                    <img src={Hikaru} />
                  </div>
                  <p className='Haikur-p'>"Puzzles are the best way to improve pattern recognition, and no site does it better."<br />
                    <span className='text-white GM'>GM</span> Hikaru Nakamura
                  </p>

                </div>
              </div>
              <div className='puzzleimg-span'>
                <a href="#"><img src={PuzzleChess} alt="" className="puzzlechess" /></a>
              </div>
            </div>
          </div>
          {/* solve puzzle row ends here
           solve puzzle row ends here
           solve puzzle row ends here */}



          {/* Lessons portion starts here */}
          {/* Lessons portion starts here */}
          <div className="row main-lessons ">
            <div className="col d-flex  main-puzzle-col">
              <div className='puzzleimg-span'>
                <a href="#"><img src={Lessons} alt="" className="puzzlechess" /></a>
              </div>

              <div className='Hikaruimg-span'>
                <div>
                  <p className='Solve-puzzle-p'>Take Chess Lessons</p>
                  <button className='Solve-Puzzle-button'>Start Lessons</button>
                </div>

                <div className='d-flex align-items-end'>
                  <div>
                    <img src={Anna} />
                  </div>
                  <p className='Haikur-p'>"Chess.com lessons make it to learn to play,then challenge you to continue growing."<br />
                    <span className='text-white GM'>IM</span> Anna Rudolf

                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Lessons portion ends here */}
          {/* Lessons portion ends here */}




          {/* Today chess portion starts her */}
          {/* Today chess portion starts her */}
          {/* Today chess portion starts her */}

          <div className="row main-follow-happening ">
            <div className='d-flex justify-content-center Follow-Happening'>
              <a href="#"><p>Follow what's happening in chess today</p></a>
            </div>

            <div className="col d-flex  main-puzzle-col-carlson">
              <div className='puzzleimg-span'>
                <a href="#"><img src={Nak} alt="" className="puzzlechess" /></a>
                <p className='text-white'>Nakamura Scores Nears-Perfect 74.5/76 </p>
              </div>

              <div className='Hikaruimg-span'>
                <a href="#"><img src={Ambi} alt="" className="puzzlechess" /></a>
                <p className='text-white'>Carlsons Fears Ding is 'Permanently Broken', Hails Gukesh After Candidates Win</p>
              </div>
            </div>
          </div>
          {/* Today chess portion ends her */}
          {/* Today chess portion ends her */}

          <div className="row main-video-portion ">
            <div className="col d-flex  main-puzzle-col-carlson">
              <div className='puzzleimg-span'>
                <a href="#"><img src={Awful} alt="" className="puzzlechess" /></a>
                <p className='text-white'>Nakamura Scores Nears-Perfect 74.5/76 </p>
              </div>

              <div className='Hikaruimg-span'>
                <a href="#"><img src={Oldman} alt="" className="puzzlechess" /></a>
                <p className='text-white'>Carlsons Fears Ding is 'Permanently Broken', Hails Gukesh After Candidates Win</p>
              </div>
            </div>
          </div>
          {/* Footer section starts here */}
          {/* Footer section starts here */}
          <div className="row main-footer">
            <div className="col main-puzzle-col-footer">
              <div className='puzzleimg-span d-flex justify-content-center'>
                <button className='Solve-Puzzle-button'>Chess Today</button>
              </div>

              <div className='footer-links-ul'>
                <ul className='d-flex'>
                  <li><a href="#">Help |</a></li>
                  <li><a href="#">Chess terms |</a></li>
                  <li><a href="#">About |</a></li>
                  <li><a href="#">Developers |</a></li>
                  <li><a href="#">User Agreement |</a></li>
                  <li><a href="#">Privacy |</a></li>
                  <li><a href="#">Fair Play |</a></li>
                  <li><a href="#">Partners |</a></li>
                  <li><a href="#">Compliance |</a></li>
                  <li><a href="#">Chess.com &#169; 2024</a></li>
                </ul>
                <ul className='d-flex justify-content-center'>
                  <li><a href="#"><FontAwesomeIcon icon={faApple} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faAppStore} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                 
                </ul>

              </div>
            </div>
          </div>

          {/* Footer section ends here */}
          {/* Footer section ends here */}
        </div>
      </div>
    </div>
  )
}

export default Header;
