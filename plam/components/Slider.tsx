import Image from 'next/image';

import { KeenSliderOptions, KeenSliderHooks, KeenSliderInstance } from 'keen-slider';
import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import styles from '@/styles/pages/SingleProjectPage.module.scss';

interface Props {
  imgs: string[];
  withModal: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  sliderOptions: KeenSliderOptions<{}, {}, KeenSliderHooks>;
}

function Slider({ imgs, sliderOptions }: Props) {
  const [, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const currentSliderOptions = {
    ...sliderOptions,
    // eslint-disable-next-line @typescript-eslint/ban-types
    slideChanged(slider: KeenSliderInstance<{}, {}, KeenSliderHooks>) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider(currentSliderOptions);

  useEffect(() =>
    instanceRef.current?.update({
      ...currentSliderOptions,
    })
  );

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
          <Image
            width="0"
            height="0"
            sizes="100%"
            src={url}
            className={`keen-slider__slide ${styles.carousel_item}`}
            style={{ maxWidth: 'fit-content', minWidth: 'fit-content' }}
            alt={'test image'}
            key={i}
          />
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
