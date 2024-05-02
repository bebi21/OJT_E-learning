import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { PiBookOpenTextLight } from "react-icons/pi";
import { RxBackpack } from "react-icons/rx";
import { TbMessages } from "react-icons/tb";
import { GoMortarBoard } from "react-icons/go";
import { Button, Input } from "antd";
import publicAxios from "../../configs/public";
import {
  SettingOutlined,
  BookOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./Courses.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Khóa học", "sub1", <BookOutlined />, [
//     getItem(
//       <div className="flex">
//         {" "}
//         <input type="checkbox" />{" "}
//         <span className="pl-2">Java</span>{" "}
//       </div>
//     ),
//     getItem(
//       <div className="flex">
//         {" "}
//         <input type="checkbox" /> <span className="pl-2">HTML,CSS,Javascript</span>{" "}
//       </div>
//     ),
//     getItem(
//       <div className="flex">
//         {" "}
//         <input type="checkbox" /> <span className="pl-2"></span>{" "}
//       </div>
//     ),
//   ]),
//   {
//     type: "divider",
//   },
//   getItem("Level", "sub2", <FieldTimeOutlined />, [
//     getItem(
//       <div className="flex">
//         {" "}
//         <input type="checkbox" /> <span className="pl-2"></span>{" "}
//       </div>
//     ),
//   ]),
//   {
//     type: "divider",
//   },
// ];

export default function Course() {
  const [getCourse, setGetCourse] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const handleGetCourse = async () => {
    try {
      const response = await publicAxios.get("/courses/list");
      setGetCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePaginationRenderOne();
  }, []);

  const handleSearch = async () => {
    const dataValue = valueInput;
    try {
      const response = await publicAxios.get(
        `/courses/searchCourse?key=${dataValue}`
      );
      setGetCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetvalue = (e) => {
    const check = e.target.value;
    if (check) {
      setValueInput(check);
    } else {
      handleGetCourse();
    }
  };

  const handlePaginationRenderOne = async () => {
    const limit = 6;
    window.scrollTo({ top: 600, behavior: "smooth" });
    let firstPage = 1;
    try {
      const response = await publicAxios.get(
        `/courses/PaginationCourse?page=${firstPage}&limit=${limit}`
      );
      setGetCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePagination = async (page) => {
    const limit = 6;
    const dataValue = valueInput;
    window.scrollTo({ top: 600, behavior: "smooth" });
    try {
      const response = await publicAxios.get(
        `/courses/PaginationCourse?key=${dataValue}&page=${page}&limit=${limit}`
      );
      setGetCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const onClick = (e) => {
  //   console.log("click ", e);
  // };

 console.log(getCourse)
  return (
    <>
      <div className="trans-font">
        <div className=" w-[100%] lg:h-[520px] sm:h-[400px] h-[600px] banner "></div>
        <div className=" lg:h-[90px] lg:pt-8 pt-[20px] pl-11 ">
          <div className=" flex w-[170px] justify-between text-customRed font-extrabold text-lg ">
            <p>Trang chủ</p>
            <RiArrowDropRightLine className="mt-1" />
            <p className="">Khóa học</p>
          </div>
        </div>

        <h1 className="text-center text-5xl font-bold">
          Tổng hợp các khóa học
        </h1>
        <div className="  flex-wrap sm:flex lg:flex  mt-9">
          <div className=" lg:h-[100%] lg:pb-8   lg:w-[370px] w-[370px] lg:ml-1158z sm:mt-4 lg:ml-4 lg:mt-2 rounded-sm">
            <p className="ml-5 text-xl font-bold mt-2">Bạn cần tìm gì ?</p>
            <span className="flex">
              <Input
                placeholder="Nhập khóa học..."
                className="mt-2 h-[40px] mx-auto max-w-[320px] ml-5"
                onChange={handleGetvalue}
              />
              <Button
                className="mt-2 h-[40px] mx-auto mr-2 ml-1"
                onClick={handleSearch}
              >
                Tìm
              </Button>
            </span>

            {/* <Menu
              className="mt-5 ml-5 w-[320px] rounded-sm"
              onClick={onClick}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            /> */}
          </div>

          <div className="  h-[100%] grid grid-cols-1 lg:ml-6 lg:grid-cols-3 sm:grid-cols-2  sm:gap-x-[2px] sm:gap-y-[40px] lg:gap-5 gap-[50px] lg:mt-2 mt-4 ">
            {getCourse.data?.map((item, index) => {
              return (
                <NavLink key={index} to={`/courseDetail/${item.id}`}>
                  <div className="  lg:w-[300px] w-[340px] sm:h-[250px] sm:w-[280px]  lg:h-[310px] h-[272px] sm:ml-5  ml-11 shadow-lg rounded-[7px] transform hover:scale-95 transition-all duration-300 cursor-pointer border-2 border-gray-100 border-solid ">
                    <div
                      to="/courseDetail"
                      className="lg:h-[200px] sm:h-[140px] "
                    >
                      <img
                        src={item.image}
                        className="lg:w-[100%] sm:w-[100%] sm:h-[100%] h-[100%]  rounded-t-[3px] "
                        alt=""
                      />
                      <div className="flex mt-1 w-[200px] justify-between items-center">
                        <p className=" lg:pl-2 lg:pt-2 sm:pt-1 lg:text-xl text-sm sm:text-sm font-bold">
                          {item.title}
                        </p>
                        <button className="pt-1 w-[110px] rounded-[5px] sm:hidden lg:hidden  text-red-500 border-2 border-solid border-rose-500 ">
                          Truy cập ngay
                        </button>
                      </div>
                      <p className="sm:text-[16px] text-sm sm:pt-1 lg:pt-2 lg:pl-2">
                        {item.sub_description}
                      </p>
                      <div className="sm:block hidden lg:mt-2">
                        <span className="text-red-500 sm:text-[16px]  lg:pl-2 ">
                          Giảng viên:{" "}
                          <span className="text-black">
                            {" "}
                            {item.teacher_id?.name}{" "}
                          </span>
                        </span>
                        <span className="font-bold "></span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="mt-[60px] text-center">
          <Pagination
            showSizeChanger={false}
            defaultCurrent={1}
            total={getCourse?.totalItem}
            pageSize={getCourse?.itemByPage}
            onChange={handlePagination}
          />
        </div>

        <div className=" lg:h-[450px] sm:h-[400px] h-[690px] lg:w-[100%] sm:w-[970px] w-[430px] sm:pt-[100px] pt-11  flex justify-center sm:items-center sm:mt-[70px] mt-[200px] sm:bg-white  sm:mb-[100px]  ">
          <div className=" lg:h-[330px] lg:mt-[60px] h-[200px] grid grid-cols-2 gap-[78px] sm:grid-cols-4 sm:gap-4  lg:w-[1200px] sm:w-[900px] w-[300px] justify-around sm:ml-11  sm:mt-[200px]  ">
            <div className=" lg:w-[260px] w-[160px] sm:w-[210px] lg:h-[250px] h-[200px] text-center leading-7 ">
              <GoMortarBoard className="text-red-500 lg:text-5xl text-4xl lg:ml-[100px] sm:ml-[90px] ml-[60px]" />
              <p className=" lg:text-2xl sm:text-sm text-xl">
                Giảng viên, mentor hỗ trợ 24/7
              </p>
              <p className="pt-1 lg:text-xl text-sm">
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
