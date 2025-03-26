import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Button from "../common/ui/button";
import Title from "../common/top/title";
import "./pay_complete.css";
import voice7 from "../voices/07_voice.mp3";

const styles = {
  wrapper: {
    margin: "0px auto",
    height: "100vh",
  },
  footer: {
    position: "fixed",
    width: "100%",
    bottom: "0px",
    backgroundColor: "#444",
    padding: "1rem 0",
  },
};

const Payment_complete = (props) => {

  const location = useLocation();
  const isSenior = location.state.seniorUser;

  useEffect(() => {
    console.log("isSenior => " + isSenior);

    if(isSenior) {
      speechPayComplete();
    }    
  }, []);

  // 음성재생
  const speechPayComplete = () => {
    const audio = document.querySelector('#payCompleteAudio');
    const context = new AudioContext();
    if(context !== undefined) {
        context.resume().then(() => {
            audio.play();
            console.log('payCompleteAudio resumed successfully');
        }).catch(error => {
            console.log(error);
        });
    }
  }

  return (
    <div style={styles.wrapper}>
      <Title title="결제 완료"></Title>

      <audio src={voice7} id="payCompleteAudio"></audio>

      <div className="complete_pay1">
        <h4>결제가 완료되었습니다.</h4>
      </div>
      <div className="complete_pay2">
        <h2>대기 번호</h2>
      </div>
      <div className="complete_pay3">
        <h1>930</h1>
      </div>
      <div className="image_complete_pay">
        <img src="/images/receipt.svg"></img>
      </div>
      <div className="complete_pay4">
        <h4>제품 수령 시 영수증이 필요하오니 영수증 꼭 지참 부탁드립니다.</h4>
      </div>
      <div className="return_begin">
      <Link to="/">
        <Button color={"Gray"} text={"처음으로 돌아가기"}></Button>
      </Link>
      
      </div>
    </div>
  );
};

export default Payment_complete;
