/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
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
import one from './images/one.svg';
import pasta from './images/pasta.svg';
import phoneHeader from './images/phoneHeader.png';
import pineapple from './images/pineapple.svg';
import shelfLife from './images/shelfLife.svg';
import tomato from './images/tomato.svg';
import tomatosauce from './images/tomatosauce.svg';
import trackedFor from './images/trackedFor.svg';
import two from './images/two.svg';

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

const foodSectionContainer = css`
  padding: 0 40px;
`;

const foodSectionSubContainer = css`
    width: 100%;
    max-width: 1064px;
    padding: 0px;
    margin: 0px auto;
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

const verticalImage1 = css``;

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
  background: black;
`;

const darkmode = css`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-left: 134px;
  padding-right: 65px;

  h2 {
    font-size: 60px;
    line-height: 1;
    margin-bottom: 25px;
    color: white;
  }

  p {
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 0;
  }
`;

function App() {
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
                <div>
                  <img
                    css={lettuceBackground}
                    src={lettuce}
                    alt="Lettuce Background"
                  />
                </div>
                <div>
                  <img
                    css={pineappleBackground}
                    src={pineapple}
                    alt="Pineapple Background"
                  />
                </div>
                <div>
                  <img
                    css={tomatoBackground}
                    src={tomato}
                    alt="Tomato Background"
                  />
                </div>
                <div>
                  <img
                    css={carrotBackground}
                    src={carrot}
                    alt="Carrot Background"
                  />
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
                  <img
                    css={verticalImage1}
                    css={milkBackground}
                    src={milk}
                    alt="Milk Background"
                  />
                </div>
                <div css={verticalImage2}>
                  <img
                    css={whiteBackgrounds}
                    src={expiresIn}
                    alt="Expiring Date"
                  />
                </div>
                <div css={verticalImage3}>
                  <img
                    css={whiteBackgrounds}
                    src={expiresToday}
                    alt="Expiring Date"
                  />
                </div>
              </div>
            </section>

            {/* Section 4 - Enjoy your fresh food always */}
            <section wasteFoodSection>
              <div>
                <div>
                  <img
                    css={pastaBackground}
                    src={pasta}
                    alt="Pasta Background"
                  />
                </div>
                <div>
                  <img
                    css={whiteBackgrounds}
                    src={shelfLife}
                    alt="Expiring Date"
                  />
                </div>
                <div>
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
                <div>
                  <img css={eggsBackground} src={eggs} alt="Eggs Background" />
                </div>
                <div>
                  <img
                    css={cheeseBackground}
                    src={cheese}
                    alt="Cheese Background"
                  />
                </div>
                <div>
                  <img
                    css={matchaBackground}
                    src={matcha}
                    alt="Matcha Background"
                  />
                </div>
                <div>
                  <img
                    css={tomatosauceBackground}
                    src={tomatosauce}
                    alt="Tomatosauce Background"
                  />
                </div>
              </div>
            </section>
            {/* Section 6 - Alerts, always in time */}
            <section css={wasteFoodSection}>
              <div>
                <div>
                  <img
                    css={avocadoBackground}
                    src={avocado}
                    alt="Avocado Background"
                  />
                </div>
                <div>
                  <img
                    css={milkroundBackground}
                    src={milkround}
                    alt="Milk Background"
                  />
                </div>
                <div>
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
          <div css={darkmode}>
            <h2>And of course, dark mode.</h2>
            <p>
              Perfect for those midnight trips to the fridge for a healthy
              snack.
            </p>
          </div>
          <div>
            <img alt="Phone Frontside" />
          </div>
        </section>
        {/* Section 8 - Save money */}
        <section></section>
      </main>

      <footer>
        <div>
          <img alt="Topxel-Logo" />
          <p></p>
          <p></p>
          <a>Terms</a>
          <a>Privacy</a>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Press kit</li>
            <li>Aobut</li>
            <li>Support</li>
            <li>Download</li>
          </ul>
        </div>
        <div>
          <button>
            <img alt="Language" />
            ES
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
