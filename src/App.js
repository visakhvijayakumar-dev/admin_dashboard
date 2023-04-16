import Home from "./pages/home/home";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login/login";
import Single from "./pages/single/single";
import New from "./pages/new/new";
import List from "./pages/list/list";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
