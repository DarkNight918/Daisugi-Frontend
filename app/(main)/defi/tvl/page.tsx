"use client"
import React, { useState, FC } from "react";
import Chains from "@/components/DeFi/Chains";
import Protocols from "@/components/DeFi/Protocols";

const DeFiTVL: FC = () => {
  const [category, setCategory] = useState<number>(0);

  return (
    <>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">TVL Data</span>
          <div className="flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
              }`}
              onClick={() => setCategory(0)}
            >
              Chains
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 1 && "!bg-button-hover"
              }`}
              onClick={() => setCategory(1)}
            >
              Protocols
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <Chains />}
          {category === 1 && <Protocols />}
        </div>
      </div>
    </>
  );
};

export default DeFiTVL;
