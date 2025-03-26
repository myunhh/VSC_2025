import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../common/ui/button";
import Header from "../common/header/header";
import Title from "../common/top/title";
import "./pay.css";
import voice6 from "../voices/06_voice.mp3";

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

const Pay = (props) => {
  let sale = 0;

  const [payMethod, setPay] = useState();

  const navigate = useNavigate();
  const haldleOnGoBack = () => {
    navigate(-1);
  };

  const location = useLocation();
  const passedData = location.state.totalSum;
  const isSenior = location.state.seniorUser;

  useEffect(() => {
    console.log("결제할 금액 => " + passedData);
    console.log("isSenior => " + isSenior);

    if(isSenior) {
      speechPayment();
    }    
  }, []);

  // 음성재생
  const speechPayment = () => {
    const audio = document.querySelector('#paymentAudio');
    const context = new AudioContext();
    if(context !== undefined) {
        context.resume().then(() => {
            audio.play();
            console.log('paymentAudio resumed successfully');
        }).catch(error => {
            console.log(error);
        });
    }
  }

  const clickedBtn = (method) => {
    setPay(method);
    console.log("payMethod => " + payMethod);
  };

  const moveToPayProgress = () => {
    if(passedData === 0 || passedData === null) {
      alert('결제할 금액이 없습니다.');
      return;
    } else if (!payMethod || payMethod === null) {
      alert('결제수단을 선택해주세요.');
      return;
    } else {
      navigate('/payment_in_progress', {state:{seniorUser:isSenior}});
    }
  }

  return (
    <div style={styles.wrapper}>
      {/* <Header></Header> */}
      <Title title="결제"></Title>
      <h3>결제방법을 선택해주세요.</h3>

      <audio src={voice6} id="paymentAudio"></audio>

      <h3>{payMethod}</h3>

      <div className="BtnGrp">
        <button
          className={
            payMethod === "신용카드"
              ? "payBtn creditCardSel"
              : "payBtn creditCard"
          }
          onClick={() => clickedBtn("신용카드")}
        ></button>
        <button
          className={
            payMethod === "Apple페이" ? "payBtn applesel" : "payBtn apple"
          }
          onClick={() => clickedBtn("Apple페이")}
        ></button>
        <button
          className={
            payMethod === "삼성페이" ? "payBtn samsungsel" : "payBtn samsung"
          }
          onClick={() => clickedBtn("삼성페이")}
        ></button>
      </div>

      <div className="BtnGrp">
        <p className={isSenior ? "payName-senior" : "payName"}>신용카드</p>
        <p className={isSenior ? "payName-senior" : "payName"}>Apple페이</p>
        <p className={isSenior ? "payName-senior" : "payName"}>삼성페이</p>
      </div>
      <div>
        <p className={isSenior ? "bar-senior" : "bar"}>주문 금액</p>
        <p className={isSenior ? "amount-senior" : "amount"}>{passedData}원</p>
      </div>
      <div>
        <p className={isSenior ? "bar-senior" : "bar"}>할인 금액</p>
        <p className={isSenior ? "amount-senior" : "amount"}>{sale}원</p>
      </div>
      <div>
        <p className={isSenior ? "bar-senior" : "bar"}>총 결제 금액</p>
        <p className={isSenior ? "amount-senior" : "amount"}>
          <span className="total">{passedData - sale}</span>원
        </p>
      </div>
      <section style={styles.footer}>
        <Button color={"Green"} text={"이전 화면"} event={haldleOnGoBack} />
        <Button color={"Orange"} text={"결제 하기"} event={moveToPayProgress} />
      </section>
    </div>
  );
};

export default Pay;
