import React from "react";
import { MdNavigateNext } from "react-icons/md";

function Hamburger() {
  /* ???? */
  return (
    <div className='max-w-[600px] mx-auto block  px-4 py-2 border border-gray-300 bg-white rounded-md shadow-md w-4/5 mt-5'>
      {/* Container div */}
      <select className='block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:border-blue-500'>
        {/* Select element */}
        <option disabled selected value=''>
          Chọn khóa học
        </option>
        <option value='1'>Khóa Học A</option>
        <option value='2'>Khóa Học B</option>
        <option value='3'>Khóa Học C</option>
      </select>
      <div className='p-4'>
        <strong className=''>
          Hướng dẫn bởi các giảng viên chất lượng từ các trường đại học công
          nghệ top đầu Việt Nam
        </strong>
        <div className='border border-gray-300 bg-[#EFEDF5] rounded-md shadow-md p-4 mt-5 '>
          <strong>Làm quen với code</strong>
          <p className='mb-2 text-gray-500 text-small	'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            animi laudantium iusto
          </p>
          <div className='text-[#BC2228] flex items-center  '>
            Tìm hiểu thêm <MdNavigateNext className='mt-1 text-2xl' />
          </div>
        </div>
        <div className='border border-gray-300 bg-[#F8F7FA] rounded-md shadow-md p-4 mt-5 '>
          <strong>Cho người mới bắt đầu</strong>
          <p className='mb-2 text-gray-500 text-small	'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            animi laudantium iusto
          </p>
          <div className='text-[#BC2228] flex items-center  '>
            Tìm hiểu thêm <MdNavigateNext className='mt-1 text-2xl' />
          </div>
        </div>
        <div className='border border-gray-300 bg-[#F8F7FA] rounded-md shadow-md p-4 mt-5 '>
          <strong>Bổ trợ cho nghề</strong>
          <p className='mb-2 text-gray-500 text-small	'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            animi laudantium iusto
          </p>
          <div className='text-[#BC2228] flex items-center  '>
            Tìm hiểu thêm <MdNavigateNext className='mt-1 text-2xl' />
          </div>
        </div>
        <div className='border border-gray-300 bg-[#F8F7FA] rounded-md shadow-md p-4 mt-5 '>
          <strong>Lập trình viên tiếng Nhật</strong>
          <p className='mb-2 text-gray-500 text-small	'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            animi laudantium iusto
          </p>
          <div className='text-[#BC2228] flex items-center  '>
            Tìm hiểu thêm <MdNavigateNext className='mt-1 text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
