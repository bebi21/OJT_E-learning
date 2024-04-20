import "./Home.css";
import icon from "../../img/home_img/icon1.png";
import main_img from "../../img/home_img/bg_2.jpg";
import content_img from "../../img/home_img/bg_3.jpg";
import icon_check from "../../img/home_img/icon2.svg";
import icon_1 from "../../img/home_img/icon3.jpeg";
import icon_2 from "../../img/home_img/icon4.jpeg";
import icon_3 from "../../img/home_img/icon5.png";
import icon_4 from "../../img/home_img/icon6.png";
import icon_5 from "../../img/home_img/icon7.png";
import icon_6 from "../../img/home_img/icon8.png";
import img_test from "../../img/home_img/img_test.png";
import mentor_1 from "../../img/home_img/mentor1.png";
import mentor_2 from "../../img/home_img/mentor2.png";
import mentor_3 from "../../img/home_img/mentor3.png";
import mentor_4 from "../../img/home_img/mentor4.png";
import banner_1 from "../../img/home_img/banner1.png";
import banner_2 from "../../img/home_img/aquan_trongsuot.png";
import banner_3 from "../../img/home_img/home_page2.png";
import course_1 from "../../img/home_img/course_1.webp";
import course_2 from "../../img/home_img/course_2.jpeg";
import course_3 from "../../img/home_img/course_3.jpeg";
import hv_1 from "../../img/home_img/hv.jpg";
import React, { useRef, useState } from "react";
import { FaPeopleArrows } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { RiFileList2Line } from "react-icons/ri";
import YouTube from "react-youtube";
import { Divider } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperNavButtons } from "./ButtonTest";
import { FiPlayCircle } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
function Home() {
  // fake data
  const data = [
    {
      icon: icon_1,
      content: "Cam kết việc làm bằng hợp đồng",
      title:
        "Cam kết bằng hợp đồng việc làm cho học viên, mức lương khởi điểm lên tới 8 chữ số",
    },
    {
      icon: icon_2,
      content: "Mô hình Coding Bootcamp",
      title:
        "Hoàn thiện kiến thức, kỹ năng thực hành toàn diện. Có ít nhất 2 Project sau khoá học",
    },
    {
      icon: icon_3,
      content: "Lộ Trình Cá Nhân Hoá",
      title:
        "Chương trình học bài bản, dễ hiểu, sát thực tế và phù hợp với nhu cầu, mục tiêu của từng học viên",
    },

    {
      icon: icon_4,
      content: "Được “cầm tay chỉ code”",
      title:
        "Các giảng viên, mentor xuất thân từ các tập đoàn công nghệ lớn trực tiếp giảng dạy ",
    },
    {
      icon: icon_5,
      content: "Phương pháp học “Đảo Ngược”",
      title:
        "Giúp nhân đôi hiệu quả, hiểu sâu, nhớ lâu, chắc nền tảng lập trình và thực hành bài bản",
    },
    {
      icon: icon_6,
      content: "Hoàn thiện bộ kỹ năng “Sống Còn”",
      title:
        "Tư duy lập trình, hoàn thiện CV, trả lời phỏng vấn, quản lí công việc, tư duy giải quyết vấn đề,...",
    },
  ];
  const listCourse = [
    {
      img: course_1,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: course_2,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: course_3,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: course_3,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: course_1,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: course_2,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
  ];
  const listCourse2 = [
    {
      img: img_test,
      title: "HTML,CSS cơ bản",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: img_test,
      title: "JSX là gì",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: img_test,
      title: "Hook trong React được sử dụng như thế nào?",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: img_test,
      title: "NodeJS là gì",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
  ];
  const listMentor = [
    {
      img: mentor_1,
      name: "Nguyễn Duy Quang",
      position: "Trưởng phòng đào tạo",
      title1: "Kỹ sư Công Nghệ thông tin Đại học Bách Khoa Hà Nội",
      title2: "Chứng chỉ Oracle - OCA",
      title3: "Chứng chỉ Aptech toàn cầu",
      title4: "Chứng chỉ sư phạm",
    },
    {
      img: mentor_2,
      name: "Tạ Sơn  Tùng",
      position: "Cố vấn",
      title1: "Chủ tịch HĐQT Rikkeisoft",
      title2: "Top 30 Forbes Under 30, 2015",
      title3: "",
      title4: "",
    },
    {
      img: mentor_3,
      name: "Phan Thế Dũng",
      position: "Cố vấn",
      title1: "CEO Rikkeisoft",
      title2: "Đại học Bách Khoa Hà Nội & Keio Japan",
      title3: "",
      title4: "",
    },

    {
      img: mentor_4,
      name: "Nguyễn Viết Lâm",
      position: "Cố vấn",
      title1: "Phó tổng giám đốc Rikkeisoft",
      title2: "CEO Rikkei Academy",
      title3: "",
      title4: "",
    },
    {
      img: mentor_1,
      name: "Nguyễn Duy Quang",
      position: "Trưởng phòng đào tạo",
      title1: "Kỹ sư Công Nghệ thông tin Đại học Bách Khoa Hà Nội",
      title2: "Chứng chỉ Oracle - OCA",
      title3: "Chứng chỉ Aptech toàn cầu",
      title4: "Chứng chỉ sư phạm",
    },
    {
      img: mentor_2,
      name: "Tạ Sơn  Tùng",
      position: "Cố vấn",
      title1: "Chủ tịch HĐQT Rikkeisoft",
      title2: "Top 30 Forbes Under 30, 2015",
      title3: "",
      title4: "",
    },
    {
      img: mentor_3,
      name: "Phan Thế Dũng",
      position: "Cố vấn",
      title1: "CEO Rikkeisoft",
      title2: "Đại học Bách Khoa Hà Nội & Keio Japan",
      title3: "",
      title4: "",
    },

    {
      img: mentor_4,
      name: "Nguyễn Viết Lâm",
      position: "Cố vấn",
      title1: "Phó tổng giám đốc Rikkeisoft",
      title2: "CEO Rikkei Academy",
      title3: "",
      title4: "",
    },
    {
      img: mentor_1,
      name: "Nguyễn Duy Quang",
      position: "Trưởng phòng đào tạo",
      title1: "Kỹ sư Công Nghệ thông tin Đại học Bách Khoa Hà Nội",
      title2: "Chứng chỉ Oracle - OCA",
      title3: "Chứng chỉ Aptech toàn cầu",
      title4: "Chứng chỉ sư phạm",
    },
    {
      img: mentor_2,
      name: "Tạ Sơn  Tùng",
      position: "Cố vấn",
      title1: "Chủ tịch HĐQT Rikkeisoft",
      title2: "Top 30 Forbes Under 30, 2015",
      title3: "",
      title4: "",
    },
    {
      img: mentor_3,
      name: "Phan Thế Dũng",
      position: "Cố vấn",
      title1: "CEO Rikkeisoft",
      title2: "Đại học Bách Khoa Hà Nội & Keio Japan",
      title3: "",
      title4: "",
    },

    {
      img: mentor_4,
      name: "Nguyễn Viết Lâm",
      position: "Cố vấn",
      title1: "Phó tổng giám đốc Rikkeisoft",
      title2: "CEO Rikkei Academy",
      title3: "",
      title4: "",
    },
  ];
  // sử dụng  thư  viện swiper
  const swiperCss = useSwiper();
  const opts = {
    height: "315",
    width: "560",
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayVideo = () => {
    // videoRef.current.internalPlayer.playVideo();
    // setIsPlaying(true);
  };

  return (
    <>
      <div className='add-font '>
        {/*   banner */}
        <div className='h-[585px] bg-[#BC2228] text-white'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3300,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiperBanner'>
            <SwiperSlide className='item-swiper'>
              <div className='flex justify-between items-center px-[100px]'>
                <div className=' sm:w-[470px] w-[393px] '>
                  <h1 className=' sm:text-[32px] text-[24px]  sm:h-auto  max-w-[393px]:text-center sm:pt-auto  font-bold pb-[8px]'>
                    Khóa Học Lập Trình Từ Con Số 0 Tự Tin Đi Làm Sau 6 Tháng
                  </h1>
                  <div className='text-[16px] pt-[8px] pb-[8px] '>
                    <ul>
                      <li className='flex'>
                        <img src={icon} alt='icon' />
                        <span>Cam kết có việc làm</span>
                      </li>
                      <li className='flex'>
                        <img src={icon} alt='icon' />
                        <span>
                          Chắc nền tảng, giỏi thực hành - Có ít nhất 2 Project
                          sau khóa học
                        </span>
                      </li>
                      <li className='flex'>
                        <img src={icon} alt='icon' />
                        <span>
                          Tốt nghiệp chinh phục công việc LƯƠNG 8 CHỮ SỐ
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-[16px]'>
                    <button className='transition-color duration-300 ease-in-out  hover:bg-[#971c20]   rounded-[3px] border-[1px] border-solid border-[#bd2228] px-[12px] py-[8px] mr-[16px] bg-[#bd2228]'>
                      Nhận tư vấn 1:1
                    </button>
                    <button className='transition-color duration-300 ease-in-out  hover:bg-[#bd2228] border-[1px] border-solid border-[#C1BCD1] rounded-[3px] px-[12px] py-[8px]'>
                      Kiểm tra độ phù hợp
                    </button>
                  </div>
                </div>
                <div>
                  <img src={banner_1} alt='' className='w-[567px]' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-between items-center  px-[100px]'>
                <div className=' sm:w-[470px] w-[393px] '>
                  <h2 className=' sm:text-[52px] text-[24px] text-[#ffcd32] sm:h-auto  max-w-[393px]:text-center sm:pt-auto  font-bold pb-[30px]'>
                    Tư vấn 1-1
                  </h2>
                  <p className='py-[20px] text-[35px]'>
                    MIỄN PHÍ CÙNG CHUYÊN GIA
                  </p>
                  <div className='pt-[16px]'>
                    <button className='transition-color duration-300 ease-in-out  hover:bg-[#51539a] border-[1px] border-solid border-[#C1BCD1] rounded-[3px] px-[20px] py-[10px]'>
                      Tìm Hiểu Thêm
                    </button>
                  </div>
                </div>
                <div>
                  <img src={banner_2} alt='' className='w-[551px]' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-between items-center  px-[100px]'>
                <div className=' sm:w-[570px] w-[393px] '>
                  <h2 className=' sm:text-[40px] text-[24px] text-[#ffcd32] sm:h-auto  max-w-[393px]:text-center sm:pt-auto  font-bold pb-[30px]'>
                    BÀI TEST TƯ DUY - GMAT
                  </h2>
                  <p className='py-[10px] text-[25px]'>
                    Bài trắc nghiệm kiểm tra độ phù hợp với ngành CNTT
                  </p>
                  <p className='pb-[20px] text-[25px]'>
                    30 phút - Online - Miễn Phí
                  </p>
                  <div className='pt-[16px]'>
                    <button className='transition-color duration-300 ease-in-out  hover:bg-[#51539a] border-[1px] border-solid border-[#C1BCD1] rounded-[3px] px-[20px] py-[10px]'>
                      Tìm Hiểu Thêm
                    </button>
                  </div>
                </div>
                <div>
                  <img src={banner_3} alt='' className='w-[551px]' />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* section 1 */}
        <div className='sm:w-[100%]  h-[624px] sm:h-[558px] bg-[#F2F2F2]  sm:py-auto py-[40px]'>
          <h2 className='text-center text-[30px] font-bold text-[#BC2228]'>
            HỆ THỐNG ĐÀO TẠO LẬP TRÌNH HIỆN ĐẠI{" "}
          </h2>
          <div className='flex justify-center items-center gap-[0px] mt-[50px]'>
            <div className='w-[35%]'>
              <ul className='text-[2.5rem]   text-left'>
                <li className='flex  items-center '>
                  <div className='px-[20px]'>
                    <FaUsers className='text-[#F15A29] ' />
                  </div>
                  <span className='font-semibold'>50000+ Học viên</span>
                </li>
                <li className='flex  items-center '>
                  <div className='px-[20px]'>
                    <RiFileList2Line className='text-[#F15A29] ' />
                  </div>
                  <span className='font-semibold'>100+ Khóa Học</span>
                </li>
                <li className='flex  items-center '>
                  <div className='px-[20px]'>
                    <FaPeopleArrows className='text-[#F15A29]' />
                  </div>
                  <span className='font-semibold'>100+ Giảng Viên</span>
                </li>
                <li className='flex  items-center '>
                  <div className='px-[20px]'>
                    <FaRegHandshake className='text-[#F15A29]' />
                  </div>
                  <span className='font-semibold'>1000+ Đối Tác</span>
                </li>
              </ul>
            </div>
            <div className=''>
              <div className='relative  rounded-[10px] border-[10px] border-solid border-[#333333]'>
                {/* <YouTube videoId='n2iMF46ednQ' opts={opts} ref={videoRef} /> */}
                <div
                  className={`bg_video  flex justify-center items-center ${
                    isPlaying ? "hidden" : ""
                  }`}></div>
                <div
                  onClick={onPlayVideo}
                  className={`cursor-pointer absolute top-0 w-[100%] h-[100%] z-[15] bg-transparent transition-color duration-300 ease-in-out hover:bg-[rgba(0,0,0,0.5)] flex justify-center items-center  ${
                    isPlaying ? "hidden" : ""
                  }`}>
                  <FiPlayCircle className='text-[80px] z-[20] text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sesstion2 */}
        <div className='w-[100%] sm:h-[558px]  '>
          <h2 className='sm:text-[35px] text-[24px] font-bold text-[#BC2228] sm:py-[20px]  text-center'>
            Phương pháp đào tạo lập trình ưu việt
          </h2>
          <div className='sm:block flex justify-center'>
            {" "}
            <div className=' sm:flex justify-center gap-4 items-center '>
              <div className='sm:pb-auto pb-[20px] sm:mb-auto mb-[20px] lg:w-[368px] sm:w-[314px] w-[345px]  sm:h-[370px] bg-[#F2F2F2] text-[#221651]'>
                <div className='px-[20px] py-[25px]'>
                  <h4 className='font-semibold text-[20px]'>Coding Bootcamp</h4>
                  <ul className='pt-[20px] py-[8px]'>
                    <li className='flex'>
                      <div className='w-[24px] mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        CAM KẾT CÓ VIỆC LÀM bằng HỢP ĐỒNG, học xong là có việc
                        ngay (mức lương lên tới 10 - 12 triệu)
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Giảm thiểu tối đa chi phí
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Nhanh chóng đi làm tại doanh nghiệp
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Phát triển tư duy nền tảng bền vững
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='sm:pb-auto pb-[20px] sm:mb-auto mb-[20px] lg:w-[368px] sm:w-[314px] w-[345px]  sm:h-[370px] bg-[#F2F2F2] text-[#221651]'>
                <div className='px-[20px] py-[25px]'>
                  <h4 className='font-semibold text-[20px]'>
                    Phương pháp “Học Đảo Ngược”
                  </h4>
                  <ul className='pt-[20px] py-[8px]'>
                    <li className='flex'>
                      <div className='w-[24px] mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Lấy học viên làm trung tâm - lộ trình CÁ NHÂN HOÁ cho
                        mỗi người
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Hiểu sâu, nhớ lâu, vững lí thuyết, giỏi thực hành
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Duy trì liên tục kèm cặp trực tiếp 1-1 với giảng viên,
                        mentor
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='sm:pb-auto pb-[20px] sm:mb-auto mb-[20px] lg:w-[368px] sm:w-[314px] w-[345px] sm:h-[370px] bg-[#F2F2F2] text-[#221651]'>
                <div className='px-[20px] py-[25px]'>
                  <h4 className='font-semibold text-[20px]'>Training on Job</h4>
                  <ul className='pt-[20px] py-[8px]'>
                    <li className='flex'>
                      <div className='w-[24px] mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Trải nghiệm trực tiếp các hoạt động và dự án cùng
                        RikkeiSoft và các Doanh nghiệp đối tác
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>Tạo CV & Online Profile</span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Tư vấn về lộ trình nghề nghiệp và xu hướng công nghệ
                        (phù hợp vị trí nào)
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>
                        Hướng dẫn kĩ năng phỏng vấn
                      </span>
                    </li>
                    <li className='flex  py-[8px]'>
                      <div className='mr-[10px]'>
                        <img
                          src={icon_check}
                          alt=''
                          className='w-[24px] h-[24px]'
                        />
                      </div>
                      <span className='w-[290px]'>Ngày hội tuyển dụng</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sesstion3 */}
        <div className='sm:h-[785px]  bg-[#F2F2F2] pt-[50px] pb-[50px] '>
          <h2 className='sm:text-[35px] text-[24px] text-center font-bold text-[#BC2228] py-[20px] mb-[40px]'>
            Ưu điểm vượt trội khi học lập trình tại Rikkei Academy
          </h2>
          <div className='flex justify-center'>
            <div>
              <div className='grid sm:grid-cols-3 grid-cols-2 sm:gap-[50px] gap-[30px] sm:px-[40px] lg:px-[auto]'>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className='sm:w-[298px] pl:w-[352px] bg-white p-[20px] w-[156px] rounded-[15px]  transition duration-700 ease-in-out hover:scale-110 hover:shadow-xl cursor-pointer'>
                    <img src={item.icon} alt='icon' />
                    <h4 className='sm:text-[20px] text-[16px] font-semibold text-[#BC2228] pt-[16px]'>
                      {item.content}
                    </h4>
                    <span className='text-[#221651] sm:text-[16px] text-[14px]'>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* sesstion4 */}
        <div className='w-[100%]   pt-[40px] sm:px-auto px-[20px] pb-[50px]'>
          <div>
            {" "}
            <h2 className='sm:text-[45px] text-[24px] text-center font-bold text-[#BC2228] py-[20px]'>
              CÁC KHÓA HỌC TẠI Rikkei
            </h2>
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-[20px] w-[80%] '>
              {listCourse.map((item, index) => (
                <div
                  key={index}
                  className='cursor-pointer h-[270px] relative flex justify-center rounded-lg items-center bg-[rgba(0,0,0,0.5)]'>
                  <img
                    src={item.img}
                    alt=''
                    className='w-auto h-full rounded-lg absolute top-0 z-[-1]  '
                  />
                  <div className='text-center'>
                    <p className='text-[#4CBBE0] text-[25px]'>Lập trình</p>
                    <p className='text-[#ffcd32] font-bold text-[27px]'>
                      BOOTCAMP FULLTIME
                    </p>
                    <p className='text-white'>ONLINE, OFFLINE</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className='text-center  py-[40px]'>
            <button className='rounded-[3px] text-white border-[1px] border-solid hover:bg-[#bd2228] px-[12px] py-[8px] mr-[16px] bg-[#bd2228]'>
              Hiện tất cả khóa học
            </button>
          </div> */}
        </div>
        {/* session5 */}
        <div className='w-[100%] bg-[#F2F2F2] pt-[40px] pb-[80px] sm:px-auto px-[30px]'>
          <div>
            {" "}
            <h2 className='sm:text-[45px] text-[24px]  text-center font-bold text-[#BC2228] py-[20px]'>
              Bài Giảng Chất Lượng Cao
            </h2>
            <p className='text-[#5D5A6F] text-[16px] text-center sm:block hidden'>
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </p>
          </div>
          <div className='flex justify-center mt-[40px]'>
            <div className='grid sm:grid-cols-2  grid-cols-1 gap-[40px]'>
              {listCourse2.map((item, index) => (
                <div
                  key={index}
                  className='lg:w-[654px]  min-[1024px]:w-[500px] sm:w-[462px] w-[345px] lg:h-[393px] sm:h-[417px] '>
                  <div>
                    <div className=''>
                      <div className='relative  rounded-[10px] '>
                        <YouTube
                          videoId='n2iMF46ednQ'
                          opts={{
                            width: "500",
                            height: "293",
                            playerVars: {
                              autoplay: 1,
                            },
                          }}
                          ref={videoRef}
                        />
                        <div
                          className={`bg_video  flex justify-center items-center ${
                            isPlaying ? "hidden" : ""
                          }`}></div>
                        <div
                          onClick={onPlayVideo}
                          className={`cursor-pointer absolute top-0 w-[100%] h-[100%] z-[15] bg-transparent transition-color duration-300 ease-in-out hover:bg-[rgba(0,0,0,0.5)] flex justify-center items-center  ${
                            isPlaying ? "hidden" : ""
                          }`}>
                          <FiPlayCircle className='text-[80px] z-[20] text-white' />
                        </div>
                      </div>
                    </div>
                    <div className='text-[#221651] '>
                      <div className='py-[10px] flex'>
                        {" "}
                        <h5 className='font-semibold text-[20px] sm:max-w-[350px] max-w-[200px] '>
                          {item.title}
                        </h5>
                        <button className='text-center min-w-[80px] pl:h-auto h-[30px] ml-[10px] border-[1px] text-[14px] text-[#BC2228]  border-solid border-[#BC2228] rounded-[3px] px-[8px] py-[4px]'>
                          Truy cập ngay
                        </button>
                      </div>
                      <p className='text-[16px]'>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* session6 */}
        <div className='w-[100%] h-auto bg-[#ffff] pt-[40px] pb-[80px] sm:px-auto px-[30px]'>
          <div>
            {" "}
            <h2 className='sm:text-[45px] text-[24px]  text-center font-bold text-[#BC2228] py-[20px]'>
              Cảm Nhận Học Viên
            </h2>
            <p className='text-[#5D5A6F] text-[16px] text-center sm:block hidden'>
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </p>
          </div>
          <div className='flex justify-center mt-[40px]'>
            <Swiper
              style={{ width: "70%" }}
              loop={true}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className='mySwiper'>
              <SwiperSlide style={{ width: "350px" }}>
                <div className='relative w-[350px]  h-[525px] flex justify-center  items-center rounded-lg z-20 '>
                  <img
                    src={hv_1}
                    alt=''
                    className=' w-full  rounded-lg absolute top-0 z-[-3] '
                  />
                  <div className='absolute top-0 w-full h-full z-[-1] rounded-lg bg-[rgba(0,0,0,0.6)]'></div>
                  <div className='text-center z-20'>
                    <p className='text-white font-bold text-[1.5rem]'>
                      Trần Văn Cao
                    </p>
                    <i className='text-[#4CBBE0] text-[1.4rem]'>
                      Team Leader, NTT Data VDS
                    </i>
                    <p className='text-[rgb(255,255,255,0.8)] text-[1rem]'>
                      Tính kỷ luật là thứ mà mình đã được trui rèn trong suốt 6
                      tháng học tại CodeGym. Để phát triển trong ngành IT với
                      những vị trí quản lý như Leader, Manager, bạn cần có năng
                      lực cả về chuyên môn, ngoại ngữ, kỹ năng quản lý, ngoại
                      ngữ… Chính sự kỷ luật đã giúp mình bám đuổi kế hoạch học
                      tập và đạt được mục tiêu.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: "350px" }}>
                <div className='relative w-[350px]  h-[525px] flex justify-center  items-center rounded-lg z-20 '>
                  <img
                    src={hv_1}
                    alt=''
                    className=' w-full  rounded-lg absolute top-0 z-[-3] '
                  />
                  <div className='absolute top-0 w-full h-full z-[-1] rounded-lg bg-[rgba(0,0,0,0.6)]'></div>
                  <div className='text-center z-20'>
                    <p className='text-white font-bold text-[1.5rem]'>
                      Trần Văn Cao
                    </p>
                    <i className='text-[#4CBBE0] text-[1.4rem]'>
                      Team Leader, NTT Data VDS
                    </i>
                    <p className='text-[rgb(255,255,255,0.8)] text-[1rem]'>
                      Tính kỷ luật là thứ mà mình đã được trui rèn trong suốt 6
                      tháng học tại CodeGym. Để phát triển trong ngành IT với
                      những vị trí quản lý như Leader, Manager, bạn cần có năng
                      lực cả về chuyên môn, ngoại ngữ, kỹ năng quản lý, ngoại
                      ngữ… Chính sự kỷ luật đã giúp mình bám đuổi kế hoạch học
                      tập và đạt được mục tiêu.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: "350px" }}>
                <div className='relative w-[350px]  h-[525px] flex justify-center  items-center rounded-lg z-20 '>
                  <img
                    src={hv_1}
                    alt=''
                    className=' w-full  rounded-lg absolute top-0 z-[-3] '
                  />
                  <div className='absolute top-0 w-full h-full z-[-1] rounded-lg bg-[rgba(0,0,0,0.6)]'></div>
                  <div className='text-center z-20'>
                    <p className='text-white font-bold text-[1.5rem]'>
                      Trần Văn Cao
                    </p>
                    <i className='text-[#4CBBE0] text-[1.4rem]'>
                      Team Leader, NTT Data VDS
                    </i>
                    <p className='text-[rgb(255,255,255,0.8)] text-[1rem]'>
                      Tính kỷ luật là thứ mà mình đã được trui rèn trong suốt 6
                      tháng học tại CodeGym. Để phát triển trong ngành IT với
                      những vị trí quản lý như Leader, Manager, bạn cần có năng
                      lực cả về chuyên môn, ngoại ngữ, kỹ năng quản lý, ngoại
                      ngữ… Chính sự kỷ luật đã giúp mình bám đuổi kế hoạch học
                      tập và đạt được mục tiêu.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: "350px" }}>
                <div className='relative w-[350px]  h-[525px] flex justify-center  items-center rounded-lg z-20 '>
                  <img
                    src={hv_1}
                    alt=''
                    className=' w-full  rounded-lg absolute top-0 z-[-3] '
                  />
                  <div className='absolute top-0 w-full h-full z-[-1] rounded-lg bg-[rgba(0,0,0,0.6)]'></div>
                  <div className='text-center z-20'>
                    <p className='text-white font-bold text-[1.5rem]'>
                      Trần Văn Cao
                    </p>
                    <i className='text-[#4CBBE0] text-[1.4rem]'>
                      Team Leader, NTT Data VDS
                    </i>
                    <p className='text-[rgb(255,255,255,0.8)] text-[1rem]'>
                      Tính kỷ luật là thứ mà mình đã được trui rèn trong suốt 6
                      tháng học tại CodeGym. Để phát triển trong ngành IT với
                      những vị trí quản lý như Leader, Manager, bạn cần có năng
                      lực cả về chuyên môn, ngoại ngữ, kỹ năng quản lý, ngoại
                      ngữ… Chính sự kỷ luật đã giúp mình bám đuổi kế hoạch học
                      tập và đạt được mục tiêu.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* sesstion7 */}
        <div className=' pt-[50px]  bg-[#F2F2F2] sm:pb-[50px] '>
          <h2 className='sm:text-[35px] text-[24px] text-center font-bold text-[#BC2228] py-[20px] mb-[40px]'>
            Đội ngũ giảng viên, cố vấn chuyên môn cao
          </h2>

          <div className='h-full'>
            <div className='flex items-center justify-center'>
              <Swiper
                style={{ width: "85%" }}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination]}
                className='mySwiper'>
                {listMentor.map((item, index) => (
                  <SwiperSlide style={{ marginLeft: "0" }}>
                    <div
                      key={index}
                      className=' min-[1024px]:w-[290px] w-[235px] min-[1024px]:h-[490px] h-[auto] text-center text-[#221651] p-[16px] border-[1px] border-solid border-[rgba(0,0,0,0.1)] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]'>
                      <img src={item.img} alt='mentor' />
                      <div className='py-[8px]'>
                        <h5 className='text-[20px] font-semibold py-[8px]'>
                          {item.name}
                        </h5>
                        <span className=' bg-[#f8f7fa] text-[16px] px-[8px] py-[4px] rounded-[4px] border-[#c1bcd1] border-[1px] border-solid'>
                          {item.position}
                        </span>
                      </div>
                      <div className='py-[8px]'>
                        <p className='pt-[4px]'>{item.title1}</p>
                        <p className='pt-[4px]'>{item.title2}</p>
                        <p className='pt-[4px]'>{item.title3}</p>
                        <p className='pt-[4px]'>{item.title4}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/*  <div className='sm:hidden  '>
              <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                spaceBetween={30}
                className='mySwiper '>
                {listMentor.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <div className=' w-[235px]  h-[auto] text-center text-[#221651] p-[16px]  shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]'>
                      <img src={item.img} alt='mentor' />
                      <div className='py-[8px]'>
                        <h5 className='text-[20px] font-semibold py-[8px]'>
                          {item.name}
                        </h5>
                        <span className=' bg-[#f8f7fa] text-[16px] px-[8px] py-[4px] rounded-[4px] border-[#c1bcd1] border-[1px] border-solid'>
                          {item.position}
                        </span>
                      </div>
                      <div className='py-[8px]'>
                        <p className='pt-[4px]'>{item.title1}</p>
                        <p className='pt-[4px]'>{item.title2}</p>
                        <p className='pt-[4px]'>{item.title3}</p>
                        <p className='pt-[4px]'>{item.title4}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons />
              </Swiper>
            </div> */}
          </div>
        </div>
        {/*  */}
        <Divider plain style={{ marginTop: "50px" }}>
          <div className='sm:text-[45px] text-[24px] font-bold text-[#BC2228] '>
            {" "}
            <FaPen />
          </div>{" "}
        </Divider>
        <div className='w-[100%] h-auto bg-[#ffff] pt-[40px] pb-[80px] sm:px-auto px-[30px]'>
          <div>
            {" "}
            <h2 className='sm:text-[45px] text-[24px]  text-center font-bold text-[#BC2228] pb-[20px]'>
              Blog
            </h2>
          </div>

          <div className='flex justify-center gap-[40px] px-[40px]  mt-[40px] text-[#221651]'>
            <div>
              <h3 className='text-[2rem] mb-[30px]'>Tin Tức Hoạt Động</h3>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_2}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_2}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_3}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_1}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-[2rem] mb-[30px]'>Bài Viết Công Nghệ</h3>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_2}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_2}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_3}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
              <div className='flex justify-center gap-[10px] py-[20px] cursor-pointer'>
                <div>
                  <img
                    src={course_1}
                    alt='course'
                    className='w-[300px] rounded-md '
                  />
                </div>
                <div>
                  <span className='text-[1.5rem]'>
                    {" "}
                    Hướng dẫn sử dụng NVM để cài đặt nhiều phiên bản Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
