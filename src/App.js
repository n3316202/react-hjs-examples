import "./App.css";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { Outlet } from "react-router-dom";

import styled from 'styled-components';

const OutletCss = styled.div`
  //background: #e9ecef;
  text-align: center;
`;



function App() {
  return (
    <div id="App">
      <MainHeader></MainHeader>
      <OutletCss>
        <Outlet/>{/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
      </OutletCss>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
