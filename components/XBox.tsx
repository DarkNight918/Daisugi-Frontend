"use client"

import { FC } from "react";
import { Audio } from  'react-loader-spinner'

type XBoxProps = {
  isBackground?: boolean;
  imgURL?: string;
  gap?: boolean;
  header: string;
  isLoading?: boolean;
  center?: boolean;
  children: React.ReactNode;
}

const XBox: FC<XBoxProps> = ({ isBackground, imgURL, gap, header, isLoading, center, children }) => {
  return (
    <div
      className={`h-[350px] md:h-[400px] ${
        isBackground && "bg-gradient-card1"
      } ${center && "flex justify-center items-center"} border-2 border-[#323232] text-white text-lg lg:text-2xl rounded-[30px] p-5 transition hover:border-gray-500/100 bg-zoom-hover flex flex-col relative`}
      style={{
        backgroundImage: imgURL && `url(${imgURL})`
      }}
    > 
      <div className={`absolute inset-0 flex items-center justify-center font-semibold z-10 ${isLoading ? "opacity-20" : "opacity-100"}`}>
        <span className="font-semibold px-5 py-2 bg-gray-800 rounded-full">
          {header}
        </span>
      </div>
      <div className={`${isLoading ? "opacity-20" : "opacity-100"} flex flex-col ${gap && "gap-3"}`}>
        {children}
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Audio
            height = "80"
            width = "80"
            color = 'green'
            ariaLabel = 'three-dots-loading'
          />
        </div>
      )}
    </div>
  );
};

export default XBox;
