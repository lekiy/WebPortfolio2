import "./App.css";
import GuestBook from "./components/GuestBook";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <ProjectList />
      <GuestBook />
    </>
  );
}

export default App;
