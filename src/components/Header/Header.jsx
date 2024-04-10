import React from "react";
import logo from "../../img/logo/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className='flex sm:justify-around justify-between items-center h-[72px] sm:px-[72px] px-[24px]'>
      <a href='#'>
        <img src={logo} alt='logo' className='cursor-pointer' />
      </a>
      <div className=' hidden sm:flex justify-evenly gap-[20px] text-[16px] text-[#221651] w-[50%]'>
        <div className='flex justify-center items-center'>
          <p>Khóa Học</p>
          <IoIosArrowDown />
        </div>
        <div className='flex justify-center items-center'>
          <p>Tài Nguyên</p>
          <IoIosArrowDown />
        </div>
        <div className='flex justify-center items-center'>
          <p>Vì sao chọn Rikkei Academy</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className='hidden sm:block'>
        <Link
          to={"/login"}
          className='min-w-[100px] text-[14px] text-white rounded-[5px] px-[20px] py-[10px] mr-[5px] bg-[#bd2228]'>
          Đăng Nhập
        </Link>
        <Link
          to={"/register"}
          className='min-w-[100px] text-[14px] text-[#bd2228] border-[1px] border-solid ml-[5px] border-[#bd2228] rounded-[5px] px-[20px] py-[10px] '>
          Đăng Kí
        </Link>
      </div>
      <div className='sm:hidden  cursor-pointer text-[24px]'>
        <FaBars />
      </div>
    </div>
  );
}

export default Header;
