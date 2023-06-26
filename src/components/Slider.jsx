import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import styles from "../sass/components/Slider.module.scss";

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
        <CaretLeft color="#333" size="2.4rem" weight="bold" />
      </button>
      <button className={styles.slider__btn} onClick={handleNextSlide}>
        <CaretRight color="#333" size="2.4rem" weight="bold" />
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
