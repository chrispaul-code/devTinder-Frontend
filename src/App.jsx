import { BrowserRouter, Route, Routes  } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStrore"
import Feed from "./components/Feed"
import ConnectionReq from "./components/ConnectionReq"
import Requests from "./components/Requests"
import Chat from "./components/Chat"

function App() {
  return (
    <>
    <Provider store={appStore}>
     <BrowserRouter basename="/">   
        <Routes>
          <Route path="/" element={<Body/>}>
              <Route path="/" element={<Feed/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/connections" element={<ConnectionReq/>}/>
              <Route path="/requests" element={<Requests/>}/>
              <Route path="/chat/:targetUsereId" element={<Chat/>}/>
          </Route>
          </Routes>
     </BrowserRouter>
     </Provider>
     
    </>
  )
}

export default App
