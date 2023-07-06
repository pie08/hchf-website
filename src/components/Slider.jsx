import { useState } from "react";
import styles from "../sass/components/Slider.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Slider({
  contentArr,
  sliderType = "image",
  height = "50rem",
}) {
  const [curSlide, setCurSlide] = useState(0);

  function handlePrevSlide() {
    if (curSlide === 0) return setCurSlide(contentArr.length - 1);
    setCurSlide((curSlide) => curSlide - 1);
  }

  function handleNextSlide() {
    if (curSlide === contentArr.length - 1) return setCurSlide(0);
    setCurSlide((curSlide) => curSlide + 1);
  }

  return (
    <div className={styles.slider} style={{ height }}>
      {contentArr.map((asset, i) => {
        const style = {
          transform: `translateX(${100 * (i - curSlide)}%)`,
        };

        if (sliderType === "image")
          return <SliderImage url={asset} key={asset} style={style} />;

        if (sliderType === "content")
          return <SliderContent content={asset} style={style} />;
      })}

      <button className={styles.slider__btn} onClick={handlePrevSlide}>
        {/* <svg className={`rotate-90-clock ${styles["slider__icon"]}`}>
          <use href="/assets/icons/sprite.svg#icon-chevron-thin-down" />
        </svg> */}
        <ChevronLeftIcon className={styles["slider__icon"]} />
      </button>
      <button className={styles.slider__btn} onClick={handleNextSlide}>
        <ChevronRightIcon className={styles["slider__icon"]} />
      </button>
    </div>
  );
}

function SliderImage({ url, style }) {
  return (
    <div className={styles.slider__slide} style={style}>
      <img
        src={url}
        alt="Person doing workout"
        className={styles.slider__image}
      />
    </div>
  );
}

function SliderContent({ content, style }) {
  return (
    <div className={styles.slider__slide} style={style}>
      {content}
    </div>
  );
}
