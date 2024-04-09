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
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperNavButtons } from "./ButtonTest";

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
      img: img_test,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: img_test,
      title: "NodeJS",
      content:
        " Lorem ipsum dolor sit amet consectetur. Sapien rutrum non  viverra magna at aliquam.",
    },
    {
      img: img_test,
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
  ];
  // sử dụng  thư  viện swiper
  const swiperCss = useSwiper();

  return (
    <>
      <div className='add-font '>
        {/*   banner */}
        <div className='home-bg_img text-white flex items-center lg:px-[130px] px-[30px]'>
          <div className='sm:w-[470px] w-[393px] '>
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
                    Chắc nền tảng, giỏi thực hành - Có ít nhất 2 Project sau
                    khóa học
                  </span>
                </li>
                <li className='flex'>
                  <img src={icon} alt='icon' />
                  <span>Tốt nghiệp chinh phục công việc LƯƠNG 8 CHỮ SỐ</span>
                </li>
              </ul>
            </div>
            <div className='pt-[16px]'>
              <button className='rounded-[3px] border-[1px] border-solid border-[#bd2228] px-[12px] py-[8px] mr-[16px] bg-[#bd2228]'>
                Nhận tư vấn 1:1
              </button>
              <button className='border-[1px] border-solid border-[#C1BCD1] rounded-[3px] px-[12px] py-[8px]'>
                Kiểm tra độ phù hợp
              </button>
            </div>
          </div>
        </div>
        {/* sesstion1 */}
        <div className='sm:w-[100%]  h-[624px] sm:h-[558px] bg-[#F2F2F2] flex justify-center sm:items-center sm:py-auto py-[40px]'>
          <div className='h-[323px] sm:w-auto w-[345px] sm:flex justify-center sm:items-center'>
            {" "}
            <div className='home-bg_img1 sm:block flex justify-center  '>
              <img
                src={main_img}
                alt='img'
                className='lg:w-[540px] sm:w-[320px] sm:h-[323px] w-[345px] '
              />
            </div>
            <div className='sm:w-[556px] w-[345px] sm:py-auto py-[24px]'>
              <div className='sm:pl-[40px]'>
                <div>
                  <h3 className='text-[24px] font-bold text-[#BC2228] sm:mb-[10px]'>
                    Rikkei Education - Where the dreams come true
                  </h3>
                  <p className='sm:text-[16px] text-[14px] text-[#231651]'>
                    Rikkei Education cam kết cung cấp nền tảng giáo dục và đào
                    tạo hiện đại, đưa công nghệ thông tin đến thế hệ trẻ Việt
                    Nam. Chúng tôi mong muốn trang bị cho các bạn đầy đủ kiến
                    thức và kỹ năng cần thiết, đồng thời khuyến khích, thúc đẩy
                    các bạn để phát triển sự nghiệp, nhằm biến ước mơ của các
                    bạn thành hiện thực.
                  </p>
                </div>
                <div className='pt-[16px] text-white'>
                  <button className=' text-white rounded-[3px] border-[1px] border-solid border-[#bd2228] px-[12px] py-[8px] mr-[16px] bg-[#bd2228]'>
                    Nhận tư vấn 1:1
                  </button>
                  <button className='text-[#231651] border-[1px] border-solid border-[#C1BCD1] rounded-[3px] px-[12px] py-[8px]'>
                    Kiểm tra độ phù hợp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sesstion2 */}
        <div className='sm:text-center  '>
          <h2 className='sm:text-[35px] text-[24px] font-bold text-[#BC2228] sm:py-[20px]  text-center'>
            Video bài giảng chất lượng cao
          </h2>
          <p className=' text-[14px] sm:w-auto  sm:px-auto px-[20px]  pt-[10px]  sm:text-[#5D5A6F] sm:px-[120px] sm:py-[10px] text-[#231651]'>
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </p>
          <div className='flex justify-center items-center my-[50px] '>
            <img
              src={content_img}
              alt=''
              className='lg:w-auto sm:w-[825px] w-[345px] sm:h-auto h-[150px]'
            />
          </div>
        </div>
        {/* sesstion3 */}
        <div className='w-[100%] sm:h-[558px] bg-[#F2F2F2] '>
          <h2 className='sm:text-[35px] text-[23px] sm:px-auto  text-center font-bold text-[#BC2228] py-[20px]'>
            Phương pháp đào tạo lập trình ưu việt
          </h2>
          <div className='sm:block flex justify-center'>
            {" "}
            <div className=' sm:flex justify-center gap-4 items-center '>
              <div className='sm:pb-auto pb-[20px] sm:mb-auto mb-[20px] lg:w-[368px] sm:w-[314px] w-[345px]  sm:h-[370px] bg-white text-[#221651]'>
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
              <div className='sm:pb-auto pb-[20px] sm:mb-auto mb-[20px] lg:w-[368px] sm:w-[314px] w-[345px]  sm:h-[370px]  bg-white text-[#221651]'>
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
              <div className='sm:pb-auto pb-[20px] sm:mb-auto mb-[20px] lg:w-[368px] sm:w-[314px] w-[345px] sm:h-[370px] bg-white text-[#221651]'>
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
        {/* sesstion4 */}
        <div className='sm:h-[585px] pt-[50px] mb-[50px] '>
          <h2 className='sm:text-[35px] text-[24px] text-center font-bold text-[#BC2228] py-[20px] mb-[40px]'>
            Ưu điểm vượt trội khi học lập trình tại Rikkei Academy
          </h2>
          <div className='flex justify-center'>
            <div>
              <div className='grid sm:grid-cols-3 grid-cols-2 sm:gap-[50px] gap-[30px] sm:px-[40px] lg:px-[auto]'>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className='sm:w-[298px] pl:w-[352px] w-[156px] sm:h-auto h-[192px]'>
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
        {/* session5 */}
        <div className='w-[100%]  bg-[#F2F2F2] pt-[40px] sm:px-auto px-[20px]'>
          <div>
            {" "}
            <h2 className='sm:text-[45px] text-[24px] text-center font-bold text-[#BC2228] py-[20px]'>
              Khóa học và bài giảng chất lượng cao
            </h2>
            <p className='text-[#5D5A6F] text-[16px] text-center sm:block hidden'>
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </p>
          </div>
          <div className='flex justify-center mt-[40px]'>
            <div className='grid sm:grid-cols-2   grid-cols-1 gap-[40px] '>
              {listCourse.map((item, index) => (
                <div
                  key={index}
                  className='lg:w-[654px] sm:w-[462px] w-[345px]  lg:h-[393px] sm:h-[417px]  '>
                  <div>
                    <img
                      src={item.img}
                      alt='img'
                      className='w-full  sm:h-[315px] mb-[10px]'
                    />
                    <div className='text-[#221651]'>
                      <h5 className='font-semibold text-[20px]'>
                        {item.title}
                      </h5>
                      <p className='text-[16px]'>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='text-center  py-[40px]'>
            <button className='rounded-[3px] text-white border-[1px] border-solid border-[#bd2228] px-[12px] py-[8px] mr-[16px] bg-[#bd2228]'>
              Hiện tất cả khóa học
            </button>
          </div>
        </div>
        {/* session6 */}
        <div className='w-[100%] bg-[#F2F2F2] pt-[40px] pb-[80px] sm:px-auto px-[30px]'>
          <div>
            {" "}
            <h2 className='sm:text-[45px] text-[24px]  text-center font-bold text-[#BC2228] py-[20px]'>
              Khóa học và bài giảng chất lượng cao
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
                  className='lg:w-[654px] sm:w-[462px] w-[345px] lg:h-[393px] sm:h-[417px] '>
                  <div>
                    <img
                      src={item.img}
                      alt='img'
                      className='w-full sm:h-[315px] mb-[10px]'
                    />
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
        {/* sesstion7 */}
        <div className=' pt-[50px] sm:pb-[50px] '>
          <h2 className='sm:text-[35px] text-[24px] text-center font-bold text-[#BC2228] py-[20px] mb-[40px]'>
            Đội ngũ giảng viên, cố vấn chuyên môn cao
          </h2>

          <div className='h-full'>
            <div className='flex justify-center'>
              <div className='sm:grid sm:grid-cols-4 hidden gap-[16px]'>
                {listMentor.map((item, index) => (
                  <div
                    key={index}
                    className='lg:w-[341px] w-[235px] lg:h-[630px] h-[auto] text-center text-[#221651] p-[16px]  shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]'>
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
                ))}
              </div>
            </div>
            <div className='sm:hidden  '>
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
                    <div className=' w-[235px] h-[auto] text-center text-[#221651] p-[16px]  shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]'>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
