import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import Dnd from "./components/Dnd";
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Dnd />    */}
      <Main />
    </div>
  );
}

export default App;
