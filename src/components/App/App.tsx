import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigate from "@components/Navigate/Navigate";
import Direction from "@components/Direction/Direction";
import ChatsBlock from "@components/Direction/ChatsBlock/ChatsBlock";
import Plug from "@components/Plug/Plug";
import { backgroundItems } from '@/utils/constants';
import AddChat from "../Direction/AddChat/AddChat";


function App() {
  const location = useLocation();
  const [ background, setBackground ] = useState('');

  useEffect(() => {
    backgroundItems.filter((i) => {
      if(i.title === location.pathname) {
        setBackground(i.image);
      }
    })
  }, [location.pathname])


  return (
    <>
      <Navigate />
      <Direction path={location.pathname}>
        <Routes>
          <Route index element={<ChatsBlock />} />
          <Route path="/status" element={<Plug image={background} />} />
          <Route path="/community" element={<Plug image={background} />} />
          <Route path="/setting" element={<Plug image={background} />} />
          <Route path="/account" element={<Plug image={background} />} />
          <Route path="/add-chat" element={<AddChat />} />
        </Routes>
      </Direction>
    </>
  )
}

export default App;
