import React from 'react';

type media = string;

const useMedia = (media: media) => {
  const [match, setMatch] = React.useState<React.SetStateAction<boolean|null>>(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media); 
      setMatch(matches);
    };

    changeMatch();

    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    }

  }, [media])

  return match;
}

export default useMedia;