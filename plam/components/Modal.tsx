import { KeenSliderOptions, KeenSliderHooks } from 'keen-slider';
import Slider from './Slider';

interface Props {
  show: boolean;
  imgs: string[];
  selectedImg: number;
  // eslint-disable-next-line no-unused-vars
  onClose: (_e: Event) => void;
}

function Modal({ show, imgs, selectedImg, onClose }: Props) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const sliderOptions: KeenSliderOptions<{}, {}, KeenSliderHooks> = {
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
        <Slider imgs={imgs} withModal={false} sliderOptions={sliderOptions} />
      </div>
    </div>
  );
}

export default Modal;
