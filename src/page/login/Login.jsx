import React, { useEffect, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { failed, success } from "../../utils/notify";
import { FaEyeSlash } from "react-icons/fa6";
import { regexPassword, regexPhone } from "../../utils/regex";
import { handleLoginApi } from "../../api/users/users.fun";
function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleEyeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (phone === "" || password === "") {
      failed("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (!regexPhone.test(phone)) {
      failed("Sai số điện thoại hoặc mật khẩu !");
      return;
    }
    if (!regexPassword.test(password)) {
      failed("Sai số điện thoại hoặc mật khẩu !");
      return;
    }
    // setIsLoading(true);
    const logiData = {
      phone: phone,
      password: password,
    };
    const response = await handleLoginApi(logiData);
    localStorage.setItem("token", response.data.data.accessToken);
    localStorage.setItem("currentUser", response.data.data.full_name);
    setTimeout(() => {
    success(response.data.message);
      navigate("/");
    }, 1500);
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
                htmlFor="username"
              >
                Phone Number
              </label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex items-center">
                <LuUser2 />
                <PhoneInput
                  type="text"
                  placeholder="Phone Number"
                  className=" px-2 "
                  country={"vn"}
                  value={phone}
                  onChange={(phone) => setPhone("+" + phone)}
                />
              </div>
              <div className="text-center" id="recaptcha"></div>

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="username"
              >
                Password
              </label>
              <div className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex justify-between  items-center">
                <div className="flex">
                  <RiLockPasswordLine className="mt-2" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setPassword(e.target.value)}
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

              <button
                onClick={handleLogin}
                className="w-full hover:bg-[#0A033C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 bg-[#BC2228]"
                disabled={isLoading}
              >
                Sign in
              </button>
            </div>
            <div className="text-center mt-5">
              <small className="text-[#5D5A6F]">
                You don't have an account?{" "}
              </small>{" "}
              <small
                className="text-[#BC2228] cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Create an account{" "}
              </small>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
