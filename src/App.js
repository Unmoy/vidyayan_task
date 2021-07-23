import "./App.css";
import BookClass from "./components/BookClass/BookClass";
import Courses from "./components/Courses/Courses";
import Deparments from "./components/Deparments/Deparments";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Courses></Courses>
      <BookClass></BookClass>
      <Deparments></Deparments>
      <HowItWorks></HowItWorks>
    </>
  );
}

export default App;
