import React from "react";
import logo from "../../img/logo/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Typography } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import { useState } from "react";

const items = [
  {
    key: "1",
    label: (
      <Link to="/course">
        {" "}
        <p>Tất cả khóa học</p>
      </Link>
    ),
    className: "h-[45px] text-xl",
    icons: <IoIosArrowDown />,
  },
];
const items2 = [
  {
    key: "4",
    label: (
      <Link to="">
        <p>Blog</p>
      </Link>
    ),
    className: "h-[45px] text-xl",
    icons: <IoIosArrowDown />,
  },
  {
    key: "5",
    label: "Thông tin sự kiện",
    className: "h-[45px] text-xl",
    icons: <IoIosArrowDown />,
  },
];

const items3 = [
  {
    key: "6",
    label: "Về RikkeiEdu",
    className: "h-[45px] text-xl",
    icons: <IoIosArrowDown />,
  },
  {
    key: "7",
    label: "Hệ sinh thái",
    className: "h-[45px] text-xl",
    icons: <IoIosArrowDown />,
  },
  {
    key: "8",
    label: "Cơ hội nghề nghiệp",
    className: "h-[45px] text-xl",
    icons: <IoIosArrowDown />,
  },
];

function Header() {
  const [user, setUser] = useState(localStorage.getItem("currentUser") );
  const handleLogout = async () => {
    try {
      setUser();
      localStorage.removeItem("currentUser");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sticky top-0 z-[999] bg-white shadow-lg flex sm:justify-around justify-between items-center h-[72px] sm:px-[72px] px-[24px]">
      <Link to="/">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </Link>
      <div className=" hidden sm:flex justify-evenly gap-[20px] text-[16px] text-[#221651] w-[50%]">
        <div>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [],
              style: {
                width: 220,
                border: "1px solid gray ",
                borderRadius: "4px",
                marginTop: "10px",
              },
            }}
          >
            <Typography.Link>
              <Space className="text-black text-[16px] ">
                Khóa học
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
          {/* <p>Khóa Học</p>
          <IoIosArrowDown /> */}
        </div>
        <div className="flex justify-center items-center">
          <Dropdown
            menu={{
              items: items2,
              selectable: true,
              defaultSelectedKeys: [],
              style: {
                width: 360,
                border: "1px solid gray ",
                borderRadius: "4px",
                marginTop: "10px",
              },
            }}
          >
            <Typography.Link>
              <Space className="text-black text-[16px]">
                Tài Nguyên
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
          {/* <p>Tài Nguyên</p>
          <IoIosArrowDown /> */}
        </div>
        <div className="flex justify-center items-center">
          <Dropdown
            menu={{
              items: items3,
              selectable: true,
              defaultSelectedKeys: [],
              style: {
                border: "1px solid gray ",
                borderRadius: "4px",
                marginTop: "10px",
              },
            }}
          >
            <Typography.Link>
              <Space className="text-black text-[16px] ">
                Vì sao chọn Rikkei Academy
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
          {/* <p>Vì sao chọn Rikkei Academy</p>
          <IoIosArrowDown /> */}
        </div>
      </div>
      <div className="hidden sm:block lg:flex justify-between  w-[17%]">
        <p className="pt-1">{user} </p>
        {user ? (
          <Button
            className="cursor-pointer text-red-500 w-[100px]"
            onClick={handleLogout}
          >
            Đăng xuất
          </Button>
        ) : (
          <div>
            <NavLink
              to={"/login"}
              className="min-w-[100px] text-[14px] text-white rounded-[5px] px-[20px] py-[10px] mr-[5px] bg-[#bd2228]"
            >
              Đăng Nhập
            </NavLink>
            <NavLink
              to={"/register"}
              className="min-w-[100px] text-[14px] text-[#bd2228] border-[1px] border-solid ml-[5px] border-[#bd2228] rounded-[5px] px-[20px] py-[10px] "
            >
              Đăng Kí
            </NavLink>
          </div>
        )}
      </div>
      <div className="sm:hidden  cursor-pointer text-[24px]">
        <FaBars />
      </div>
    </div>
  );
}

export default Header;
