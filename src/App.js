import './App.css';
import 'aos/dist/aos.css';
import { css } from '@emotion/react';
import AOS from 'aos';
import React, { useEffect } from 'react';
// Import Images
import avocado from './images/avocado.svg';
import bread from './images/bread.svg';
import carrot from './images/carrot.svg';
import cheese from './images/cheese.svg';
import eggs from './images/eggs.svg';
import expiresIn from './images/expiresIn.svg';
import expiresToday from './images/expiresToday.svg';
import four from './images/four.svg';
import lettuce from './images/lettuce.svg';
import logo from './images/logo.svg';
import matcha from './images/matcha.svg';
import milk from './images/milk.svg';
import milkround from './images/milkround.svg';
import nine from './images/nine.svg';
import one from './images/one.svg';
import pasta from './images/pasta.svg';
import phoneFrontside from './images/phoneFrontside.png';
import phoneHeader from './images/phoneHeader.png';
import pineapple from './images/pineapple.svg';
import QRCode from './images/QRCode.PNG';
import shelfLife from './images/shelfLife.svg';
import tomato from './images/tomato.svg';
import tomatosauce from './images/tomatosauce.svg';
import topxel from './images/topxel.svg';
import trackedFor from './images/trackedFor.svg';
import twelve from './images/twelve.svg';
import twentyeight from './images/twentyeight.svg';
import two from './images/two.svg';
import twotomato from './images/twotomato.svg';
import world from './images/world.svg';

/** @jsxImportSource @emotion/react */

// Header Styles
const headerStyles = css`
  display: flex;
  padding: 16px 40px;
  align-items: center;
  margin-bottom: 20px;
`;

const headerRightDiv = css`
  margin-left: auto;
  margin-right: 10px;
`;

const headerLinks = css`
  margin: 20px 25px;
  padding: 8px 10px;
  font-size: 20px;
  font-weight: 500;
  :hover {
    background-color: #eeeeee;
    border-radius: 10px;
  }
`;

const linkSupport = css`
  margin-right: 30px;
  padding: 8px 10px;
  font-size: 20px;
  font-weight: 500;
  :hover {
    background-color: #eeeeee;
    border-radius: 10px;
  }
`;

const button = css`
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 22px;
  padding: 8px 24px;

  :hover {
    background-color: #36b536;
  }

  :active {
    background-color: #36b536;
  }
`;

// Generell styles for food containers

const foodSectionContainer = css`
  padding: 0 40px;
`;

const foodSectionSubContainer = css`
  width: 100%;
  max-width: 1064px;
  padding: 0px;
  margin: 0px auto;
`;

const numberContainer = css`
  position: relative;

  img:last-of-type {
    position: absolute;
    left: 64%;
    top: 10%;
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0);
    border-radius: 100%;
    width: 26%;
  }
`;

// Section 1 - eat fresh styling
const headline1 = css`
  text-transform: uppercase;
  font-size: 180px;
  text-align: center;
  line-height: 0.8;
  margin-top: 50px;
  margin-bottom: 115px;

  :first-of-type {
    z-index: 0;
  }
`;

const freshSpan = css`
  position: relative;
  z-index: 2;
`;

const phoneImg = css`
  position: absolute;
  top: 18%;
  right: 28%;
  width: 23%;
  height: auto;
  z-index: 1;
`;

const saveTimeHeading = css`
  text-align: center;
  color: #36b535;
  line-height: 1.5;
  font-size: 35px;
  margin-top: 5px;
  font-weight: 500;
`;

// Section 2 - Don't waste food styling
const wasteFoodSection = css`
  display: flex;
  margin-top: 100px;
  padding-right: 40px;
  margin-bottom: 130px;

  > div {
    width: 50%;
  }
`;

const foodContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

const writingContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-left: 40px;

  h2 {
    font-size: 65px;
    line-height: 1;
    margin-bottom: 25px;
  }

  p {
    color: #36b536;
    font-size: 23px;
    font-weight: 500;
    margin-top: 0;
  }
`;

const tomatoBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 200, 143) 0%,
    rgb(255, 143, 143) 100%
  );
  border-radius: 20px;
  margin: 10px 10px 10px 0;
`;

const lettuceBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(202, 236, 172) 0%,
    rgb(131, 208, 197) 100%
  );
  border-radius: 20px;
  margin: 10px 10px 10px 0;
`;

const carrotBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 232, 188) 0%,
    rgb(255, 156, 84) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

const pineappleBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 239, 184) 0%,
    rgb(251, 220, 113) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

// Section 3 - Expiration dates
const milkBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(218, 227, 244) 0%,
    rgb(146, 163, 195) 100%
  );
  border-radius: 20px;
`;

const whiteBackgrounds = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  border-radius: 20px;
  background: white;
`;

const verticalFoodContainer = css`
  padding-left: 60px;
`;

const verticalImage2 = css`
  margin-left: 20%;
  margin-top: -21%;
`;

const verticalImage3 = css`
  margin-left: 45%;
  margin-top: -21%;
`;

// Section 4 - Shelf Life
const pastaBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 228, 184) 0%,
    rgb(255, 200, 109) 100%
  );
  border-radius: 20px;
`;

const verticalImageLeft2 = css`
  margin-left: 23%;
  margin-top: -23%;
`;

const verticalImageLeft3 = css`
  margin-left: 43%;
  margin-top: -23%;
`;

// Section 5 - Don't waste food styling Nr. 2
const foodContainerReversed = css`
  display: flex;
  flex-wrap: wrap;
`;

const writingContainerReversed = css`
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  h2 {
    font-size: 60px;
    line-height: 1;
    margin-bottom: 25px;
  }

  p {
    color: #36b536;
    font-size: 22px;
    font-weight: 500;
    margin-top: 0;
  }
`;

const eggsBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(246, 245, 242) 0%,
    rgb(211, 219, 235) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

const cheeseBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 239, 184) 0%,
    rgb(251, 220, 113) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

const matchaBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(202, 236, 172) 0%,
    rgb(131, 208, 197) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

const tomatosauceBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 200, 143) 0%,
    rgb(255, 143, 143) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

// Section 6 - styling

const avocadoBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(220, 241, 176) 0%,
    rgb(131, 208, 139) 100%
  );
  border-radius: 100%;
  margin: 10px;
`;

const milkroundBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(246, 245, 242) 0%,
    rgb(211, 219, 235) 100%
  );
  border-radius: 100%;
  margin: 10px;
`;

const breadBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 232, 188) 0%,
    rgb(255, 156, 84) 100%
  );
  border-radius: 100%;
  margin: 10px;
`;

// Section 7 Darkmode Styling

const darkmodeSection = css`
  width: 100%;
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  margin: 180px auto 0 auto;
  background: black;
  height: 480px;
  display: flex;
  align-items: center;
`;

const darkmodeWritingContainer = css`
  width: 100%;
  max-width: 1090px;
  padding: 0px;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;

  h2 {
    color: white;
    font-size: 65px;
    line-height: 1;
    margin-bottom: 25px;
  }

  p {
    color: white;
    font-size: 23px;
    font-weight: 500;
    margin-top: 0;
  }
`;

const darkModeWritingSubContainer = css`
  width: 50%;
  padding-right: 130px;
`;

// Section 8 - QR Code
const qrCodeSection = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 120px;

  h2 {
    font-size: 65px;
    line-height: 1;
    margin-bottom: 25px;
  }

  p {
    color: #36b536;
    font-size: 23px;
    font-weight: 500;
    margin-top: 0;
  }
`;

const qrCodeSectionContainer = css`
  padding: 0 40px;
`;

const qrCodeSectionSubContainer = css`
  padding: 0 40px;
  margin: 0 140px;
`;

const qrCodeImage = css`
  width: 15%;
  margin-top: 20px;
`;

// Footer Styling

const footer = css`
  background: #141414;
  width: 100%;
`;

const topxelImage = css`
  width: 50%;
  margin-bottom: 20px;
  fill: red;

  :hover {
    fill: rgb(43, 253, 179);
  }
`;

const footerUpperDiv = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 50px 0;
`;

const footerUpperSubDivLeft = css`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
  flex-direction: column;

  p {
    color: white;
    font-size: 17px;
    color: #767676;
    margin: 0px;
    font-weight: 500;
  }

  p:last-of-type {
    margin-top: 30px;
  }

  p:last-of-type span {
    color: white;
    margin-right: 10px;
    margin-top: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    transition: border-color 0.2s ease 0s;

    :hover {
      border-color: white;
    }
  }
`;

const footerUpperSubDivRight = css`
  span {
    color: white;
    font-size: 28px;
    margin-left: 32px;
    padding: 8px;
    border-radius: 6px;

    :hover {
      background: rgba(188, 188, 188, 0.3);
    }
  }
`;

const footerLowerDiv = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px 0;

  button {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: none;
    background: #262626;
    color: #7e7e7e;
    padding-right: 10px;
  }

  button img {
    padding: 7px;
    color: #7e7e7e;
  }

  button:hover {
    background: white;
    color: black;
  }

  span {
    color: #6f6f6f;
    margin-left: 40px;
    font-size: 20px;
    padding: 8px;
    border-radius: 8px;
    font-weight: 500;
  }

  span:hover {
    color: white;
  }
`;

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <header css={headerStyles}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div css={headerRightDiv}>
          <a css={headerLinks}>About</a>
          <a css={linkSupport}>Support</a>
          <button css={button} type="button">
            Download for iOS
          </button>
        </div>
      </header>

      <main>
        {/* Section 1 Eat Fresh */}
        <section>
          <h1 css={headline1}>
            <span>Eat</span>
            <br />
            <img css={phoneImg} src={phoneHeader} alt="" />
            <span css={freshSpan}>Fresh</span>
          </h1>
          <h2 css={saveTimeHeading}>
            Save time and money managing your
            <br /> fridge or pantry with Kiff.
          </h2>
        </section>

        {/* Section 2 Don't waste food */}
        <div css={foodSectionContainer}>
          <div css={foodSectionSubContainer}>
            <section css={wasteFoodSection}>
              <div css={foodContainer}>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  css={numberContainer}
                >
                  <img
                    css={lettuceBackground}
                    src={lettuce}
                    alt="Lettuce Background"
                  />
                  <img src={four} alt="four" />
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                  css={numberContainer}
                >
                  <img
                    css={pineappleBackground}
                    src={pineapple}
                    alt="Pineapple Background"
                  />
                  <img src={two} alt="two" />
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1600"
                  css={numberContainer}
                >
                  <img
                    css={tomatoBackground}
                    src={tomato}
                    alt="Tomato Background"
                  />
                  <img src={twotomato} alt="two" />
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1900"
                  css={numberContainer}
                >
                  <img
                    css={carrotBackground}
                    src={carrot}
                    alt="Carrot Background"
                  />
                  <img src={one} alt="one" />
                </div>
              </div>
              <div css={writingContainer}>
                <h2>Don't let your food go to waste.</h2>
                <p>
                  Kiff tracks your food's state and orders it by priority, so
                  you will know what to eat at a glance.
                </p>
              </div>
            </section>

            {/* Section 3 - Expiration Dates under control */}
            <section css={wasteFoodSection}>
              <div css={writingContainerReversed}>
                <h2>Expiration dates under control.</h2>
                <p>
                  If your food has an expiration date, Kiff will keep it under
                  control so you can eat it before it's too late.
                </p>
              </div>

              <div css={verticalFoodContainer}>
                <div>
                  <img css={milkBackground} src={milk} alt="Milk Background" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  css={verticalImage2}
                >
                  <img
                    css={whiteBackgrounds}
                    src={expiresIn}
                    alt="Expiring Date"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  css={verticalImage3}
                >
                  <img
                    css={whiteBackgrounds}
                    src={expiresToday}
                    alt="Expiring Date"
                  />
                </div>
              </div>
            </section>

            {/* Section 4 - Enjoy your fresh food always */}
            <section css={wasteFoodSection}>
              <div>
                <div>
                  <img
                    css={pastaBackground}
                    src={pasta}
                    alt="Pasta Background"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  css={verticalImageLeft2}
                >
                  <img
                    css={whiteBackgrounds}
                    src={shelfLife}
                    alt="Expiring Date"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  css={verticalImageLeft3}
                >
                  <img
                    css={whiteBackgrounds}
                    src={trackedFor}
                    alt="Expiring Date"
                  />
                </div>
              </div>

              <div css={writingContainer}>
                <h2>Enjoy your food always fresh.</h2>
                <p>
                  Set the desired shelf life for each food and Kiff will remind
                  you to eat it before the time runs out.
                </p>
              </div>
            </section>

            {/* Section 5 - Waste Food Section Nr. 2 */}
            <section css={wasteFoodSection}>
              <div css={writingContainerReversed}>
                <h2>How long has it been open?</h2>
                <p>
                  Open or stored for too long? Kiff will track the time since
                  you opened, bought, or cooked your food.
                </p>
              </div>
              <div css={foodContainerReversed}>
                <div css={numberContainer}>
                  <img css={eggsBackground} src={eggs} alt="Eggs Background" />
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    src={twentyeight}
                    alt="Twentyeight"
                  />
                </div>
                <div css={numberContainer}>
                  <img
                    css={cheeseBackground}
                    src={cheese}
                    alt="Cheese Background"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1100"
                    src={twelve}
                    alt="Twelve"
                  />
                </div>
                <div css={numberContainer}>
                  <img
                    css={matchaBackground}
                    src={matcha}
                    alt="Matcha Background"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1300"
                    src={nine}
                    alt="Nine"
                  />
                </div>
                <div css={numberContainer}>
                  <img
                    css={tomatosauceBackground}
                    src={tomatosauce}
                    alt="Tomatosauce Background"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    src={twotomato}
                    alt="Two"
                  />
                </div>
              </div>
            </section>
            {/* Section 6 - Alerts, always in time */}
            <section css={wasteFoodSection}>
              <div>
                <div data-aos="zoom-in" data-aos-duration="1500">
                  <img
                    css={avocadoBackground}
                    src={avocado}
                    alt="Avocado Background"
                  />
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  css={verticalImageLeft2}
                >
                  <img
                    css={milkroundBackground}
                    src={milkround}
                    alt="Milk Background"
                  />
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  css={verticalImageLeft3}
                >
                  <img
                    css={breadBackground}
                    src={bread}
                    alt="Bread Background"
                  />
                </div>
              </div>
              <div css={writingContainer}>
                <h2>Alerts, always in time.</h2>
                <p>
                  Enable notifications and Kiff will alert you when your food
                  stops being fresh or is about to expire.
                </p>
              </div>
            </section>
          </div>
        </div>
        {/* Section 7 - Darkmode */}
        <section css={darkmodeSection}>
          <div css={darkmodeWritingContainer}>
            <div css={darkModeWritingSubContainer}>
              <h2>And of course, dark mode.</h2>
              <p>
                Perfect for those midnight trips to the fridge for a healthy
                snack.
              </p>
            </div>
          </div>
          <div css={darkModeWritingSubContainer}>
            <img
              data-aos="fade-up"
              data-aos-duration="1500"
              src={phoneFrontside}
              alt="Phone Frontside"
            />
          </div>
        </section>
        {/* Section 8 - Save money */}
        <section css={qrCodeSection}>
          <div css={qrCodeSectionContainer}>
            <div css={qrCodeSectionSubContainer}>
              <h2>Stop wasting food and start saving money.</h2>
              <p>Pay once, yours forever.</p>
              <img css={qrCodeImage} alt="QR-Code" src={QRCode} />
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer css={footer}>
        <div css={qrCodeSectionContainer}>
          <div css={footerUpperDiv}>
            <div css={footerUpperSubDivLeft}>
              <img css={topxelImage} src={topxel} alt="Topxel-Logo" />
              <p>Kiff, an app from Topxel.</p>
              <p>© Copyright 2020-2021. All Rights Reserved.</p>
              <p>
                <span>Terms</span>
                <span>Privacy</span>
              </p>
            </div>
            <div css={footerUpperSubDivRight}>
              <span>Home</span>
              <span>Press kit</span>
              <span>About</span>
              <span>Home</span>
              <span>Support</span>
              <span>Download</span>
            </div>
          </div>
          <div css={footerLowerDiv}>
            <div>
              <button>
                <img src={world} alt="Language" />
                ES
              </button>
            </div>
            <div>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
