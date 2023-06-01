"use client"
import React, { FC } from "react";
import LearningCard from "@/components/Cards/LearningCard";
import { LearnData } from "./data";

const Learning: FC = () => {

  return (
    <>
      <div className="flex gap-10 flex-wrap justify-center">
        {
          LearnData.map((item, index) => {
            return (
              <LearningCard
                key={index}
                status={item.status}
                imgURL={item.imgURL}
                header={item.header}
                content={item.content}
              />
            )})
        }
      </div>
    </>
  );
};

export default Learning;
