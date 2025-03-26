import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Title from "../common/top/title";
import "./place.css";
import Button from "../common/ui/button";

const styles = {
    wrapper: {
        margin: "0px auto",
        height: "100vh"
    },
    footer: {
        position: "fixed",
        width: "100%",
        bottom: "0px",
        backgroundColor: "#444",
        padding: "1rem 0"
    }
}

const places = ['매장', '포장'];

const Place = (props) => {
    // let place = "none";
    const [place, setPlace] = useState();
    const navigate = useNavigate();
    const haldleOnGoBack = () => {
        navigate(-1); 
    }
    const moveToMain = (val) => {
        setPlace(val);
        console.log(place);
        navigate('/main');    
    }

 

    return (
        <div style={styles.wrapper}>
            <Title title="선택사항"></Title>
            <h5 className="tip">
                매장에서 드시고 가시려면 매장식사버튼을 선택해주시고,<br />
                포장하시려면 포장버튼을 선택해주세요.
            </h5>

            <div>
                <ul className="place-wrap li-none">
                    <li>
                        <p>
                            <button className="place-btn holl" onClick={() => moveToMain('매장')}></button>
                        </p>
                        <p className="place-txt">매장 식사</p>
                    </li>
                    <li>
                        <p>
                        <button className="place-btn take" onClick={() => moveToMain('포장')}></button>
                        </p>
                        <p className="place-txt">포장</p>
                    </li>
                </ul> 
            </div>

            <section style={styles.footer}>
                <Button color={"Gray"} text={"취소"} event={haldleOnGoBack}></Button>
            </section>
        </div>
    ); 
}

export default Place;