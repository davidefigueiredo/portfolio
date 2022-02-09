import React from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import CirclesAfterScreen from "./circlesAfterScreen";
import "./styles.css";

export const HeroImageSequence = () => {
  const [frame, setFrame] = React.useState(0);
  const { scrollYProgress } = useViewportScroll();
  const frames = useTransform(scrollYProgress, [0, 0.4], [0, 26]);

  const handleScroll = () => {
    setFrame(Math.round(frames.get()));
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const preloadImages = () => {
    let images = [];
    for (var i = 0; i < 27; i++) {
      images.push(
        <img
          key={i}
          src={`/frames/00${i < 10 ? "0" + i : i}.png`}
          alt=""
          style={{ visibility: "hidden" }}
        />
      );
    }
    return images;
  };

  return (
    <motion.div className="App">
      {preloadImages()}
      {scrollYProgress.current < 0.38 ? (
        <img alt="" src={`/frames/00${frame < 10 ? "0" + frame : frame}.png`} />
      ) : (
        <CirclesAfterScreen />
      )}
    </motion.div>
  );
};

export default HeroImageSequence;
