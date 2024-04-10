import React from "react";
import Header from "../../components/Header/Header";
import imgDetails from "../../../public/img/java.png";
import Button from "antd/lib/button";
import { IoSearch } from "react-icons/io5";
import { RightOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Footer from "../../components/Footer/Footer";

function BlockDeails() {
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
    <div className="bg-[#f5f5f5]">
      <Header className="rounded-md shadow shadow-blue-500/40 md:shadow-indigo-500/40" />
      <div className="flex flex-wrap w-[70%] ml-[15%] mt-[1%] max-lg:w-[90%] max-lg:ml-[5%] max-[1280px]:w-[80%] max-[1280px]: ml-[5%] max-[800px]:w-[95%] max-[800px]:ml-[2%] max-[630px]:ml-[3%]">
        <div className="w-[60%] max-[630px]:w-[100%]">
          <div>
            <img
              className="w-[100%] shadow shadow-blue-500/40 md:shadow-indigo-500/40	"
              src={imgDetails}
              alt=""
            />
          </div>
          <div className="mt-[2%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            suscipit sit corporis, aut vel soluta? Tempore consequatur molestias
            recusandae, cumque non vero quos labore, ab suscipit dolor placeat
            nemo a. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Inventore, sed magnam ipsa nulla non tempora fugiat aspernatur
            ducimus dignissimos tempore excepturi mollitia adipisci pariatur!
            Impedit illo ipsam exercitationem doloremque perspiciatis.
          </div>
          <div className="mt-[8%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            suscipit sit corporis, aut vel soluta? Tempore consequatur molestias
            recusandae, cumque non vero quos labore, ab suscipit dolor placeat
            nemo a. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Inventore, sed magnam ipsa nulla non tempora fugiat aspernatur
            ducimus dignissimos tempore excepturi mollitia adipisci pariatur!
            Impedit illo ipsam exercitationem doloremque perspiciatis.
          </div>
          <div className="mt-[8%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            suscipit sit corporis, aut vel soluta? Tempore consequatur molestias
            recusandae, cumque non vero quos labore, ab suscipit dolor placeat
            nemo a. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Inventore, sed magnam ipsa nulla non tempora fugiat aspernatur
            ducimus dignissimos tempore excepturi mollitia adipisci pariatur!
            Impedit illo ipsam exercitationem doloremque perspiciatis.
          </div>

        </div>
        <div className="w-[30%] bg-[#f5f5f5]  ml-12 max-[630px]:w-[100%] max-[630px]:ml-0 max-[800px]:w-[30%]">
          <div className="w-[100%] bg-white flex  justify-evenly  text-center align-center items-center rounded-md shadow shadow-blue-500/40 md:shadow-indigo-500/40">
            <input
              type="text"
              name=""
              id=""
              placeholder="Seach..."
              className="bg-[#f5f5f5] w-[70%] mt-5 ml-[5%] outline-none	 rounded-md pb-1 pt-1 pl-2 mb-5	"
            />{" "}
            <Button type="primary" className="bg-[#BC2228]">
              <IoSearch />
            </Button>
          </div>
          <div className="w-[100%] bg-white pl-5 pt-5  rounded-md shadow shadow-blue-500/40 md:shadow-indigo-500/40 mt-8">
            <h3 className="text-xl font-bold">Recent Posts</h3>
            <div className="w-[100%] mt-5 flex">
              <div className="w-[30%]">
                <img src={imgDetails} className="w-[100%]" alt="" />
              </div>

              <div className="w-[60%] ml-5">
                <p className="font-bold ">
                  Lorem ipsum, dolor sit maio dsdfklkflr
                </p>
                <small>Thời gian</small>
              </div>
            </div>
            <div className="w-[100%] mt-5 flex">
              <div className="w-[30%]">
                <img src={imgDetails} className="w-[100%]" alt="" />
              </div>

              <div className="w-[60%] ml-5">
                <p className="font-bold ">
                  Lorem ipsum, dolor sit maio dsdfklkflr
                </p>
                <small>Thời gian</small>
              </div>
            </div>
            <div className="w-[100%] mt-5 flex">
              <div className="w-[30%]">
                <img src={imgDetails} className="w-[100%]" alt="" />
              </div>

              <div className="w-[60%] ml-5 pb-5">
                <p className="font-bold ">
                  Lorem ipsum, dolor sit maio dsdfklkflr
                </p>
                <small>Thời gian</small>
              </div>
            </div>
          </div>
          <div className="w-[100%] bg-white pl-5 pt-5   rounded-md shadow shadow-blue-500/40 md:shadow-indigo-500/40 mt-8">
            <h3 className="text-xl font-bold">Categories</h3>
            <div className="mt-5">
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="flex justify-between w-[35%] max-[1024px]:w-[80%]">
                    <RightOutlined className="text-[#BC2228]" />
                    Java{" "}
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="mt-5">
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="flex justify-between w-[35%] max-[1024px]:w-[80%]">
                    <RightOutlined className="text-[#BC2228]" />
                    Bussi ness{" "}
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="mt-5">
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="flex justify-between w-[35%] max-[1024px]:w-[80%]">
                    <RightOutlined className="text-[#BC2228]" />
                    Ne stJs{" "}
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="mt-5">
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="flex justify-between w-[35%] max-[1024px]:w-[80%]">
                    <RightOutlined className="text-[#BC2228] " />
                    No deJs{" "}
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="mt-5 ">
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="flex justify-between w-[35%] max-[1024px]:w-[80%] pb-5">
                    <RightOutlined className="text-[#BC2228]" />
                    Clic k me{" "}
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>

          <div className="w-[100%] bg-white flex  justify-evenly mb-10 pb-10    rounded-md shadow shadow-blue-500/40 md:shadow-indigo-500/40 mt-5">
            <div>
            <h3 className="text-xl font-bold mb-5">Last Tags</h3>

              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomLeft"
                  >
                    <Button>bottomLeft</Button>
                  </Dropdown>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottom"
                  >
                    <Button>bottom</Button>
                  </Dropdown>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                  >
                    <Button>bottomRight</Button>
                  </Dropdown>
                </Space>
                <Space wrap>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="topLeft"
                  >
                    <Button>topLeft</Button>
                  </Dropdown>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="top"
                  >
                    <Button>top</Button>
                  </Dropdown>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="topRight"
                  >
                    <Button>topRight</Button>
                  </Dropdown>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlockDeails;
