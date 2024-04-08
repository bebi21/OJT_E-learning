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
        <div className="  w-[100%] h-[520px]  ">
          <img
            src="/img/courses/Class Banner.png"
            alt=""
            className=" w-full "
          />
        </div>

        <div className=" h-[90px] pt-8 pl-11 ">
          <div className=" flex  w-[130px] justify-between text-customRed font-extrabold text-lg  ">
            <p>Home</p>
            <RiArrowDropRightLine className="mt-1" />
            <p>Courses</p>
          </div>
        </div>

        <div className="h-[100%] grid grid-cols-2 gap-5 ">
          <div className="  w-[670px] h-[400px] ml-11 ">
            <div className="h-[300px] ">
              <img
                src="/img/courses/Frame 680.png"
                className="h-[300px]"
                alt=""
              />
              <p className="pt-3 text-xl font-bold ">HTML,CSS</p>
              <p className="">
                Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <span className="text-red-500">Giảng viên: </span>
              <span className="font-bold">Hoàng Thiên Phú</span>
            </div>
          </div>

          <div className="  w-[670px] h-[400px] ml-11">
            <div className="h-[300px]">
              <img
                src="/img/courses/Frame 680.png"
                className="h-[300px]"
                alt=""
              />
              <p className="pt-3 text-xl font-bold">HTML,CSS</p>
              <p>Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <span className="text-red-500">Giảng viên: </span>
              <span className="font-bold">Hoàng Thiên Phú</span>
            </div>
          </div>

          <div className="  w-[670px] h-[400px] ml-11">
            <div className="h-[300px]">
              <img
                src="/img/courses/Frame 680.png"
                className="h-[300px]"
                alt=""
              />
              <p className="pt-3 text-xl font-bold">HTML,CSS</p>
              <p>Lorem ispum aaaaaaaaaaaaa,aaaaaaaaaaaaaaaaaaaaaaa</p>
              <span className="text-red-500">Giảng viên: </span>
              <span className="font-bold">Hoàng Thiên Phú</span>
            </div>
          </div>

          <div className="  w-[670px] h-[400px] ml-11">
            <div className="h-[300px]">
              <img
                src="/img/courses/Frame 680.png"
                className="h-[300px]"
                alt=""
              />
              <p className="pt-3 text-xl font-bold">HTML,CSS</p>
              <p>Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <span className="text-red-500">Giảng viên: </span>
              <span className="font-bold">Hoàng Thiên Phú</span>
            </div>
          </div>

          <div className="  w-[670px] h-[400px] ml-11">
            <div className="h-[300px]">
              <img
                src="/img/courses/Frame 680.png"
                className="h-[300px]"
                alt=""
              />
              <p className="pt-3 text-xl font-bold">HTML,CSS</p>
              <p>Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <span className="text-red-500">Giảng viên: </span>
              <span className="font-bold">Hoàng Thiên Phú</span>
            </div>
          </div>

          <div className="  w-[670px] h-[400px] ml-11">
            <div className="h-[300px]">
              <img
                src="/img/courses/Frame 680.png"
                className="h-[300px]"
                alt=""
              />
              <p className="pt-3 text-xl font-bold">HTML,CSS</p>
              <p>Lorem ispum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <span className="text-red-500">Giảng viên: </span>
              <span className="font-bold">Hoàng Thiên Phú</span>
            </div>
          </div>
        </div>
        <br />

        <div className=" h-[450px] pt-[80px] flex justify-center items-center  ">
          <div className=" h-[330px] flex items-center w-[1200px] justify-around   ">
            <div className=" w-[260px] h-[250px] text-center leading-7">
              <GoMortarBoard className="text-red-500 text-5xl ml-[100px] " />
              <p className="text-2xl">Giảng viên, mentor hỗ trợ 24/7</p>
              <p className="pt-1">
                {" "}
                Mentor theo sát giúp học viên hoàn thành hết các nhiệm vụ trong
                ngày. Không bỏ rơi lại học viên trong bất kỳ trường hợp nào.
              </p>
            </div>

            <div className=" w-[260px] h-[250px] text-center leading-7">
              <PiBookOpenTextLight className="text-red-500 text-5xl ml-[100px]" />
              <p className="text-2xl ">
                Thực chiến ngay trong quá trình học tập{" "}
              </p>
              <p className="pt-1">
                {" "}
                Tất cả học viên đều được thực chiến với ít nhất 2 dự án trước
                khi tốt nghiệp.
              </p>
            </div>

            <div className=" w-[260px] h-[250px] text-center">
              <RxBackpack className="text-red-500 text-5xl ml-[100px]  " />
              <p className="text-2xl">
                Bảo đảm việc làm sau khi kết thúc khóa học
              </p>
              <p className="pt-1">
                {" "}
                Bảo đảm học viên có việc làm ngay say khi tốt nghiệp. Ký kết
                việc làm theo thỏa thuận trong hợp đồng dịch vụ đào tạo.
              </p>
            </div>

            <div className=" w-[260px] h-[250px] text-center">
              <TbMessages className="text-red-500 text-5xl ml-[100px]" />
              <p className="text-2xl">
                Hỗ trợ học viên ngay cả sau khi tốt nghiệp
              </p>
              <p className="pt-1">
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
