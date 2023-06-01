"use client"
import React, { FC } from "react";
import { VideosData } from "./data";

const DeFi: FC = () => {
  return (
    <>
      <div
        className='px-10 py-5 text-[42px] text-white'
      >
        Videos
      </div>
      <div className='flex justify-between mt-5 px-5 text-white'>
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mt-8 w-[80%] md:w-full  mx-auto'>
        {
          VideosData.map((item, index) => (
            <div key={index} className='flex flex-col gap-4'>
               <div className="relative">
                <img src={item.image} alt="Blockchain News" className="w-full" />
                <div className="absolute bottom-4 right-4">
                  <i className="fa fa-play text-white text-xl px-4 py-[10px] bg-black opacity-[0.7] rounded-full"></i>
                </div>
              </div>
              <p className='text-[18px] text-white'>{item.content}</p>
              <div className='flex gap-4 text-[11px] text-white opacity-[0.5]'>
                <span>{item.writer}</span>
                <span>{item.dateAgo} Days Ago</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default DeFi;
