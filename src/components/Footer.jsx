import React from "react";
import Group from "../img/Group 29.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import './footer.css'

function Footer() {
  return (
    <div className="font_footer" style={{ margin: "0 auto"}}>
      <div className="footer" style={{backgroundColor:"rgb(188,34,40)", color:"white"}}>
        <div className="footer_one" style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"30px 70px"}}>
          <div className="footer_left">
            <div>
              <img src={Group} alt=""/>
            </div>
            <div style={{marginTop:"15px",fontSize:"14px"}}>
              <p>Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng,</p>
              <p>quận Nam Từ Liêm, Hà Nội</p>
              <p>0862 069 233</p>
              <p>academy@rikkeisoft.com</p>
            </div>
            <div style={{marginTop:"15px",display:"flex"}}>
              <FaFacebookSquare />
              <FaYoutube style={{marginLeft:"20px"}}/>
            </div>
          </div>
          <div className="footer_right" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className="item">
              <div style={{fontSize:"16px"}}>
                <h2>Khoá học</h2>
              </div>
              <div style={{marginTop:"12px",opacity:"0.7",fontSize:"14px"}}>
                <p>Làm quen với Code</p>
                <p>Bootcamp Fulltime</p>
                <p>Bootcamp Parttime</p>
                <p>Kỹ sư CNTT - PTIT</p>
                <p>Bổ trợ cho nghề</p>
              </div>
            </div>
            <div className="item" style={{marginLeft:"20px"}}>
              <div style={{fontSize:"16px"}}>
                <h2>Tài nguyên học tập</h2>
              </div>
              <div style={{marginTop:"12px",opacity:"0.7",fontSize:"14px"}}>
                <p>Blog</p>
                <p>Ebook - Report</p>
                <p>Khoá học miễn phí</p>
                <p>Sự kiện - Webinar</p>
                <p>Cộng đồng</p>
              </div>
            </div>
            <div className="item" style={{marginLeft:"20px"}}>
              <div style={{fontSize:"16px"}}>
                <h2>Vì sao chọn Rikkei Academy</h2>
              </div>
              <div style={{marginTop:"12px",opacity:"0.6",fontSize:"14px"}}>
                <p>Về Rikkei Academy</p>
                <p>Hệ sinh thái Rikkei</p>
                <p>Cơ hội nghề nghiệp</p>
                <p>Tấm gương sáng</p>
                <p>Liên hệ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_two" style={{textAlign:"center", padding:"15px 0px",fontSize:"12px"}}>
          <p>Copyright 2023 @ Rikkei Education. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
