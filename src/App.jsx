import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Subject from "./components/Subject";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/ReactMarks/login" element={<Login />} />
        <Route path="/ReactMarks/subject" element={<Subject />} />
      </Routes>
    </>
  );
}

export default App;
