import React, { useEffect } from "react";
import { MicrophoneIcon } from "@heroicons/react/24/outline";
import { PiKeyboardLight } from "react-icons/pi";
// import { KeyboardIcon } from "@heroicons/react/24/solid";

const CubismComponent: React.FC = () => {
  useEffect(() => {
    // Mengimpor skrip untuk Live2D
    const script1 = document.createElement("script");
    script1.src = "/Core/live2dcubismcore.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "/js/azureStt.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Menangani cleanup skrip
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex justify-center items-center kanit-regular"
    >
      <div className="flex justify-center items-center -mt-24">
        <img
          src="/images/fikri_character.png"
          alt="fikri_character"
          className="h-[355px]"
        />
      </div>

      <div className="w-full min-h-80 bg-[#1A0C44] fixed bottom-0 flex flex-col items-center">
        <div className="text-center text-3xl text-white font-medium">
          <div className="mt-[55px]">Halo!</div>
          <div
            id="chat-box"
            className="w-full max-w-xl h-32 overflow-y-auto p-2"
          ></div>
        </div>

        {/* <div className="bg-white w-60 h-12 rounded-3xl flex items-center shadow-inner shadow-[#000000] relative">
          
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#555166]"></div>

         
          <div className="flex-1 text-center">Konten Kiri</div>

        
          <div className="flex-1 text-center">Konten Kanan</div>
        </div> */}
      </div>
    </div>
  );
};

export default CubismComponent;
