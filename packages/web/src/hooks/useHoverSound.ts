import useSound from 'use-sound';

export const useHoverSound = () => {
  const [play] = useSound('./hover-sound.wav', {
    volume: 0.7,
    playbackRate: 1,
  });

  const playHoverSound = () => {
    play();
  };

  return { playHoverSound };
};
