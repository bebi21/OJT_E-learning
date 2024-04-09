import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { PiBookOpenTextLight } from "react-icons/pi";
import { RxBackpack } from "react-icons/rx";
import { TbMessages } from "react-icons/tb";
import { GoMortarBoard } from "react-icons/go";
import "./Courses.css";

export default function Course() {
  return (
    <>
      <div className="trans-font">
        <div className=" w-[100%] lg:h-[520px] sm:h-[400px] h-[600px] banner ">
          {/* <img
            src="/img/courses/Class Banner.png" 
            alt=""
            className=" w-[100%] sm:h-[100%] h-[100%] "
          /> */}
        </div>

        <div className=" lg:h-[90px] lg:pt-8 pt-[20px] pl-11   ">
          <div className=" flex w-[130px] justify-between text-customRed font-extrabold text-lg ">
            <p>Home</p>
            <RiArrowDropRightLine className="mt-1" />
            <p>Courses</p>
          </div>
        </div>

        <div className="h-[100%] grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2  sm:gap-x-[2px] sm:gap-y-[190px] lg:gap-5 gap-[160px] lg:mt-2 mt-4 ">

          <div className="  lg:w-[680px] w-[380px] sm:w-[430px] lg:h-[410px] h-[100px] ml-11  "> 
            <div className="lg:h-[300px] sm:h-[200px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="lg:w-[100%] sm:h-[100%]  h-[100%] "
                alt=""
              />
              <div className="flex mt-3 w-[200px] justify-between items-center">
                <p className="lg:pt-3 pt-1  lg:text-xl text-sm sm:text-sm   font-bold  ">HTML,CSS</p>
                <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-rose-500 ">Truy cập ngay</button>
              </div>    
              <p className="sm:text-[16px] text-sm pt-1"> 
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <div className="sm:block hidden">
                <span className="text-red-500 sm:text-[16px] ">Giảng viên: </span>
                <span className="font-bold ">Hoàng Thiên Phú</span>
              </div>
            </div>
          </div>

          <div className="  lg:w-[680px] w-[380px] sm:w-[430px] lg:h-[410px] h-[100px] ml-11  ">
            <div className="lg:h-[300px] sm:h-[200px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="lg:w-[100%] sm:h-[100%]  h-[100%]  "
                alt=""
              />
              <div className="flex mt-3 w-[200px] justify-between items-center">
                <p className="lg:pt-3 pt-1  lg:text-xl text-sm sm:text-sm   font-bold  ">HTML,CSS</p>
                <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-rose-500 ">Truy cập ngay</button>
              </div>    
              <p className="sm:text-[16px] text-sm pt-1"> 
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <div className="sm:block hidden">
                <span className="text-red-500 sm:text-[16px] ">Giảng viên: </span>
                <span className="font-bold ">Hoàng Thiên Phú</span>
              </div>
            </div>
          </div>

          <div className="  lg:w-[680px] w-[380px] sm:w-[430px] lg:h-[410px] h-[100px] ml-11  ">
            <div className="lg:h-[300px] sm:h-[200px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="lg:w-[100%] sm:h-[100%]  h-[100%]  "
                alt=""
              />
              <div className="flex mt-3 w-[200px] justify-between items-center">
                <p className="lg:pt-3 pt-1  lg:text-xl text-sm sm:text-sm   font-bold  ">HTML,CSS</p>
                <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-rose-500 ">Truy cập ngay</button>
              </div>    
              <p className="sm:text-[16px] text-sm pt-1"> 
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <div className="sm:block hidden">
                <span className="text-red-500 sm:text-[16px] ">Giảng viên: </span>
                <span className="font-bold ">Hoàng Thiên Phú</span>
              </div>
            </div>
          </div>

          <div className="  lg:w-[680px] w-[380px] sm:w-[430px] lg:h-[410px] h-[100px] ml-11  ">
            <div className="lg:h-[300px] sm:h-[200px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="lg:w-[100%] sm:h-[100%]  h-[100%]  "
                alt=""
              />
              <div className="flex mt-3 w-[200px] justify-between items-center">
                <p className="lg:pt-3 pt-1  lg:text-xl text-sm sm:text-sm   font-bold  ">HTML,CSS</p>
                <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-rose-500 ">Truy cập ngay</button>
              </div>    
              <p className="sm:text-[16px] text-sm pt-1"> 
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <div className="sm:block hidden">
                <span className="text-red-500 sm:text-[16px] ">Giảng viên: </span>
                <span className="font-bold ">Hoàng Thiên Phú</span>
              </div>
            </div>
          </div>

          <div className="  lg:w-[680px] w-[380px] sm:w-[430px] lg:h-[410px] h-[100px] ml-11  ">
            <div className="lg:h-[300px] sm:h-[200px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="lg:w-[100%] sm:h-[100%]  h-[100%]  "
                alt=""
              />
              <div className="flex mt-3 w-[200px] justify-between items-center">
                <p className="lg:pt-3 pt-1  lg:text-xl text-sm sm:text-sm   font-bold  ">HTML,CSS</p>
                <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-rose-500 ">Truy cập ngay</button>
              </div>    
              <p className="sm:text-[16px] text-sm pt-1"> 
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <div className="sm:block hidden">
                <span className="text-red-500 sm:text-[16px] ">Giảng viên: </span>
                <span className="font-bold ">Hoàng Thiên Phú</span>
              </div>
            </div>
          </div>

          <div className="  lg:w-[680px] w-[380px] sm:w-[430px] lg:h-[410px] h-[100px] ml-11  ">
            <div className="lg:h-[300px] sm:h-[200px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="lg:w-[100%] sm:h-[100%]  h-[100%]  "
                alt=""
              />
              <div className="flex mt-3 w-[200px] justify-between items-center">
                <p className="lg:pt-3 pt-1  lg:text-xl text-sm sm:text-sm   font-bold  ">HTML,CSS</p>
                <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-rose-500 ">Truy cập ngay</button>
              </div>    
              <p className="sm:text-[16px] text-sm pt-1"> 
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <div className="sm:block hidden">
                <span className="text-red-500 sm:text-[16px] ">Giảng viên: </span>
                <span className="font-bold ">Hoàng Thiên Phú</span>
              </div>
            </div>
          </div>

        </div>
        

        <div className=" lg:h-[450px] sm:h-[400px] h-[690px] lg:w-[100%] sm:w-[970px] w-[430px] sm:pt-[100px] pt-11  flex justify-center sm:items-center sm:mt-[70px] mt-[200px] sm:bg-white  sm:mb-[100px]  ">
          <div className=" lg:h-[330px] lg:mt-[60px] h-[200px] grid grid-cols-2 gap-[78px] sm:grid-cols-4 sm:gap-4  lg:w-[1200px] sm:w-[900px] w-[300px] justify-around sm:ml-11  sm:mt-[200px]  ">

              <div className=" lg:w-[260px] w-[160px] sm:w-[210px] lg:h-[250px] h-[200px] text-center leading-7 ">
                <GoMortarBoard className="text-red-500 lg:text-5xl text-4xl lg:ml-[100px] sm:ml-[90px] ml-[60px]" />
                <p className=" lg:text-2xl sm:text-sm text-xl">Giảng viên, mentor hỗ trợ 24/7</p>
                <p className="pt-1 lg:text-xl text-sm" >
                  {" "}
                  Mentor theo sát giúp học viên hoàn thành hết các nhiệm vụ trong
                  ngày. Không bỏ rơi lại học viên trong bất kỳ trường hợp nào.
                </p>
              </div>

              <div className=" lg:w-[260px] w-[160px] sm:w-[210px] lg:h-[250px] h-[200px] text-center leading-7  ">
                <PiBookOpenTextLight className="text-red-500 lg:text-5xl text-4xl lg:ml-[100px] sm:ml-[90px] ml-[60px]" />
                <p className="lg:text-2xl sm:text-sm text-xl ">
                  Thực chiến ngay trong quá trình học tập{" "}
                </p>
                <p className="pt-1 lg:text-xl text-sm">
                  {" "}
                  Tất cả học viên đều được thực chiến với ít nhất 2 dự án trước
                  khi tốt nghiệp.
                </p>
              </div>

           
            <div className=" lg:w-[260px] w-[160px] sm:w-[210px] lg:h-[250px] h-[200px] text-center leading-7  ">
                <RxBackpack className="text-red-500 lg:text-5xl text-4xl lg:ml-[100px] sm:ml-[90px] ml-[60px]  " />
                <p className="lg:text-2xl sm:text-sm text-xl">
                  Bảo đảm việc làm sau khi kết thúc khóa học
                </p>
                <p className="pt-1 lg:text-xl text-sm">
                  {" "}
                  Bảo đảm học viên có việc làm ngay say khi tốt nghiệp. Ký kết
                  việc làm theo thỏa thuận trong hợp đồng dịch vụ đào tạo.
                </p>
              </div>

              <div className="lg:w-[260px] w-[160px] sm:w-[210px] lg:h-[250px] h-[200px] text-center leading-7  ">
                <TbMessages className="text-red-500 lg:text-5xl text-4xl lg:ml-[100px] sm:ml-[90px] ml-[60px]" />
                <p className="lg:text-2xl sm:text-sm text-xl">
                  Hỗ trợ học viên ngay cả sau khi tốt nghiệp
                </p>
                <p className="pt-1 lg:text-xl text-sm">
                  {" "}
                  Hỗ trợ chuyên môn lâu dài giúp học viên có một sự nghiệp ổn
                  định.
                </p>
              </div>

           </div>
          </div>
        </div>
        
      
      
    </>
  );
}
