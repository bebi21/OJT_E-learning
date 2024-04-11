import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import "./CourseDetail.css";
import { Dropdown, Space } from "antd";
import { FaPlus } from "react-icons/fa6";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";
import { FaFilm } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
export default function CourseDetail() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <>
      <div className=" lg:h-[90px] lg:pt-8 pt-[20px] ml-[140px] ">
        <div className=" flex w-[320px] justify-between text-customRed font-extrabold text-lg ">
          <p>Trang chủ</p>
          <RiArrowDropRightLine className="mt-1" />
          <p>Khóa học</p>
          <RiArrowDropRightLine className="mt-1" />
          <p>Khóa học React</p>
        </div>
      </div>

      <div className=" ">
        <h1 className="text-[40px] ml-[140px] ">Khóa học React </h1>
      </div>

      <div className="flex  justify-between mt-6">
        <div className="ml-[130px]  w-[60vw] pl-4 h-[100%]  leading-[35px]">
          <p className="text-2xl  font-bold">Tổng quan</p>
          <p className="text-lg pt-6 font-bold">Mô tả khóa học</p>
          <p className="mt-2">
            React.JS là một thư viện, framework giúp xây dựng một website hiện
            đại, có tính mở rộng và hiệu năng cực lớn. Các sản phẩm tiêu biểu sử
            dụng React có thể kể đến như Facebook và Instagram. Được Facebook
            chống lưng, cũng như đầu tư mạnh mẽ, cộng với một cộng đồng đông đảo
            sử dụng, React chính là thư viện Frontend phổ biến nhất hiện nay, bỏ
            xa Vue và Angular. Với tên gọi React ULTIMATE - mục tiêu đề ra của
            khóa học, đấy chính là nó là phiên bản cuối cùng, là thứ{" "}
            <span className="italic font-bold"> DUY NHẤT </span>
            các bạn cần, cũng như cập nhật{" "}
            <span className="italic font-bold">
              {" "}
              MỚI NHẤT & ĐẦY ĐỦ NHẤT{" "}
            </span>{" "}
            cho người mới bắt đầu, muốn có một góc nhìn "thực sự chính xác" về
            React.JS.
          </p>

          <p className="pt-2">
            Ngoài ra, khi kết thúc khóa học, các bạn mới bắt đầu sẽ có đủ tự tin
            để làm chủ React, cũng như hiểu được, nắm vững được những kiến thức
            cốt lõi nhất để có thể xây dựng, phát triển một website thực tế với
            React.JS Khóa học sẽ thực sự bổ ích cũng như mang lại rất nhiều kiến
            thức cho các bạn mới bắt đầu. Với phương châm, học đi đôi với thực
            hành, chúng ta chỉ học "vừa đủ", chỉ học những kiến thức code lỗi
            nhất, hi vọng các bạn sẽ học hỏi được nhiều kiến thức, cũng như tự
            tin sử dụng React cho công việc của mình.
          </p>
          <br />

          <h2 className="text-lg font-bold">Bạn sẽ học được gì ?</h2>
          <div className="flex mt-3 justify-between  ">
            <ul className="list-disc pl-4">
              <li>Biết cách xây dựng giao diện web với HTML, CSS</li>
              <li>Biết cách đặt tên class CSS theo chuẩn BEM</li>
              <li>Làm chủ Flexbox khi dựng bố cục website</li>
              <li>Biết cách tự tạo động lực cho bản thân</li>
              <li>Học được cách làm UI chỉn chu, kỹ tính</li>
            </ul>
            <ul className="list-disc ">
              <li>Biết cách phân tích giao diện website</li>
              <li>Biết cách làm giao diện web responsive</li>
              <li>Sở hữu 2 giao diện web khi học xong khóa học</li>
              <li>Biết cách tự học những kiến thức mới</li>
              <li>Nhận chứng chỉ khóa học do F8 cấp</li>
            </ul>
          </div>

          <h2 className="mt-4 text-xl font-bold flex justify-between">
            Nội dung khóa học <span className="text-lg mr-2">4 chương</span>
          </h2>

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              onClick={(e) => e.preventDefault()}
              className="bg-gray-200 flex justify-between h-[40px] mt-2"
            >
              <Space className="pl-4">
                <FaPlus className="text-red-500" /> Bắt đầu
              </Space>
              <Space className="pr-4">7 bài học</Space>
            </div>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              onClick={(e) => e.preventDefault()}
              className="bg-gray-200 flex justify-between h-[40px] mt-2"
            >
              <Space className="pl-4">
                <FaPlus className="text-red-500" /> Bắt đầu
              </Space>
              <Space className="pr-4">7 bài học</Space>
            </div>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              onClick={(e) => e.preventDefault()}
              className="bg-gray-200 flex justify-between h-[40px] mt-2"
            >
              <Space className="pl-4">
                <FaPlus className="text-red-500" /> Bắt đầu
              </Space>
              <Space className="pr-4">7 bài học</Space>
            </div>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              onClick={(e) => e.preventDefault()}
              className="bg-gray-200 flex justify-between h-[40px] mt-2"
            >
              <Space className="pl-4">
                <FaPlus className="text-red-500" /> Bắt đầu
              </Space>
              <Space className="pr-4">7 bài học</Space>
            </div>
          </Dropdown>

          <h2 className="pt-6 text-lg font-bold">Yêu cầu</h2>

          <ul className="mt-3 list-disc pl-4">
            <li>Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)</li>
            <li>
              Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái
              khó
            </li>
            <li>
              Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học
            </li>
            <li>
              Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn
              những gì bạn cần phải biết
            </li>
          </ul>
        </div>

        <div className="box shadow-lg border-2 border-solid border-gray-100 w-[360px] mr-[70px] h-[500px] sticky top-20 z-[-10] bg-white ">
          <div className="flex justify-center">
            <img
              src="/img/courses/html,css.png"
              alt=""
              className="rounded-[5px] w-[90%] h-[40%] mt-4"
            />
          </div>

          <div className=" mt-4 text-center  ">
            <button className="bg-orange-300 w-[40%] h-[40px] rounded-sm text-xl">
              Đăng ký học
            </button>
            <button className="bg-orange-300 w-[40%] h-[40px] rounded-sm text-xl ml-3">
              Chia sẻ
            </button>

            <div className="flex  px-[19%] mt-6    ">
              <span className="pl-4 pt-[2px]">
                <AiFillDribbbleCircle className="text-xl  " />{" "}
              </span>
              <span className=" pl-5 "> Trình độ cơ bản</span>
            </div>

            <div className="flex  px-[19%] mt-6    ">
              <span className="pl-4 pt-[2px]">
                <FaClock className="text-xl  " />{" "}
              </span>
              <span className=" pl-5 "> Thời lượng : 20 tiếng</span>
            </div>

            <div className="flex  px-[19%] mt-6    ">
              <span className="pl-4 pt-[2px]">
                <FaFilm className="text-xl  " />{" "}
              </span>
              <span className=" pl-5 "> Chương học: 4</span>
            </div>

            <div className="flex  px-[19%] mt-6    ">
              <span className="pl-4 pt-[2px]">
                <PiCertificateFill className="text-xl  " />{" "}
              </span>
              <span className=" pl-5 "> Học mọi lúc, mọi nơi</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" ml-[140px] mt-6 bg-slate-100 h-[200px] w-[60%] pl-5  rounded-[5px]"> 
        <h1 className="text-xl font-bold pt-5">Giảng viên</h1>
        <div className="flex mt-5 w-[200px] justify-between  ">
          <div className="bg-blue-200 h-[60px] w-[60px] rounded-full"> </div>
          <div className="">
            <span className="pt-3">Hoàng Thiên Phú</span>
            <span className="flex">
              <span className=" pt-2 ">
                {" "}
                <IoBookSharp className="" />{" "}
              </span>
              <span className="mt-[3px] ml-1">2 khóa học</span>
            </span>
          </div>
        </div>
        <p className="pt-5">Giảng Viên tại Học viện Đào tạo công nghệ Rikkei Academy</p>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
