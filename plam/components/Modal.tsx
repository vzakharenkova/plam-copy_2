import { KeenSliderOptions } from 'keen-slider';
import React from 'react';

import styles from '@/styles/components/Modal.module.scss';

import Slider from './Slider';

interface Props {
  show: boolean;
  images: string[];
  selectedImg: number;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Modal({ show, images, selectedImg, onClose }: Props) {
  const sliderOptions: KeenSliderOptions<unknown, unknown> = {
    initial: selectedImg,
    renderMode: 'performance',
    loop: true,

    slides: {
      origin: 'center',
      perView: 1,
      spacing: 8,
    },
  };

  if (!show) {
    return null;
  }
  return (
    <div className={styles.modal} onClick={(e) => onClose(e)}>
      <div className={styles.modal__content_wrapper}>
        <Slider imgs={images} sliderOptions={sliderOptions} />
      </div>
    </div>
  );
}

export default Modal;
