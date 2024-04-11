import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

import Call from "../../img/logo/Call Button.png";
import Icon from "../../img/icon.png";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import elip from "../../img/Ellipse 173.png";
import img from "../../img/Image1.png";
import { FaStar } from "react-icons/fa";
import "./CourseDetail.css";

function CourseDetail() {
  return (
    <div>
      <div className='bg-[rgb(239,235,245)] py-[10px] px-[40px] '>
        <div className='py-[15px]'>
          <h2 className='flex items-center text-[#BC2228] font-bold'>
            Home <IoChevronForwardOutline /> Courses <IoChevronForwardOutline />{" "}
            Course A <IoChevronForwardOutline />
          </h2>
        </div>
        <div className='sm:flex block justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
          <div className='flex items-center justify-center sm:w-[700px] w-[420px] h-[400px] course-detail-img'>
            <img src={Call} alt='' />
          </div>
          <div className='sm:mt-0 mt-[10px]'>
            <div className='flex justify-between bg-white py-[10px] px-[7px] rounded-[5px]'>
              <p>How to launch a Webflow website</p>
              <AiOutlinePlus className='text-[#BC2228]' />
            </div>
            <div className='bg-white mt-[15px] py-[10px] px-[7px] rounded-[5px]'>
              <div className='text-[#BC2228] pb-[15px]'>
                <p className='flex justify-between'>
                  What is Webflow and why is it the <FiMinus />
                </p>
                <p>best website builder?</p>
              </div>
              <hr />
              <div className='flex pt-[10px] justify-between'>
                <div className='w-[80%]'>
                  What is your favorite template from BRIX Templates?
                </div>
                <div>
                  <img src={Call} alt='' className='w-[30px] h-[30px]'></img>
                </div>
              </div>
              <div className='flex pt-[10px] justify-between'>
                <div className='w-[80%]'>
                  What is your favorite template from BRIX Templates?
                </div>
                <div>
                  <img src={Call} alt='' className='w-[30px] h-[30px]'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='p-[40px]'>
          <h3 className='text-xl font-bold'>Course Details</h3>
          <p className='text-[#5D5A6F] text-[14px]'>Cập nhật tháng 3/2024</p>
          <p className='text-[#5D5A6F] text-[14px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, voluptatum minima fuga, praesentium suscipit maxime
            temporibus, dolores quisquam
          </p>
        </div>
        <div className='pl-[40px]'>
          <h3 className='text-xl font-bold'>Who this course is for</h3>
          <p className='text-[#5D5A6F] text-[14px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            sit enim quaerat quod, non, ex blanditiis dolorem rem iste
            exercitationem quidem corporis amet? Odit reiciendis libero et quos
            quidem minima.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <h3 className='text-xl font-bold ml-10'>
          What you'll learn in this course:
        </h3>
        <div className='flex flex-wrap ml-10 '>
          <p className='flex sm:w-[49%] w-[45%] mt-5 '>
            <img className='w-8 h-2 sm:mt-2 mt-[35px] mr-3' src={elip} alt='' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className='flex sm:w-[49%] w-[45%] mt-5 '>
            <img className='w-8 h-2 sm:mt-2 mt-[35px] mr-3' src={elip} alt='' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className='flex sm:w-[49%] w-[45%] mt-5 '>
            <img className='w-8 h-2 sm:mt-2 mt-[35px] mr-3' src={elip} alt='' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className='flex sm:w-[49%] w-[45%] mt-5 '>
            <img className='w-8 h-2 sm:mt-2 mt-[35px] mr-3' src={elip} alt='' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className='flex sm:w-[49%] w-[45%] mt-5 '>
            <img className='w-8 h-2 sm:mt-2 mt-[35px] mr-3' src={elip} alt='' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className='flex sm:w-[49%] w-[45%] mt-5 '>
            <img className='w-8 h-2 sm:mt-2 mt-[35px] mr-3' src={elip} alt='' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>

      <h3 className='text-2xl justify-between	 font-bold ml-10 mt-[200px]'>
        Similar Courses
      </h3>

      <div className='mt-16 ml-5 flex flex-wrap mb-28  max-lg:ml-5'>
        <div className='flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap '>
          <div className='w-2/5 max-lg:w-[70%]'>
            <img src={img} className=' w-[100%] max-lg:w-[100%]' alt='' />
          </div>
          <div className=' justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 '>
            <div className='w-[100%] '>
              <div className=' text-xl font-bold'>The three musketeert</div>
              <div className='flex text-yellow-300'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <img
                src={Icon}
                className='w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 '
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap '>
          <div className='w-2/5 max-lg:w-[70%]'>
            <img src={img} className=' w-[100%] max-lg:w-[100%]' alt='' />
          </div>
          <div className=' justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 '>
            <div className='w-[100%] '>
              <div className=' text-xl font-bold'>The three musketeert</div>
              <div className='flex text-yellow-300'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <img
                src={Icon}
                className='w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 '
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap '>
          <div className='w-2/5 max-lg:w-[70%]'>
            <img src={img} className=' w-[100%] max-lg:w-[100%]' alt='' />
          </div>
          <div className=' justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 '>
            <div className='w-[100%] '>
              <div className=' text-xl font-bold'>The three musketeert</div>
              <div className='flex text-yellow-300'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <img
                src={Icon}
                className='w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 '
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap '>
          <div className='w-2/5 max-lg:w-[70%]'>
            <img src={img} className=' w-[100%] max-lg:w-[100%]' alt='' />
          </div>
          <div className=' justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 '>
            <div className='w-[100%] '>
              <div className=' text-xl font-bold'>The three musketeert</div>
              <div className='flex text-yellow-300'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <img
                src={Icon}
                className='w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 '
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
