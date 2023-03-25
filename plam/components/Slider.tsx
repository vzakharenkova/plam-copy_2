import Image from 'next/image';

import { KeenSliderOptions, KeenSliderHooks, KeenSliderInstance } from 'keen-slider';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import styles from '@/styles/pages/SingleProjectPage.module.scss';

interface Props {
  imgs: string[];
  sliderOptions: KeenSliderOptions<object, object, KeenSliderHooks>;
}

function Slider({ imgs, sliderOptions }: Props) {
  const [, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const animation = { duration: 500, easing: (t: number) => t };

  const currentSliderOptions: KeenSliderOptions<unknown, unknown> = {
    ...sliderOptions,
    defaultAnimation: animation,

    slideChanged(slider: KeenSliderInstance<object, object, KeenSliderHooks>) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider(currentSliderOptions);

  return (
    <>
      {loaded && instanceRef.current && (
        <button
          className={`${styles.arrow} ${styles.arrow_left}`}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();
            instanceRef.current?.prev();
          }}
        />
      )}
      <div ref={sliderRef} className="keen-slider">
        {imgs.map((url, i) => (
          <div className={`${styles.carousel_item_wrapper} keen-slider__slide`} key={i}>
            <Image
              width="0"
              height="0"
              sizes="initial"
              src={url}
              className={styles.carousel_item}
              alt={'test image'}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <button
          className={`${styles.arrow} ${styles.arrow_right}`}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();
            instanceRef.current?.next();
          }}
        />
      )}
    </>
  );
}

export default Slider;
