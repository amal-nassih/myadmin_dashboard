import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/home/Home";

import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Login from "./pages/login/Login";


import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/">
                  <Route index element={<Home/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="users">
                      <Route index element={<List/>}/>
                      <Route path=":userid" element={<Single/>}/>
                      <Route path="new" element={<New/>}/>
                  </Route>
                  <Route path="products">
                      <Route index element={<List/>}/>
                      <Route path=":productid" element={<Single/>}/>
                      <Route path="new" element={<New/>}/>
                  </Route>
                  <Route path="navbar" element={<Navbar/>}/>
                  <Route path="sidebar" element={<Sidebar/>}/>

            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
