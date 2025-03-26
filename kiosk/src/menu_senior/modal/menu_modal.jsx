import React, { useCallback } from "react";
import Button from "../../common/ui/button";

const styles={
    dimmedblock: {
        position: "fixed",
        top:"0px",
        left:"0px",
        width:"100vw",
        height:"100vh",
        backgroundColor:"rgba(0, 0, 0, 0.35)",
        margin: "0px",
        zIndex: "10"
    },
    modalblock: {
        position:"fixed",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"600px",
        maxWidth:"100%",
        maxHeight:"90%",
        overFlowY:"auto",
        backgroundColor:"white",
        padding: "1rem",
        borderRadius: "12px",
        zIndex: "100" 
    }
}

const MenuModal = ({initData, children, isModalOpen, closeModal}) => {
    // console.log(initData);    

    return (
        <div style={{display:isModalOpen ? "block" : "none"}}>
            <div style={styles.dimmedblock}></div>
            <div style={styles.modalblock}>
                {children}
                {/* <p>{initData}를 선택하셨어요.</p>
                <p>가격: {initData.price}</p> */}
                {/* <Button color="Blue" text="Close" event={closeModal} /> */}
            </div>
        </div>
        
    )
}

export default React.memo(MenuModal);