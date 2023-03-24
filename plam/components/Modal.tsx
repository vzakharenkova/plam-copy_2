import { KeenSliderOptions } from 'keen-slider';
import React from 'react';

import Slider from './Slider';

interface Props {
  show: boolean;
  images: string[];
  selectedImg: number;
  // eslint-disable-next-line no-unused-vars
  onClose: (_e: React.MouseEvent<HTMLDivElement>) => void;
}

function Modal({ show, images, selectedImg, onClose }: Props) {
  const sliderOptions: KeenSliderOptions<unknown, unknown> = {
    initial: selectedImg,
    renderMode: 'performance',
    loop: true,

    slides: {
      origin: 'center',
      perView: 'auto',
      spacing: 8,
    },
  };

  if (!show) {
    return null;
  }
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 200,
        height: '100vh',
        width: '100vw',
        backdropFilter: 'blur(20px)',
        bottom: '0',
        right: '0',
      }}
      onClick={(e) => onClose(e)}
    >
      <div
        style={{
          height: '85vh',
          width: '85vw',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Slider imgs={images} withModal={false} sliderOptions={sliderOptions} />
      </div>
    </div>
  );
}

export default Modal;
