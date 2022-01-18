import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { toggleShowDetails } from "../../redux/themeSlice";

const Details = () => {
  const dispatch = useAppDispatch();
  const currentItem = useAppSelector(({ themes }) => themes.currentItem);

  function goBack() {
    console.log("i have go back");
    dispatch(toggleShowDetails(null));
  }

  function lang() {
    let languages = `${
      (currentItem.languages[0].name,
      currentItem.languages[1].name,
      currentItem.languages[2].name)
    }`;
    return languages;
  }

  return (
    <motion.div className=" w-full h-auto md:h-screen mt-20">
      <Section>
        <div onClick={goBack} className="btn_cont ">
          <button className="back btn rounded-sm shadow-md flex items-center">
            {" "}
            <BsArrowLeft className="icon_c mr-3" />
            back
          </button>
        </div>

        <section className="mt-11 flex flex-col md:flex-row justify-center  items-center">
          <div className="flag">
            <img
              src={currentItem && currentItem.flags.png}
              className="full"
              alt=""
            />
          </div>
          <div className="flag-details ">
            <h1 className="flag_name">{currentItem && currentItem.name}</h1>
            {/*  */}
            <div className="flag_details flex flex-col md:flex-row mt-6">
              {" "}
              <div className="dtls1 w-full">
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>native name</b>: {currentItem && currentItem.nativeName}
                  </p>
                </div>
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>population</b>: {currentItem && currentItem.population}
                  </p>
                </div>
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>region</b>: {currentItem && currentItem.region}
                  </p>
                </div>
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>sub region</b>: {currentItem && currentItem.subregion}
                  </p>
                </div>
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>capitals</b>:{currentItem && currentItem.capital}
                  </p>
                </div>
              </div>
              <div className="dtls2 w-full mt-9 md:mt-0">
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>top level domain</b>: {currentItem && currentItem.name}
                  </p>
                </div>
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>currency</b>:{" "}
                    {currentItem && currentItem.currencies[0].code}
                  </p>
                </div>
                {/*  */}
                <div className="flex text-sm mb-1">
                  <p className="capitalize">
                    <b>languages</b>:{" "}
                    {currentItem && currentItem.languages[0].name}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row border_count mt-11 md:items-center capitalize">
              <p>
                <b>border countries:</b>
              </p>
              <div className=" flex justify-between mt-3 md:mt-0">
                {currentItem &&
                  currentItem.borders
                    ?.slice(0, 4)
                    .map((item: any, index: any) => (
                      <button key={index} className="btn shadow-md md:ml-4">
                        {item}
                      </button>
                    ))}
              </div>
            </div>
          </div>
        </section>
      </Section>
    </motion.div>
  );
};

const Section = styled.div`
  @media screen and (max-width: 548px) {
    padding: 5px 20px;
  }
  .btn_cont {
    /* border: 1px solid red; */
  }
  section {
    .flag {
      height: 350px;
      width: 85%;
      /* width: 400px; */
      background: red;
      @media screen and (max-width: 548px) {
        width: 100%;
      }
    }

    .flag-details {
      /* height: 300px; */
      width: 100%;
      margin-left: 120px;
      /* background: red; */
      padding: 3rem 0.5rem;
      @media screen and (max-width: 548px) {
        margin-left: 0px;
      }

      .flag_name {
        font-size: 22px;
        font-weight: 600;
        text-transform: capitalize;
      }

      .flag_details {
        .dtls1,
        .dtls2 {
          div {
            margin: 7px 0;
            b {
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
`;
export default Details;
