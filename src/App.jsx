import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseDetail from "./page/course detail/CourseDetail";
import Course from "./page/course/Course";

export default function App() {
  return (
    <>
      <Header />
      {/* <CourseDetail /> */}
      <Course></Course>
      <Footer />
    </>
  );
}
