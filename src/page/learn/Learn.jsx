import React, { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

import Call from "../../img/logo/Call Button.png";
import Icon from "../../img/icon.png";
import elip from "../../img/Ellipse 173.png";
import img from "../../img/Image1.png";
import { FaStar } from "react-icons/fa";

import { Collapse } from "antd";

function Learn() {
  const [flag, setFlag] = useState(false);
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: (
        <div>
          <p className="flex justify-between">
            Bài 1<img className="w-[30px] h-[30px]" src={Call} />
          </p>
          <p className="flex justify-between mt-[10px]">
            Bài 2<img className="w-[30px] h-[30px]" src={Call} />
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>ưewqewq</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>sfdfsdf</p>,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  const handleClick=()=>{
    setFlag(!flag)
  }
  return (
    <div>
      <div className="bg-[rgb(239,235,245)] py-[10px] px-[40px] ">
        <div className="py-[15px]">
          <h2 className="flex items-center text-[#BC2228] font-bold">
            Home <IoChevronForwardOutline /> Courses <IoChevronForwardOutline />{" "}
            Course A <IoChevronForwardOutline />
          </h2>
        </div>
        <div className="sm:flex block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  h-[400px]">
        
          <div className="w-[65%]">
            <iframe
              className="w-[100%] h-[100%]"
              src="https://www.youtube.com/embed/AH2K450-B6A?si=9BaAKafkYFP8VnIq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {flag ? 
            <div className="w-[35%] bg-white p-[30px] overflow-auto">
              <h2>421 bình luận</h2>
              <div>
                <textarea className="pl-[10px] pt-[10px] border-solid border-slate-400 border" placeholder="Nội dung bình luận"  cols="40" rows="5"></textarea><br/>
                <button className="bg-[#BC2228] text-white px-[10px] py-[5px] rounded-[5px] ml-[260px] hover:bg-[green] text-[14px]">BÌNH LUẬN</button>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum voluptate facilis repudiandae saepe recusandae cum quaerat earum minima, dolorum amet, architecto dicta modi inventore illo cumque quos. Labore, aspernatur.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam adipisci error est expedita, accusamus eligendi! Facilis id magni aperiam, eius quibusdam error molestias assumenda earum provident quas dignissimos non!
            </div> 
              : 
            <div className="w-[35%] bg-white">
              <Collapse
              items={items}
              defaultActiveKey={["1"]}
              onChange={onChange}
              />
            </div>}
        </div>
      </div>
      <div>
        <div className="p-[40px]">
          <h3 className="text-xl font-bold">Course Details</h3>
          <p className="text-[#5D5A6F] text-[14px]">Cập nhật tháng 3/2024</p>
          <p className="text-[#5D5A6F] text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, voluptatum minima fuga, praesentium suscipit maxime
            temporibus, dolores quisquam
          </p>
        </div>
        <div className="pl-[40px]">
          <h3 className="text-xl font-bold">Who this course is for</h3>
          <p className="text-[#5D5A6F] text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            sit enim quaerat quod, non, ex blanditiis dolorem rem iste
            exercitationem quidem corporis amet? Odit reiciendis libero et quos
            quidem minima.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold ml-10">
          What you'll learn in this course:
        </h3>
        <div className="flex flex-wrap ml-10 ">
          <p className="flex sm:w-[49%] w-[45%] mt-5 ">
            <img className="w-8 h-2 sm:mt-2 mt-[35px] mr-3" src={elip} alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="flex sm:w-[49%] w-[45%] mt-5 ">
            <img className="w-8 h-2 sm:mt-2 mt-[35px] mr-3" src={elip} alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="flex sm:w-[49%] w-[45%] mt-5 ">
            <img className="w-8 h-2 sm:mt-2 mt-[35px] mr-3" src={elip} alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="flex sm:w-[49%] w-[45%] mt-5 ">
            <img className="w-8 h-2 sm:mt-2 mt-[35px] mr-3" src={elip} alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="flex sm:w-[49%] w-[45%] mt-5 ">
            <img className="w-8 h-2 sm:mt-2 mt-[35px] mr-3" src={elip} alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="flex sm:w-[49%] w-[45%] mt-5 ">
            <img className="w-8 h-2 sm:mt-2 mt-[35px] mr-3" src={elip} alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>

      <h3 className="text-2xl justify-between	 font-bold ml-10 mt-[200px]">
        Similar Courses
      </h3>

      <div className="mt-16 ml-5 flex flex-wrap mb-28  max-lg:ml-5">
        <div className="flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap ">
          <div className="w-2/5 max-lg:w-[70%]">
            <img src={img} className=" w-[100%] max-lg:w-[100%]" alt="" />
          </div>
          <div className=" justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 ">
            <div className="w-[100%] ">
              <div className=" text-xl font-bold">The three musketeert</div>
              <div className="flex text-yellow-300">
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
                className="w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap ">
          <div className="w-2/5 max-lg:w-[70%]">
            <img src={img} className=" w-[100%] max-lg:w-[100%]" alt="" />
          </div>
          <div className=" justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 ">
            <div className="w-[100%] ">
              <div className=" text-xl font-bold">The three musketeert</div>
              <div className="flex text-yellow-300">
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
                className="w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap ">
          <div className="w-2/5 max-lg:w-[70%]">
            <img src={img} className=" w-[100%] max-lg:w-[100%]" alt="" />
          </div>
          <div className=" justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 ">
            <div className="w-[100%] ">
              <div className=" text-xl font-bold">The three musketeert</div>
              <div className="flex text-yellow-300">
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
                className="w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex   justify-evenly	 sm:w-[45%] w-[95%] mt-8 ml-5 flex-wrap ">
          <div className="w-2/5 max-lg:w-[70%]">
            <img src={img} className=" w-[100%] max-lg:w-[100%]" alt="" />
          </div>
          <div className=" justify-evenly	w-2/5 	 max-lg:flex  max-lg:w-3/5 ">
            <div className="w-[100%] ">
              <div className=" text-xl font-bold">The three musketeert</div>
              <div className="flex text-yellow-300">
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
                className="w-[35px] mt-[10%] ml-[90%] max-lg:mt-5 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center sticky bottom-0 w-full bg-white p-5 z-[1000]">
        <button className="text-black border border-black rounded-[5px] px-[20px] py-[10px] ">Bài trước</button>
        <button className="text-black border border-black rounded-[5px] px-[20px] py-[10px] ">Bài tiếp theo</button>
        <button onClick={handleClick} className="text-black border border-black rounded-[5px] px-[20px] py-[10px] ">{flag ? "Bài học" : "Hỏi đáp"}</button>
      </div>


    </div>
  );
}

export default Learn;
