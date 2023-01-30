import { FC } from "react"
import Key from "./Key";

interface KeyboardProps {
  sounds: Sound[];
  play: (key: string, sound: string) => void;
  power: boolean;
}

const Keyboard: FC<KeyboardProps> = ({ sounds, play, power }) => {
  return (
    <div id="pads">
      {power 
        ? sounds.map((sound) => <Key sound={sound} play={play} />)
        : sounds.map((sound) => <Key sound={{...sound, url: "#" }} play={play} />)        
      }
    </div>
  );
};

export default Keyboard;