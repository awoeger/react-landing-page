/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import carrot from './images/carrot.svg';
import cheese from './images/cheese.svg';
import eggs from './images/eggs.svg';
import four from './images/four.svg';
import lettuce from './images/lettuce.svg';
import logo from './images/logo.svg';
import matcha from './images/matcha.svg';
import one from './images/one.svg';
import phoneHeader from './images/phoneHeader.png';
import pineapple from './images/pineapple.svg';
import tomato from './images/tomato.svg';
import tomatosauce from './images/tomatosauce.svg';
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
  padding: 0px 40px;
  display: flex;
  margin-top: 100px;

  > div {
    width: 50%;
  }
`;

const foodContainer = css`
  display: flex;
  flex-wrap: wrap;
  padding-left: 180px;
`;

const tomatoBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 200, 143) 0%,
    rgb(255, 143, 143) 100%
  );
  border-radius: 20px;
  margin: 10px;
`;

const lettuceBackground = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(202, 236, 172) 0%,
    rgb(131, 208, 197) 100%
  );
  border-radius: 20px;
  margin: 10px;
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

const writingContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-right: 134px;
  padding-left: 65px;

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

// Section 5 - Don't waste food styling Nr. 2
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
        {/* Section Eat Fresh */}
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

        {/* Section Don't waste food */}
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
              If your food has an expiration date, Kiff will keep it under
              control so you can eat it before it's too late.
            </p>
          </div>
        </section>
        {/* Section 3 - Expiration Dates under control */}
        <section>
          <div css={writingContainer}>
            <h2>Expiration dates under control.</h2>
            <p>
              Open or stored for too long? Kiff will track the time since you
              opened, bought, or cooked your food.
            </p>
          </div>
        </section>

        {/* Section 4 - Enjoy your fresh food always */}
        <section>
          <div css={writingContainer}>
            <h2>Enjoy your food always fresh.</h2>
            <p>
              Set the desired shelf life for each food and Kiff will remind you
              to eat it before the time runs out.
            </p>
          </div>
        </section>

        {/* Section 5 - Waste Food Section Nr. 2 */}
        <section css={wasteFoodSection}>
          <div css={writingContainer}>
            <h2>How long has it been open?</h2>
            <p>
              Open or stored for too long? Kiff will track the time since you
              opened, bought, or cooked your food.
            </p>
          </div>
          <div css={foodContainer}>
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
        <section>
          <div css={writingContainer}>
            <h2>Alerts, always in time.</h2>
            <p>
              Enable notifications and Kiff will alert you when your food stops
              being fresh or is about to expire.
            </p>
          </div>
        </section>
        {/* Section 7 - Darkmode */}
        <section></section>
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
