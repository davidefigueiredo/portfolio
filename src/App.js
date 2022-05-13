import HeroImageSequencePC from "./Components/indexPC";
import HeroImageSequenceMobile from "./Components/indexMobile";
import Timeline from "./Components/timeline";
import Footer from "./Components/footer";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import Fade from "react-reveal/Fade";

function App() {
  return (
    <div>
      <BrowserView>
        <HeroImageSequencePC />
      </BrowserView>
      <MobileView>
        <HeroImageSequenceMobile />
      </MobileView>
      <div
        style={{ position: "absolute", left: "50%", top: "35%" }}
        className="animate-fade-in-down"
      >
        <div style={{ position: "relative", left: "-56%" }}>
          <Fade bottom big cascade>
            <p className="mb-3 text-3xl md:text-5xl font-semibold text-white text-center">
              Davide Areias
            </p>
            <p className="text-white text-center text-xl md:text-xl">
              Portfolio
            </p>
          </Fade>
        </div>
      </div>
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
