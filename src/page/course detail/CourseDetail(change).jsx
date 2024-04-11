import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import Img from "../../img/Image.png";
import Call from "../../img/Call Button.png";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";

function CourseDetail() {
  return (
    <div style={{backgroundColor:'rgb(239,235,245)',padding:"10px 40px"}}>
      <div>
        <h2 style={{ display: "flex", alignItems: "center", color:"rgb(188,34,40)",fontWeight:"bold"}}>
          Home <IoChevronForwardOutline /> Courses <IoChevronForwardOutline />{" "}
          Course A <IoChevronForwardOutline />
        </h2>
      </div>
      <div style={{display: "flex",justifyContent:"space-between"}}>
        <div>
          <img src={Img} alt="" />
          <img src={Call} alt="" />
        </div>
        <div>
          <div style={{display: "flex",justifyContent:"space-between",backgroundColor:"rgb(255,255,255)"}}>
            <p>How to launch a Webflow website</p>
            <AiOutlinePlus />
          </div>
          <div style={{backgroundColor:"rgb(255,255,255)", marginTop:"15px"}}>
            <div>
              <p style={{display: "flex",justifyContent:"space-between"}}>What is Webflow and why is it the <FiMinus /></p>
              <p>best website builder?</p>
            </div>
            <hr/>
            <div>
              <p style={{display: "flex",justifyContent:"space-between"}}>What is your favorite template from BRIX <img src={Call} alt="" /></p>
              <p>Templates?</p>
            </div>
            <div>
              <p style={{display: "flex",justifyContent:"space-between"}}>What is your favorite template from BRIX <img src={Call} alt="" /></p>
              <p>Templates?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
