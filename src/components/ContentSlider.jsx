import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import styles from "../sass/components/ContentSlider.module.scss";

function ContentSlider({ contentArr }) {
  const [curSlide, setCurSlide] = useState(0);

  function handlePrevSlide() {
    if (curSlide === 0) return setCurSlide(contentArr.length - 1);
    setCurSlide((curSlide) => curSlide - 1);
  }

  function handleNextSlide() {
    if (curSlide === contentArr.length - 1) return setCurSlide(0);
    setCurSlide((curSlide) => curSlide + 1);
  }

  return <div className={styles.slider}></div>;
}

export default ContentSlider;
