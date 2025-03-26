import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Button from "./common/ui/button";
import { useNavigate } from "react-router-dom";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import voice1 from './voices/01_voice.mp3';
import './Home.css';

const styles = {
  homeWrap: {
    margin: "0px auto",
    width: "100%",    
    height: "100vh",
    background: "url('images/burger-big.jpg') no-repeat center center",
    backgroundSize: "cover",
  },
  homeTitle: {
    margin: "2rem auto",
    fontSize: "4rem",
    fontWeight: "700",
    color: "#fff"
  },
  startMent: {
    margin: "1rem auto",
    fontSize:"1.2rem",
    fontWeight: "600",
    color: "#fff"
  }
}

function Home() {
  const navigate = useNavigate();
  let isSenior = false;
  // const [isSenior, setSenior] = useState(false);

  /**
   * 1. 시니어의 경우 isSenior를 통해 시니어 여부 확인
   *    시니어일때 place_senior페이지로 이동
   * 2. 페이지 이동 시 "isSenior -> true" 값을 전달
   */ 
  const handleSenior = () => {
    isSenior = true;
    console.log("isSenior =>", isSenior);    
    navigate('/place_senior', {state:isSenior});
  }
  
  const [play, setPlay] = useState(false);
  const myRef = useRef(play);

  useEffect(() => {
    if(!isSenior) {
      // 시니어가 아니면 환영 음성 안내
      speech();
    } else {
      // 시니어이면 다음 페이지로 이동
      handleSenior();
    }
    // speech();    
  }, [play]);

  // 음성재생
  const speech = () => {
    const audio = document.querySelector('#homeAudio');
      var context = new AudioContext();
      if(context !== undefined) {
        context.resume().then(() => {
          // audio.muted = false;
          audio.play();
          setPlay(true);
          myRef.current = play;
          console.log('homeAudio resumed successfully');
        }).catch(error => {
          console.log(error);
        });
        console.log(myRef.current);
      }
  }

  /* const moveToMain = () => {
    navigate('/main');
  } */
  
  return (
    // <section style={styles.homeWrap} className="home" onMouseOver={speech}>
    <section style={styles.homeWrap} className="home">
      <audio src={voice1} id="homeAudio" ref={myRef}></audio>
      <h1 style={styles.homeTitle}>Burger Queen</h1>
      <p style={styles.startMent}>시작하려면 화면을 터치해주세요!</p>

      {/* {<Button color={'Green'} 
        event={moveToMain}
        text={"시작하기"}
      />} */}

      {<Link to="/place">
        <button className="none Btn">주문하기</button>        
      </Link>}
      <br />
      <br /> 
      <button className="senior Btn" onClick={() => handleSenior()}>시니어모드로 주문하기</button>

    </section>
  );
}

export default React.memo(Home);