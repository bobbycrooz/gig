import React from "react";
import MainApp from "./main";
import Appdetails from "./Appdetails";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { IoMoonSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { toggleTheme } from "../redux/themeSlice";

const View = () => {
  // const [showingDetails, setShowingDetails] = React.useState(!false);
  // const _dp = useAppDispatch();
  const showingDetails = useAppSelector(({ themes }) => themes.showingDetails);

  return (
    <App className="bg">
      <Header />
      <AnimatePresence exitBeforeEnter>
        {showingDetails ? <Appdetails /> : <MainApp />}
      </AnimatePresence>
    </App>
  );
};

function Header() {
  const dispatch = useAppDispatch();

  function clkHandler() {
    dispatch(toggleTheme());
  }

  return (
    <nav className="shadow-md">
      {" "}
      <div className="where ">
        <h1 className="text md:text-xl font-semibold">Where in the world ?</h1>
      </div>
      <div className="w-6 md:hidden" />
      <div onClick={clkHandler} className="where ctd">
        <IoMoonSharp className="text-sm txt" />
        <p className="d_t text-sm">dark mode</p>
      </div>
    </nav>
  );
}

const App = styled.main`
  /* width: 100vw; */
  /* * {
    border: 1px solid red;
  } */
  height: auto;
  color: ${(props) => props.theme.txt};
  padding: 3.6rem 7.5rem;
  @media screen and (max-width: 548px) {
    padding: 3.6rem 0.5rem;
  }

  nav {
    background: ${(props) => props.theme.ele};
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 7.5rem;
    z-index: 10;
    @media screen and (max-width: 548px) {
      padding: 2rem 0rem;
      height: 2.5rem;
      justify-content: space-around;
    }

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    & > div {
      padding: 0.5rem;
      display: flex;

      .d_t {
        margin-left: 0.7rem;
        text-transform: capitalize;
        font-weight: 300;
        @media screen and (max-width: 548px) {
          /* margin-left: 0rem; */
        }
      }
    }
  }
`;

export default View;
