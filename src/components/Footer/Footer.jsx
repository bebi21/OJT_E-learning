import React from "react";
import logo from "../../img/logo/logorikkei.png";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io5";
function Footer() {
  return (
    <>
      <div className='relative pb-[70px] sm:h-[346px] lg:px-[28px] bg-[#bd2228] text-white flex justify-center '>
        <div className='w-full  sm:flex justify-center pt-[56px] lg:px-[auto] px-[20px] '>
          {" "}
          <div className='sm:w-[50%] '>
            <img
              src={logo}
              alt='logo'
              className='sm:w-[200px] w-[150px] mb-[30px]'
            />
            <div className='sm:text-[14px] text-[12px] w-[296px]'>
              <p className='py-[5px]'>
                Tường 7 tháp A toà Sông Đà, Đường Phạm Hùng, quân Nam Từ divêm,
                Hà Nội
              </p>
              <a href='tel:0862069233'>0862 069 233</a>
              <br />
              <a href='mailto:academy@rikkeisoft.com'>academy@rikkeisoft.com</a>
              <div className='flex gap-5 sm:text-[24px] text-[20px] mt-[15px]'>
                <ImFacebook2 className='cursor-pointer' />
                <IoLogoYoutube className='cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='sm:flex sm:gap-[46px] gap-[0px]  mt-[15px]'>
            <div className='lg:w-auto  sm:w-[150px]'>
              <p className='font-bold sm:mb-[24px] mb-[12px]'>Khoá học</p>
              <div className='text-[14px] text-[#ebb0b2]  sm:block grid grid-rows-3 grid-flow-col '>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Làm quen với code
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white '>
                  Bootcamp Fulltime
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Bootcamp Parttime
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Kỹ sư CNTT - PTIT
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Bổ trợ cho nghề
                </div>
              </div>
            </div>
            <div className='lg:w-auto  sm:w-[150px]'>
              <p className='font-bold sm:mb-[24px] mb-[12px] sm:mt-0 mt-[15px]'>
                Tài nguyên học tập
              </p>
              <div className='text-[14px] text-[#ebb0b2] sm:block grid grid-rows-3 grid-flow-col'>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Blog
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Ebook - Report
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Khóa học miễn phí
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Sự kiện - Webinar
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Cộng đồng
                </div>
              </div>
            </div>
            <div className='lg:w-auto  sm:w-[200px]'>
              <p className='font-bold sm:mb-[24px] mb-[12px] sm:mt-0 mt-[15px]'>
                Vì sao chọn Rikkei Academy
              </p>
              <div className='text-[14px] text-[#ebb0b2] sm:block grid grid-rows-3 grid-flow-col'>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Về Rikkei Academy
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Hệ sinh thái Rikkei
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Cơ hội nghề nghiệp
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  Tấm gương sáng
                </div>
                <div className='py-[2px] cursor-pointer hover:text-white'>
                  liên hệ
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 text-[14px] py-[20px]'>
          Copyright 2023 © Rikkei Education. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
