import React, { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { auth } from "../../configs/firebase.config";
import { NavLink, useNavigate } from "react-router-dom";
import publicAxios from "../../configs/public";
import { failed, success } from "../../utils/notify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { Button } from "antd";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"


function Register() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOTP] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpVerified, setOtpVerified] = useState(false);
  const [register, setRegister] = useState({
    full_name: "",
    password: "",
  });

  const handleGetValueInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEyeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const verifyOTP = async () => {
    try {
      const data = await user.confirm(otp);
      if (data) {
        success('Đã xác thực OTP')
        setOtpVerified(true);
      }
    } catch (error) {
      if(error){
        failed('OTP không đúng')
        setOtpVerified(false);
      }
    }
  };
  const handleRegister = async () => {
    if(!isOtpVerified) {
      failed('Vui lòng nhập Otp')
      return
    }
    try {
      const dataRegister = {
        full_name: register.full_name,
        phone: phone,
        password: register.password,
      };
      console.log(dataRegister);
      const response = await publicAxios.post("/auth/register", dataRegister);
      setRegister({ full_name: "", phone: "", password: "" });
      success(response.data.message);
      navigate("/login");
    } catch (error) {
      failed(error.response.data.message);
    }
  };

  return (
    <>
      <div className="w-4/5 ml-[10%] flex flex-wrap text-[#0A033C] max-[600px]:w-full max-[600px]:ml-0 max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center max-[600px]:h-full">
        <div className="w-[44%] max-[600px]:w-full max-[600px]:flex max-[600px]:justify-center ">
          <NavLink to="/">
            <img
              className="mb-[10%] mt-[5%]   max-[600px]:hidden	"
              src="../../../public/img/logo-login.png"
              alt="lỗi hiển thị"
            />
          </NavLink>

          <h1 className="text-4xl	text-[#0A033C] w-[60%] font-medium mb-[10%] max-[600px]:text-center max-[600px]:mt-[20%] max-[600px]:text-2xl	max-[1154px]:text-3xl max-[964px]:text-2xl">
            Welcome to RikeiEdu Online Learning Platfrom
          </h1>

          <img
            src="../../../public/img/image_login.png"
            alt="lỗi hiển thị"
            className="max-[600px]:hidden"
          />
        </div>
        <img
          src="../../../public/img/Line.png"
          className="w-[0.2%] max-[600px]:hidden"
          alt="lỗi hiện thị"
        />
        <div className="flex justify-center align-center items-center w-[55%] h-screen max-[600px]:w-full  max-[600px]:h-full">
          <div>
            <div className="h-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex items-center">
                <LuUser2 />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleGetValueInput}
                  name="full_name"
                  value={register.full_name}
                />
              </div>

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex justify-between items-center">
                <div className="flex ">
                  <RiLockPasswordLine className="mt-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    onChange={handleGetValueInput}
                    name="password"
                    value={register.password}
                  />
                </div>

                <div>
                  {showPassword ? (
                    <IoEyeSharp
                      className="cursor-pointer"
                      onClick={handleEyeShowPassword}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer"
                      onClick={handleEyeShowPassword}
                    />
                  )}
                </div>
              </div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Phone Number
              </label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex items-center">
                <IoIosPhonePortrait />
                <PhoneInput
                  type="text"
                  placeholder="Phone Number"
                  className=" px-2 "
                  country={"vn"}
                  value={phone}
                  onChange={(phone) => setPhone("+" + phone)}
                />
                <Button onClick={handleSendOTP} className="text-[#0A033C]">
                  Send
                </Button>
              </div>
              <div className="text-center" id="recaptcha"></div>

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="otp"
              >
                OTP
              </label>
              <div className="flex justify-between ">
                <div className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="OTP"
                    className="py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setOTP(e.target.value)}
                  />
                  <Button onClick={verifyOTP} className="text-[#0A033C]">
                    Xác nhận
                  </Button>
                </div>
              </div>

              <button
                onClick={handleRegister}
                className="w-full  hover:bg-[#0A033C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 bg-[#BC2228]"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center mt-5">
              <small className="text-[#5D5A6F]">Alreay have an account? </small>{" "}
              <small
                className="text-[#BC2228] cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
