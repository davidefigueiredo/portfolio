import React from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import CirclesAfterScreen from "./circlesAfterScreen";
import { useCallback } from "react";
import "./styles.css";

export const HeroImageSequencePC = () => {
  const [frame, setFrame] = React.useState(0);
  const { scrollYProgress } = useViewportScroll();
  const frames = useTransform(scrollYProgress, [0, 0.4], [0, 23]);

  const handleScroll = useCallback(() => {
    setFrame(Math.round(frames.get()));
  }, [frames]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const preloadImages = () => {
    let images = [];
    for (var i = 5; i < 26; i++) {
      images.push(
        <img
          key={i}
          src={`/frames/phone/00${i < 10 ? "0" + i : i}.jpg`}
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
        <img
          alt=""
          src={`/frames/phone/00${frame < 10 ? "0" + frame : frame}.jpg`}
        />
      ) : (
        <CirclesAfterScreen />
      )}
    </motion.div>
  );
};

export default HeroImageSequencePC;
