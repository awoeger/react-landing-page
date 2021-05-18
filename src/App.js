/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import carrot from './images/carrot.svg';
import four from './images/four.svg';
import lettuce from './images/lettuce.svg';
import logo from './images/logo.svg';
import one from './images/one.svg';
import phoneHeader from './images/phoneHeader.png';
import pineapple from './images/pineapple.svg';
import tomato from './images/tomato.svg';
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
    width: 60%;
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
              Kiff tracks your food's state and orders it by priority, so you
              will know what to eat at a glance.
            </p>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
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
