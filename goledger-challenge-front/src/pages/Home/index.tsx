import Aside from "../../components/Aside";
import Header from "../../components/Header/index";
import { Outlet } from "react-router";

import * as S from './styles'
// import Aside from "../../components/Aside";

const Home = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Aside />
        <div>
          <Outlet />
        </div>
      </S.Wrapper>
    </>
  );
};

export default Home;
