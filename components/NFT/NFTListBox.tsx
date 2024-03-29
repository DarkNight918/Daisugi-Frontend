"use client"
import React, { FC } from "react";
import {
  coinPriceFormat,
  normalPercentFormat,
} from "@/utils/format";
import Image from "next/image";
import { chainImages } from '@/data/chain'

type NFTListProps = {
  imgURL?: string;
  name: string;
  networks?: string[];
  price: number | string;
  changed: number;
}

const NFTListBox: FC<NFTListProps> = ({ imgURL, name, networks, price, changed }) => {
  return (
    <div className="flex justify-between mt-2 items-center">
      <div className="flex gap-3 items-center">
        {imgURL && (
          <Image src={imgURL} alt="Coin Gainers" className="rounded-full" width={40} height={40} />
        )}
        <div className="flex flex-col">
          <p className="text-[14px] text-white">{name}</p>
          <div className="flex gap-2 text-[12px] text-gray-300">
            {
              networks &&
              (networks.length < 4
                ? networks.map((item, index) => (
                    <div key={index} className="flex gap-1 items-center">
                      <Image
                        src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${chainImages[item.toLowerCase()]}`}
                        alt="Network"
                        width={20}
                        height={20}
                      />
                      <span>{item}</span>
                    </div>
                  ))
                : networks.map((item, index) => (
                    <Image
                      key={index}
                      src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${chainImages[item.toLowerCase()]}`}
                      alt="Network"
                      width={20}
                      height={20}
                    />
              )))
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-[14px] text-right font-semibold">
          {typeof price === "number" ? coinPriceFormat(price) : price}
        </p>
        {changed != null && (
          <div className="flex items-center gap-2 justify-end">
            {changed > 0 ? (
              <>
                <i className="fa fa-sort-up mt-2 text-[18px] text-[#58FF1E]"></i>
                <p className="text-white text-[12px]">
                  {normalPercentFormat(changed)}
                </p>
              </>
            ) : (
              <>
                <i className="fa fa-sort-down -mt-2 text-[18px] text-[#FF2B1E]"></i>
                <p className="text-white text-[12px]">
                  {normalPercentFormat(Math.abs(changed))}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTListBox;
