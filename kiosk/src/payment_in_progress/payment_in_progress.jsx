import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Button from "../common/ui/button";
import Title from "../common/top/title";
import "./payment_in_progress.css";

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

const Payment_in_progress = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSenior = location.state.seniorUser;

  useEffect(() => {
    console.log("isSenior => " + isSenior);
  });

  setTimeout(() => {
    navigate("/payment_complete", {state:{seniorUser:isSenior}});
  }, 2000);

  return (
    <div style={styles.wrapper}>
      <Title title="결제 진행"></Title>
      <div className="guide_pay">
        <h4>결제가 진행중입니다.</h4>
        <h4>카드를 뽑지 마세요..</h4>
      </div>

      <div className="image_card">
        <img src="/images/progress-card.svg" alt="card"></img>
      </div>

      <div className="pay_progressing">
        <h3>결제 중..</h3>
      </div>
    </div>
  );
};

export default Payment_in_progress;
