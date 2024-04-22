import React, { useEffect, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import Call from "../../img/logo/Call Button.png";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import "./learn.css";
import publicAxios from "../../configs/public";
import { Avatar, Badge, Divider, Input } from "antd";
import { UserOutlined, SearchOutlined, BellOutlined } from "@ant-design/icons";
const { Search } = Input;
import Tour from "reactour";
import { IoIosArrowDown } from "react-icons/io";
function Learn() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentLesson, setCurrentLesson] = useState("");
  const [brandData, setBrandData] = useState([]);
  const { id } = useParams();
  const [chapter, setChapter] = useState();
  const takeDataInDb = async () => {
    const data = await publicAxios.get(`/courses/findCourseByIdAdmin/${id}`);
    const newData = data.data.chapters;
    setCurrentLesson(newData[0].lessons[0]);
    setBrandData(newData);
    setChapter(newData[0]);
  };
  useEffect(() => {
    takeDataInDb();
  }, []);
  const handleTakeValue = ({ lesson, item }) => {
    setCurrentLesson(lesson);
    console.log("adsad", item);
    setChapter(item);
  };
  const handleBack = () => {
    const index = brandData.findIndex((item) => item.id === currentLesson.id);
    if (index > 0) {
      setCurrentLesson(brandData[index - 1]);
    }
    return;
  };
  const handleNext = () => {};

  const [isTourOpen, setIsTourOpen] = useState(false);
  const steps = [

    {
      selector: ".first-step",
      content: "đây là video",
    },
    {
      selector: ".second-step",
      content: "Đây  là nơi chọn  bài học",
    },
    {
      selector: ".third-step",
      content: "Đây  là nội  dung bài học",
    },
    {
      selector: ".fourth-step",
      content: "Đây  là nơi  chuyển sang bài Học mới",
    },
    {
      selector: ".fifth-step",
      content: "Chúc bạn học  tập  tốt",
    },
    // Thêm bao nhiêu bước tùy ý
  ];

  const closeTour = () => {
    setIsTourOpen(false);
  };

  return (
    <>
      <Tour
        startAt={0}
        onAfterOpen={() => setIsTourOpen(true)}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        lastStepNextButton={<button>Bắt Đầu Học Nào</button>}
      />
      <div className="h-[100vh]">
        <div>
          {/* Thêm các đối tượng nội dung khác cho các bước tiếp theo */}
        </div>
        <div className="fixed top-0 h-[10vh] w-[100vw] z-[999]">
          <div className="p-4 flex justify-between items-center bg-[rgb(239,235,245)]">
            <div>
              {" "}
              <img
                src="https://play-lh.googleusercontent.com/UuYYGTDU7fFQXlFAk4h5EF_OC01Flh-Vj0YSsB2_8xFXWapxvuE3jZA9wcFtfEFEB6VG"
                alt=""
                className="w-[30px]"
              />
            </div>
            <div className="flex gap-4 cursor-pointer">
              <Badge count={1}>
                <Avatar size={37} icon={<BellOutlined />} />
              </Badge>
              <div className="p-1 bg-slate-500 rounded-full min-w-[50px] flex justify-between items-center gap-9">
                <div className="flex items-center gap-4">
                  {" "}
                  <Avatar size={32} icon={<UserOutlined />} />
                  <span className=" text-white">Admin</span>
                </div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex h-[90vh]   z-[1] ">
          {" "}
          <div className="  overflow-scroll overflow-x-hidden h-full mt-[10vh] w-[100%] scrollable-container">
            <div className="">
              {" "}
              <div>
                <div className="bg-[rgb(239,235,245)] mb-[10px]  ">
                  <div className="sm:flex   h-[80vh] ">
                    <div className="w-full flex justify-center items-center bg-black">
                      {!currentLesson?.video ? (
                        <h1 className="text-white z-99999">
                          Video không tồn tại
                        </h1>
                      ) : (
                        <ReactPlayer
                          style={{ padding: "10px" }}
                          width={"80%"}
                          height={"100%"}
                          h2
                          url={currentLesson.video}
                          controls
                          className="first-step"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="bg-white p-5 third-step"
                  dangerouslySetInnerHTML={{
                    __html: currentLesson?.description,
                  }}
                />
              </div>
              <div className="fourth-step flex justify-center items-center sticky bottom-0 w-full py-5  bg-gray-200 z-[1000]">
                <button
                  onClick={handleBack}
                  className="text-black border border-black rounded-[5px] px-[20px] py-[10px] "
                >
                  Bài trước
                </button>
                <button
                  onClick={handleNext}
                  className="text-black border border-black rounded-[5px] px-[20px] py-[10px] "
                >
                  Bài tiếp theo
                </button>
                <button
                  className="absolute right-[20px] p-3 rounded-md border-[1px] border-blue-500 border-solid"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <IoMenuSharp />
                </button>
                <button onClick={() => setIsTourOpen(true)}>
                  Bắt đầu Tour
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full mt-[10vh] sticky bottom-0 z-[1] second-step">
            {" "}
            <div className=" overflow-scroll overflow-x-hidden  h-full scrollable-container  ">
              <Sidebar collapsed={collapsed} collapsedWidth={"0px"}>
                <Input
                  addonBefore={<SearchOutlined />}
                  placeholder="large size"
                />
                <Menu
                  transitionDuration={1000}
                  MenuItemStyles={{ color: "red" }}
                >
                  {brandData.map((item, index) => {
                    return (
                      <>
                        <SubMenu key={index} label={`${item.title} `}>
                          {item.lessons.map((lesson, index) => {
                            return (
                              <MenuItem
                                key={index}
                                onClick={() => {
                                  handleTakeValue(lesson, item);
                                }}
                              >
                                {lesson.title}
                              </MenuItem>
                            );
                          })}
                        </SubMenu>
                        <Divider style={{ padding: 0, margin: 0 }} />
                      </>
                    );
                  })}
                </Menu>
              </Sidebar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
