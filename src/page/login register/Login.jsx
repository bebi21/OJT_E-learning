import React from "react";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className='w-4/5 ml-[10%] flex flex-wrap text-[#0A033C] max-[600px]:w-full max-[600px]:ml-0 max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center max-[600px]:h-full'>
        <div className='w-[44%] max-[600px]:w-full max-[600px]:flex max-[600px]:justify-center '>
          <img
            className='mb-[10%] mt-[5%]   max-[600px]:hidden	'
            src='../../../public/img/logo-login.png'
            alt='lỗi hiển thị'
          />
          <h1 className='text-4xl	text-[#0A033C] w-[60%] font-medium mb-[10%] max-[600px]:text-center max-[600px]:mt-[20%] max-[600px]:text-2xl	max-[1154px]:text-3xl max-[964px]:text-2xl'>
            Welcome to RikeiEdu Online Learning Platfrom
          </h1>

          <img
            src='../../../public/img/image_login.png'
            alt='lỗi hiển thị'
            className='max-[600px]:hidden'
          />
        </div>
        <img
          src='../../../public/img/Line.png'
          className='w-[0.2%] max-[600px]:hidden'
          alt='lỗi hiện thị'
        />
        <div className='flex justify-center align-center items-center w-[55%] h-screen max-[600px]:w-full  max-[600px]:h-full'>
          <div>
            <form action='' className='h-1/3'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='username'>
                Phone Number
              </label>
              <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex items-center'>
                <LuUser2 />
                <input
                  id='username'
                  type='text'
                  placeholder='Phone Number'
                  className='py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='username'>
                Password
              </label>
              <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 flex items-center'>
                <RiLockPasswordLine />
                <input
                  id='password'
                  type='text'
                  placeholder='Password'
                  className='py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
                <IoEyeSharp className='cursor-pointer' />
              </div>
              {/* ???? */}
              <button
                type='submit'
                className='w-full bg-blue-500 hover:bg-[#0A033C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 bg-[#BC2228]'>
                Sign In
              </button>
            </form>
            <div className='text-center mt-5'>
              <small className='text-[#5D5A6F]'>Forgot password ? </small>
              <br />
              <small className='text-[#5D5A6F]'>
                You don't have an account?{" "}
              </small>{" "}
              <small
                className='text-[#BC2228] cursor-pointer'
                onClick={() => navigate("/register")}>
                create an account{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
