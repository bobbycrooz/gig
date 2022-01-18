import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { IoMoonSharp, IoSearchSharp } from "react-icons/io5";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import {
  getAllCountry,
  filterByContinent,
  searchByName,
} from "../../services/countries";
import { setCountryList, toggleShowDetails } from "../../redux/themeSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const options = {
  start: {},
  finish: {},
  exit: {},
};

const cardsArr = [1, 1, 1, 1, 1, 1, 1, 1];

const Main = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(({ themes }) => themes.countries);

  async function getAllcountry() {
    let { data } = await getAllCountry();
    dispatch(setCountryList(data.slice(0, 8)));
  }

  function displayItem(item: any): any {
    dispatch(toggleShowDetails(item));
  }

  React.useEffect(() => {
    getAllcountry();
  }, []);

  return (
    <motion.div className=" w-full h-full mt-11">
      {" "}
      <AppList>
        <Operations getAllcountry={getAllcountry} />
        <div className="cards  full mt-6 grid md:grid-cols-4 gap-9 md:gap-11 px-6 md:px-0">
          {countries.length
            ? countries.map((item: any, index: number) => (
                <div
                  key={`bobby-${index}`}
                  className="card  rounded-lg shadow-md"
                  onClick={() => displayItem(item)}
                >
                  <div className="card-image rounded-t-lg ">
                    <img
                      src={item.flags.png}
                      alt=""
                      className="w-full h-full rounded-t-lg"
                    />
                  </div>
                  <div className="card-body p-4 px-7 ">
                    <h1 className="name capitalize w-full font-semibold mb-4 text-lg">
                      {item.name}
                    </h1>

                    <div className="flex text-sm mb-1">
                      <p className="capitalize">
                        <b>population</b>: {item.population}
                      </p>
                    </div>

                    <div className="flex text-sm mb-1">
                      <p className="capitalize">
                        <b>Region</b>: {item.region}
                      </p>
                    </div>

                    <div className="flex text-sm mb-6">
                      <p className="capitalize">
                        <b>capital</b>: {item.capital}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : cardsArr.map((item, index) => <Loader key={index} />)}
        </div>
      </AppList>{" "}
    </motion.div>
  );
};

function Loader({ k }: any) {
  return (
    <div key={`bobby-${k}`} className="card  rounded-lg shadow-md">
      <div className="card-image rounded-t-lg ">
        <Skeleton
          width={"100%"}
          height={"100%"}
          baseColor="hsl(207, 26%, 17%)"
          highlightColor="#444"
        />
      </div>
      <div className="card-body p-4 px-7 ">
        <Skeleton
          width={"100%"}
          height={"100%"}
          baseColor="hsl(207, 26%, 17%)"
          highlightColor="#444"
        />
        <Skeleton
          width={"80%"}
          height={"100%"}
          baseColor="hsl(207, 26%, 17%)"
          highlightColor="#444"
        />
      </div>
    </div>
  );
}

function Operations({ getAllcountry }: any) {
  const [sValue, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  const filterArr = [
    { name: "Africa" },
    { name: " Americas" },
    { name: "Asia" },
    { name: "Europe" },
    { name: "Oceania" },
  ];

  async function filterCountries(name: string) {
    const { data } = await filterByContinent(name);
  }

  async function searchByNames(e: any, name: string) {
    e.preventDefault();

    if (name === "") {
      getAllcountry();
    } else {
      const { data } = await searchByName(name);
      if (data) {
        dispatch(setCountryList(data));
      } else {
      }
    }
  }

  return (
    <div className="search_fil flex flex-col md:flex-row space-y-6 md:space-y-0 items-start md:justify-between md:items-center">
      {" "}
      <form
        onSubmit={(e) => searchByNames(e, sValue)}
        className="sch_cont shadow-md mx-auto md:mx-0"
      >
        <div className="icon_cont  ctd">
          <IoSearchSharp />
        </div>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name=""
          id="search"
          placeholder="Search for a country..."
        />
      </form>
      <div className="filt_cont ctd relative shadow-md ml-4 md:ml-0">
        <button className="flt_btn ctd">
          Filter by Region{" "}
          <div className="crt_cont">
            <BiChevronDown />
          </div>
        </button>

        <div className="dropdown  p-2 absolute shadow-md">
          {filterArr.map((item, index: number) => (
            <div
              key={`${item}-${index}`}
              onClick={() => filterCountries(item.name)}
              className="options capitalize p-1"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const AppList = styled.main`
  height: auto;
  /* border: 1px solid red; */
  .search_fil {
    .sch_cont {
      background: ${(props) => props.theme.ele};
      height: 55px;
      width: 420px;
      display: flex;
      border-radius: 8px;
      @media screen and (max-width: 548px) {
        width: 90%;
      }

      .icon_cont {
        padding: 0.5rem;
        height: 100%;
        border-radius: 8px;
        width: 90px;
      }

      input {
        width: 100%;
        background: transparent;
        border-radius: 8px;
        border: none;
        color: ${(props) => props.theme.txt};
        font-size: 16px;
        font-weight: 300;

        &:focus {
          outline: none;
        }
      }
    }
    .filt_cont {
      /* border: 1px solid red; */
      button {
        background: ${(props) => props.theme.ele};
        height: 55px;
        /* width: auto; */
        display: flex;
        color: ${(props) => props.theme.txt};
        padding: 0 1rem;
        border-radius: 8px;
        /* border: none; */
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
      }

      .crt_cont {
        margin-left: 1.7rem;
      }
      .dropdown {
        /* bottom: -145px; */
        visibility: hidden;
        top: 62px;
        left: 0;
        /* border: 1px solid red; */
        background: ${(props) => props.theme.ele};
        width: 180px;
        .options {
          cursor: pointer;
        }
      }

      &:hover {
        .dropdown {
          /* bottom: -145px; */
          visibility: visible;
        }
      }
    }
  }

  .cards {
    .card {
      height: auto;
      background: ${(props) => props.theme.ele};

      &-image {
        width: 100%;
        height: 150px;
        /* background: red; */
      }

      &-body {
        width: 100%;
        /* height: 110px; */
      }
    }
  }
`;

export default Main;
