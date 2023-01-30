import { FC, useEffect } from "react"

interface KeyProps {
  sound: Sound;
  play: (key: string, sound: string) => void;
}

const Key: FC<KeyProps> = ({ play, sound: { id, key, url, keyCode } }) => {
  const handleKeydown = (e: KeyboardEvent) => {
    if(keyCode === e.keyCode) {
      const audio = document.getElementById(key) as HTMLAudioElement;
      play(key, id);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => removeEventListener("keydown", handleKeydown);
  }, [])
  
  return (
    <button 
      value="test" 
      id={String(keyCode)} 
      className="drum-pad" 
      onClick={() => play(key, id)
    }>
      <audio className="clip" src={url} id={key} />
      {key}
    </button>
  );
};

export default Key;