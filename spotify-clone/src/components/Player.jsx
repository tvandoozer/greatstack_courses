import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-[55px] rounded-sm" src={track.image} alt="" />
        <div>
          <p className="text-[15px] font-semibold">{track.name}</p>
          <p className="text-[13px] text-[#a5a5a5]">{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-7">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" /> : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />}

          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[13px] text-[#a5a5a5]">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[405px] bg-[#5f5f5f] rounded-full cursor-pointer">
            <div ref={seekBar} className="h-[4px] border-none w-0 bg-white hover:bg-green-500 rounded-full " />
          </div>
          <p className="text-[13px] text-[#a5a5a5]">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
