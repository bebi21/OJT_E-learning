import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IoMenuSharp } from "react-icons/io5";
import "./learn.css";
import { Avatar, Divider, Input, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Tour from "reactour";
import { MdOutlineHelp } from "react-icons/md";
import { handleFindCourseByIdApi } from "../../api/course/index";
import { NavLink, useParams } from "react-router-dom";
import publicAxios from "../../configs/public";
import tokenAxios from "../../configs/private";
function Learn() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentLesson, setCurrentLesson] = useState("");
  const [brandData, setBrandData] = useState([]);
  const { id } = useParams();
  const [chapter, setChapter] = useState();
  const takeDataInDb = async () => {
    const data = await handleFindCourseByIdApi(id);
    const newData = data.data.chapters;
    setCurrentLesson(newData[0].lessons[0]);
    setBrandData(newData);
    setChapter(newData[0]);
  };
  useEffect(() => {
    takeDataInDb();
  }, []);
  const handleTakeValue = (lesson, item) => {
    setCurrentLesson(lesson);

    setChapter(item);
  };
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: `Thông Báo`,
      description: "Hãy xem hết video",
      placement: "top",
      duration: 2.5,
    });
  };
  const handleBack = () => {
    const index = brandData.findIndex((item) => item.id === chapter.id);
    const index2 = brandData[index].lessons.findIndex(
      (item) => item.id === currentLesson.id
    );
    if (index2 > 0) {
      setCurrentLesson(brandData[index].lessons[index2 - 1]);
    }
    if (index2 <= 0) {
      const index = brandData.findIndex((item) => item.id === chapter.id);
      const index2 = brandData[index].lessons.findIndex(
        (item) => item.id === currentLesson.id
      );
      if (index > 0) {
        setCurrentLesson(brandData[index - 1].lessons[0]);
        setChapter(brandData[index - 1]);
      }
    }
  };
  const handleNext = async () => {
    if (!check) {
      return openNotification();
    }
    const chapterIndex = brandData.findIndex((item) => item.id === chapter.id);
    if (chapterIndex === -1) return;
    const lessons = brandData[chapterIndex].lessons;
    const lessonIndex = lessons.findIndex(
      (item) => item.id === currentLesson.id
    );
    if (lessonIndex < lessons.length - 1) {
      setCurrentLesson(lessons[lessonIndex + 1]);
    } else if (chapterIndex < brandData.length - 1) {
      setCurrentLesson(brandData[chapterIndex + 1].lessons[0]);
      setChapter(brandData[chapterIndex + 1]);
    }
    setCheck(false);
  };
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
  ];

  const closeTour = () => {
    setIsTourOpen(false);
  };
  const [check, setCheck] = useState(false);
  const handleVideoEnd = async () => {
    /* const complete = {
      course_id: id,
      chapter_id: chapter.id,
      lesson_id: currentLesson.id,
    };
    try {
      const createProgress = await tokenAxios.post(
        "/progress/create",
        complete
      );
      console.log(createProgress);
    } catch (error) {
      console.log(error);
    } */
    setCheck(true);
  };

  return (
    <>
      {contextHolder}
      <Tour
        startAt={0}
        onAfterOpen={() => setIsTourOpen(true)}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        lastStepNextButton={<button>Bắt Đầu Học Nào</button>}
      />
      <div className="h-[100vh]">
        <div></div>
        <div className="fixed top-0 h-[11vh] w-[100vw] z-[999] ">
          <div className="p-4 flex justify-between items-center bg-red-500">
            <NavLink to="/">
              {" "}
              <img
                src="https://play-lh.googleusercontent.com/UuYYGTDU7fFQXlFAk4h5EF_OC01Flh-Vj0YSsB2_8xFXWapxvuE3jZA9wcFtfEFEB6VG"
                alt=""
                className="w-[30px]"
              />
            </NavLink>
            <div className="flex gap-4 cursor-pointer">
              <div className="p-1 bg-red-700 rounded-full min-w-[50px] flex justify-between items-center gap-9">
                <div className="flex items-center gap-4">
                  <Avatar size={32} icon={<UserOutlined />} />
                  <span className=" text-white"></span>
                </div>
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
                          onEnded={handleVideoEnd}
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
                  className={`${
                    check ? "" : "opacity-[0.5]"
                  } text-black border border-black rounded-[5px] px-[20px] py-[10px] `}
                >
                  Bài tiếp theo
                </button>
                <button
                  className="text-[1.5rem] absolute right-[20px] p-3 rounded-md border-[1px] border-blue-500 border-solid"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <IoMenuSharp />
                </button>
                <button onClick={() => setIsTourOpen(true)}>
                  <MdOutlineHelp />
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full mt-[10vh] sticky bottom-0 z-[1] second-step">
            {" "}
            <div className=" overflow-scroll overflow-x-hidden  h-full scrollable-container  ">
              <Sidebar collapsed={collapsed} collapsedWidth={"0px"}>
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
