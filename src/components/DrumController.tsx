import { ChangeEvent, FC } from "react";

interface DrumControllerProps {
  changeSoundGroup: () => void;
  stop: () => void;
  name: string;
  power: boolean;
  volume: number;
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  soundType: "heaterKit" | "smoothPianoKit";
}

const DrumController: FC<DrumControllerProps> = ({
  stop,
  name,
  power,
  volume,
  handleVolumeChange,
  changeSoundGroup,
  soundType,
}) => {
  return (
    <div id="controls">
      <fieldset>
        <label htmlFor="power">Power</label>
        <input type="checkbox" id="power" checked={power} onClick={stop} />
      </fieldset>
      <fieldset>
        <label id="volume" htmlFor="slider">
          {Math.round(volume * 100)}
        </label>
        <input
          id="slider"
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={handleVolumeChange}
        />  
      </fieldset>
      <fieldset>
        <label htmlFor="change" id="display">{name}</label>
        <input
          type="checkbox"
          id="change"
          checked={soundType == "heaterKit"}
          onClick={changeSoundGroup}
        />
      </fieldset>
    </div>
  );
};

export default DrumController;
