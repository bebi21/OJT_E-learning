import React from "react";
import Logo from "../img/Logo.png"
import { IoChevronDownOutline } from "react-icons/io5";
import './header.css'

function Header() {
  return (
    <div className="font" style={{margin:"0 auto"}}>
      <div className="header" style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 70px"}}>
        <div className="header_left">
          <img src={Logo} alt="" />
        </div>
        <div className="header_center" style={{display:"flex", justifyContent:"space-between", alignItems:"center",fontSize:"16px"}}>
          <div style={{display:"flex", alignItems:"center"}}>
            <p>Khoá học</p>
            <IoChevronDownOutline style={{marginLeft:"5px"}}/>
          </div>
          <div style={{marginLeft:"30px",display:"flex", alignItems:"center"}}>
            <p>Tài nguyên</p>
            <IoChevronDownOutline style={{marginLeft:"5px"}}/>
          </div>
          <div style={{marginLeft:"30px",display:"flex", alignItems:"center"}}>
            <p>Vì sao chọn Rikkei Academy</p>
            <IoChevronDownOutline style={{marginLeft:"5px"}}/>
          </div>
        </div>
        <div className="header_right" style={{fontSize:"14px"}}>
          <button style={{padding:"4px 6px",border:"1px solid rgb(188,34,40)",borderRadius:"5px",backgroundColor:"rgb(188,34,40)",color:"white", marginRight:"10px"}}>Đăng nhập</button>
          <button style={{padding:"4px 6px",border:"1px solid rgb(188,34,40)",borderRadius:"5px",color:"rgb(188,34,40)"}}>Đăng kí</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
