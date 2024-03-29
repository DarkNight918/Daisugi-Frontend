"use client"
import React, { useEffect, useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SmallChartCard from "@/components/Cards/SmallChartCard";
import CoinListBox from "@/components/Coins/CoinListBox";
import ChartCard from "@/components/Cards/ChartCard";
import XBox from "@/components/XBox";
import { getTopCoins } from "@/services/coin.service";
import { coinPriceFormat, percentFormat } from "@/utils/format";
import { SocialInsights, CoinBreakDown } from "./data";

type CoinType = {
  imgURL: string;
  name: string;
  symbol: string;
  price: number;
  hourlyChanged: number;
}

const Coins: FC = () => {
  const [topCoins, setTopCoins] = useState<CoinType[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getUpdate = async () => {
    setIsLoading(true)
    const topCoinsData = await getTopCoins();
    setTopCoins(topCoinsData);
    setIsLoading(false)
  };

  useEffect(() => {
    getUpdate();
  }, []);

  return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <Link href="/coins/rank">
          <XBox isBackground={true} header="Coins" isLoading={isLoading}>
            {topCoins &&
              topCoins.map((item, index) => (
                <CoinListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  symbol={item.symbol}
                  price={item.price}
                  changed={item.hourlyChanged}
                  type="Livecoin"
                />
              ))}
          </XBox>
        </Link>
        <Link href="/coins/liquidation">
          <XBox gap={true} header="Liquidation">
            <SmallChartCard
              header="1H Rekt"
              height={115}
              value="$1.84M"
              change={-0.03}
              chartData={[5, 3, 5, 6, 2, 4, 6, 2, 5, 6, 8, 9, 8, 7.5]}
            />
            <SmallChartCard
              header="12H Rekt"
              height={115}
              value="$23.50M"
              change={5.3}
              chartData={[4, 6, 5, 7, 6, 6, 4, 4, 5, 7, 4, 5, 7, 9]}
            />
            <SmallChartCard
              header="24H Rekt"
              height={115}
              value="$132.58M"
              change={-3.3}
              chartData={[6, 7, 6, 7, 4, 5, 8, 7, 4, 5, 7, 8, 6, 5]}
            />
          </XBox>
        </Link>
        <Link href="/coins/charts">
          <XBox isBackground={true} header="Charts">
            <ChartCard
              height={350}
              name="Bitcoin"
              symbol="BTC"
              imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png"
              value={topCoins && coinPriceFormat(topCoins[0].price)}
              change={topCoins && percentFormat(topCoins[0].hourlyChanged)}
              charData={[7, 5, 6, 4, 4, 7, 6, 5, 5, 5, 4, 3, 2, 2]}
            />
          </XBox>
        </Link>

        <Link href="/coins/trading">
          <XBox isBackground={true} header="Social Insights">
            {
              SocialInsights.map((item, index) => (
                <CoinListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  symbol={item.symbol}
                  price={item.value}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
        <Link href="/coins/exchange">
          <XBox header="Exchange">
            <Image src="/img/CoinImages/Exchange.png" alt="Exchange" className="m-auto" width={350} height={100}/>
          </XBox>
        </Link>
        <Link href="/coins/breakdown">
          <XBox isBackground={true} header="Coin Breakdown">
            {CoinBreakDown.map((item, index) => (
              <CoinListBox
                key={index}
                name={item.name}
                price={item.volume}
                changed={item.changed}
              />
            ))}
          </XBox>
        </Link>
      </div>
  );
};

export default Coins;
