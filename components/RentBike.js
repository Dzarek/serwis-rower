import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import EbikeRegulation from "./others/EbikeRegulation";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdExpandMore } from "react-icons/md";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const RentBike = ({
  ebike,
  ebikeregulation,
  ebikeTitle,
  ebikeSubtitle,
  ebikeImages,
}) => {
  const [activeStep, setActiveStep] = useState(null);
  const [openRegulation, setOpenRegulation] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  const handleActiveStep = (id) => {
    const filteredEbike = ebike.find((item) => item.id === id);
    setActiveStep(filteredEbike);
  };

  const galleryArray = ebikeImages.map((item) => {
    return { src: item };
  });

  return (
    <>
      <Wrapper className="mainPage" id="rentbike">
        <div className="title">
          <h1 className="h1Desktop">{ebikeTitle}</h1>
          <h1 className="h1Mobile">{ebikeTitle}</h1>
          <div data-aos="titleWidth"></div>
        </div>
        <p className="bikeMainInfo">{ebikeSubtitle}</p>
        <div className="imageContentMobile">
          <Carousel
            className="carouselM"
            infinite
            autoPlay={3000}
            animationSpeed={1000}
            slidesPerPage={1}
            stopAutoPlayOnHover
            draggable={false}
          >
            {ebikeImages.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt={index + 1}
                  onClick={() => setIndex(index)}
                />
              );
            })}
          </Carousel>
        </div>
        <div className="container">
          <h3>6 kroków wypożyczenia roweru</h3>
          <div className="rentSteps">
            {ebike.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    activeStep && activeStep.id === item.id
                      ? "step activeStep"
                      : "step"
                  }
                  onClick={() => handleActiveStep(item.id)}
                >
                  <span>{item.id}.</span>
                  <h4>{item.title}</h4>
                </div>
              );
            })}
          </div>
          <div className="rentStepsMobile">
            <Accordion allowZeroExpanded={true}>
              {ebike.map((item) => {
                const { title, id, info } = item;
                return (
                  <AccordionItem key={id}>
                    <div className="category">
                      <header>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <h3>
                              {id}. {title}
                              <MdExpandMore className="icon" />
                            </h3>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                      </header>
                      <AccordionItemPanel>
                        <ul>
                          {info.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                          {id === 1 && (
                            <button
                              className="regulationBtn"
                              onClick={() => setOpenRegulation(true)}
                            >
                              Regulamin
                            </button>
                          )}
                        </ul>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="verticalLine"></div>
          {activeStep ? (
            <div className="stepInfo">
              <h2>Krok {activeStep.id}</h2>
              {activeStep.info.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
              {activeStep.id === 1 && (
                <button
                  className="regulationBtn"
                  onClick={() => setOpenRegulation(true)}
                >
                  Regulamin
                </button>
              )}
            </div>
          ) : (
            <div className="stepInfo noInfo">
              <FaLongArrowAltLeft />
              <p>wybierz krok aby zobaczyć szczegóły</p>
            </div>
          )}
        </div>

        <div className="imageContent">
          {ebikeImages.map((item, index) => {
            return (
              <img
                data-aos="zoom-in"
                key={index}
                src={item}
                alt={index + 1}
                onClick={() => setIndex(index)}
              />
            );
          })}
        </div>
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={galleryArray}
          plugins={[Thumbnails, Fullscreen]}
        />
      </Wrapper>
      {openRegulation && (
        <EbikeRegulation
          setOpenRegulation={setOpenRegulation}
          ebikeregulation={ebikeregulation}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding-bottom: 15vh;

  .title {
    [data-aos="titleWidth"] {
      width: 0;
      transition-property: width;
      &.aos-animate {
        width: 400px;
      }
    }
    @media screen and (min-width: 801px) {
      .h1Mobile {
        display: none;
      }
    }
    @media screen and (max-width: 800px) {
      .h1Desktop {
        display: none;
      }
      .h1Mobile {
        font-size: 1.7rem;
      }
    }
  }
  .bikeMainInfo {
    margin: 10vh auto 0;
    width: 65vw;
    text-align: center;
    font-size: 1.1rem;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 10vh;
    flex-wrap: wrap;
    position: relative;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    @media screen and (min-width: 1700px) {
      width: 90%;
      margin: 10vh auto 0;
    }
    h3 {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 10vh;
      @media screen and (max-width: 800px) {
        margin-bottom: 5vh;
      }
      @media screen and (min-width: 1700px) {
        font-size: 1.6rem;
      }
    }
  }
  .rentSteps {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* margin-top: 5vh; */
    width: 40vw;
    flex-wrap: wrap;
    @media screen and (min-width: 1700px) {
      width: 35vw;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
    .step {
      color: #222;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      width: 12vw;
      height: 12vw;
      text-align: center;
      border: 3px dashed var(--secondaryColor);
      color: white;
      transition: 0.5s;
      margin: 0.5vw;
      overflow: hidden;
      text-transform: lowercase;
      cursor: pointer;
      user-select: none;
      @media screen and (min-width: 1700px) {
        width: 9vw;
        height: 9vw;
        margin: 1vw;
      }
      h4 {
        font-size: 1rem;
        @media screen and (min-width: 1700px) {
          font-size: 1.1rem;
        }
      }
      span {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      :hover {
        border: 3px solid var(--secondaryColor);
      }
    }
    .activeStep {
      border: 3px solid var(--secondaryColor);
      background-color: var(--navLinkColorHover);
    }
  }
  .verticalLine {
    width: 2px;
    height: 40vh;
    background-color: var(--secondaryColor);
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .stepInfo {
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    @media screen and (min-width: 1700px) {
      width: 35vw;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }

    h2 {
      margin-bottom: 5vh;
      color: var(--secondaryColor);
    }
    p {
      width: 100%;
      margin-bottom: 1vh;
      text-align: center;
      font-size: 1.1rem;
    }
  }
  .noInfo {
    align-self: center;
    @media screen and (max-width: 800px) {
      display: none;
    }
    svg {
      color: var(--secondaryColor);
      font-size: 3rem;
      margin-bottom: 3vh;
    }
  }
  .regulationBtn {
    margin-top: 3vh;
    padding: 10px 15px;
    font-size: 1.2rem;
    text-transform: uppercase;
    border: 2px solid white;
    background-color: var(--navLinkColorHover);
    color: white;
    border-radius: 5px;
    transition: 0.5s;
    font-family: var(--headerContactFont);
    font-weight: 500;
    cursor: pointer;

    :hover {
      background-color: white;
      color: var(--navLinkColorHover);
      border: 2px solid var(--navLinkColorHover);
    }
  }
  .imageContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    margin: 10vh auto 0;
    @media screen and (max-width: 800px) {
      display: none;
    }
    img {
      width: 30%;
      border-radius: 5px;
      cursor: pointer;
      filter: saturate(0.5);
      transition: 0.5s;
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
      :hover {
        filter: none;
      }
    }
  }

  .rentStepsMobile {
    @media screen and (min-width: 801px) {
      display: none;
    }
    width: 95vw;
    margin: 0 auto;
    .accordion__panel {
      animation: fadein 0.5s ease-in;
      overflow: hidden;
    }
    @keyframes fadein {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .category {
      color: #fff;
      border: 2px dashed var(--secondaryColor);
      border-radius: 5px;
      width: 95vw;
      margin-bottom: 2vh;

      header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        padding-top: 20px;
        width: 100%;
        background-color: #333;
        padding: 15px 5px 5px;
        h3 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          text-transform: lowercase;
          font-size: 1.2rem;
          width: 95vw;
          margin-bottom: 0vh;
          .icon {
            font-size: 3rem;
            color: var(--secondaryColor3);
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: 0.4s;
          }
        }
      }
      ul {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        li {
          text-align: center;
          font-size: 1.1rem;
        }
      }
    }
  }
  .imageContentMobile {
    display: block;
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
  .carouselM {
    margin: 10vh auto 0;
    width: 90vw;

    img {
      width: 17vw;
      height: 13vw;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 2px 2px 5px 0 #111;
      cursor: pointer;
    }
    @media screen and (max-width: 800px) {
      img {
        width: 90%;
        height: 33vh;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 2px 2px 5px 0 #111;
        cursor: pointer;
      }
    }
  }
`;

export default RentBike;
