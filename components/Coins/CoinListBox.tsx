"use client"
import { FC } from "react";
import Image from "next/image";
import {
  percentFormat,
  coinPriceFormat,
  normalPercentFormat,
} from "@/utils/format";

type CoinListBoxProps = {
  imgURL?: string;
  name: string;
  symbol?: string;
  price: string | number;
  changed?: number;
  type?: string;
}

const CoinListBox: FC<CoinListBoxProps> = ({ imgURL, name, symbol, price, changed, type }) => {
  return (
    <div className="flex justify-between mt-2 items-center">
      <div className="flex gap-3 items-center">
        {imgURL && (
          <Image src={imgURL} alt="Coin Gainers" className="rounded-full" width={40} height={40} />
        )}
        <div className="flex flex-col">
          <p className="text-[14px] text-white">{name}</p>
          <p className="text-[12px] text-white opacity-[0.5]">{symbol}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-[14px] text-right font-semibold">
          {
            typeof price === "number" ?
              coinPriceFormat(price) :
              price
          }
        </p>
        {changed != null && (
          <div className="flex items-center gap-2 justify-end">
            {type === "Livecoin" ? (
              changed > 1 ? (
                <>
                  <i className="fa fa-sort-up mt-2 text-[18px] text-[#58FF1E]"></i>
                  <p className="text-white text-[12px]">
                    {percentFormat(changed)}
                  </p>
                </>
              ) : (
                <>
                  <i className="fa fa-sort-down -mt-2 text-[18px] text-[#FF2B1E]"></i>
                  <p className="text-white text-[12px]">
                    {percentFormat(changed)}
                  </p>
                </>
              )
            ) : changed > 0 ? (
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

export default CoinListBox;
