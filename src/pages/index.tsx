// import React from "react";
// import CubismComponent from "@/components/CubismComponent";

// const Home: React.FC = () => {
//   return (
//     <div>
//       <CubismComponent />
//     </div>
//   );
// };

// export default Home;
// pages/index.tsx
import React from "react";
// import AzureSttComponent from "../src/components/AzureSttComponent";
// import CubismComponent from "../src/components/CubismComponent";
import CubismComponent from "@/components/CubismComponent";
import AzureSttComponent from "@/components/AzureSttComponent";

const Home: React.FC = () => {
  return (
    <div
      className="h-screen kanit-regular"
      style={{
        backgroundImage: `url(/images/background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <CubismComponent />
        <AzureSttComponent />

        {/* <div className="flex justify-center items-center -mt-24">
          <img
            src="/images/fikri_character.png"
            alt="fikri_character"
            className="h-[355px]"
          />
        </div> */}
      </div>
      {/* <div className="w-full min-h-80 bg-[#1A0C44] fixed bottom-0 flex flex-col items-center">
        <div className="text-center text-3xl text-white font-medium">
          <div id="" className="mt-[55px]">
            Halo!
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
