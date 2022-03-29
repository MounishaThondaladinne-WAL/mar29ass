import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import CityCookie from "./citycookie";
import CookieTime from "./citycookietime";
import Categories from "./Category";
import Dishes from "./dish";
import Login from "./userlogin";
import Register from "./userRegister";
import CreateFile from "./CreateFile";
import CreateFolder from "./CreateFolder";
import FolderContent from "./FolderContents";
import ModifyFile from "./ModifyContent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="link-div">
          <Link to="/createfile" className="link">
            Create File
          </Link>
          <Link to="/createfolder" className="link">
            Create Folder
          </Link>
          <Link to="/foldercontents" className="link">
            Folder Contents
          </Link>
          <Link to="/modify" className="link">
            Modify Contents
          </Link>
        </div>
        <Routes>
          <Route path="/createfile" element={<CreateFile />}></Route>
          <Route path="/createfolder" element={<CreateFolder />}></Route>
          <Route path="/foldercontents" element={<FolderContent />}></Route>
          <Route path="/modify" element={<ModifyFile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
