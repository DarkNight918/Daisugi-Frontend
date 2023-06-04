"use client"

import React, { useState, useEffect, FC, ChangeEvent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DaisugiTable from "@/components/DaisugiTable";
import { API_BASE } from "@/constants/constants";
import { coinPriceFormat, percentFormat } from "@/utils/format";

type FilterItem = {
  header: string;
  name: string;
}

type ColumnItem = {
  header: string;
  name: string;
  align: string;
}

type TableRow = {
  imgURL: string;
  symbol: string;
  name: string;
  price: number;
  marketCap: number;
  hourlyChanged: number;
  weeklyChanged: number;
  monthlyChanged: number;
  yearlyChanged: number;
}
type TableData = {
  columns: ColumnItem[];
  rows: any;
  totalPages: number;
}

const filter = {
  timeChanged: [
    {
      header: "1H",
      name: "hourlyChanged",
    },
    {
      header: "1W",
      name: "weeklyChanged",
    },
    {
      header: "1M",
      name: "monthlyChanged",
    },
    {
      header: "1Y",
      name: "yearlyChanged",
    },
  ] as FilterItem[],
  showCount: [25, 50, 100],
};

const columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Coin",
    name: "coin",
    align: "left",
  },
  {
    header: "Name",
    name: "name",
    align: "center",
  },
  {
    header: "Price",
    name: "price",
    align: "right",
  },
  {
    header: "Market Cap",
    name: "marketcup",
    align: "right",
  },
  {
    header: filter.timeChanged[0].header,
    name: "timeChanged",
    align: "center",
  },
] as ColumnItem[];

const Liquidation: FC = () => {
  const [gainerLoserOption, setGainerLoserOption] = useState<"gainers" | "losers">("gainers");
  const [timeChangedOption, setTimeChangedOption] = useState<number>(0);
  const [showCountOption, setShowCountOption] = useState<number>(filter.showCount[0]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<TableData>({ columns: [], rows: [], totalPages: 0 });

  useEffect(() => {
    const drawTable = (data: { [key: string]: TableRow[], totalPages: any }) => {
      let newData: TableData = {
        columns,
        rows: [],
        totalPages: 0,
      };
      if (data[gainerLoserOption].length) {
        data[gainerLoserOption].map((row: any, key) => {
          newData.rows.push([
            showCountOption * currentPage + (key + 1),
            <div key={key}>
              <img
                src={row.imgURL}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3"
                alt="CoinIcon"
              />
              {row.symbol}
            </div>,
            row.name,
            coinPriceFormat(row.price),
            row.marketCap,
            <div
              key={key}
              className={`flex items-center justify-center text-[#${
                row[filter.timeChanged[timeChangedOption].name] >= 1
                  ? "80FF9C"
                  : "FF8080"
              }]`}
            >
              <i
                className={`text-xl fa fa-sort-${
                  row[filter.timeChanged[timeChangedOption].name] >= 1
                    ? "up"
                    : "down"
                } ${
                  row[filter.timeChanged[timeChangedOption].name] >= 1
                    ? "mt-2"
                    : "-mt-2"
                } mr-2`}
              />
              {percentFormat(row[filter.timeChanged[timeChangedOption].name])}
            </div>,
          ]);
        });
      }
      newData.totalPages = data.totalPages;
      setTableData(newData);
    };
    
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${API_BASE}/coin/${gainerLoserOption}?${
          filter.timeChanged[timeChangedOption].name
        }=true&page=${currentPage + 1}&pageSize=${showCountOption}`
      );
      drawTable(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [gainerLoserOption, timeChangedOption, showCountOption, currentPage]);

  const handleGainLoserOption = (status: "gainers" | "losers") => {
    setGainerLoserOption(status);
  };

  const handleSelectOption = (event: ChangeEvent<HTMLSelectElement>, selectType: string) => {
    const { value } = event.target as any;
    switch (selectType) {
      case "timeChanged":
        setTimeChangedOption(value);
        console.log(filter.timeChanged[value].name);
        const columnIndex = columns.findIndex(
          (item) => item.name === "timeChanged"
        );
        columns[columnIndex].header = filter.timeChanged[value].header;
        break;
      case "showCount":
        setShowCountOption(value);
        break;
      default:
        break;
    }
  };

  const handlePageClick = ({ selected: selectedPage }: { selected: number }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      {/* Filter */}
      <div>
        <h3 className="p-5 text-white text-xl">Liquidation</h3>
        <div className="flex w-full justify-between">
          <div className="flex w-max h-max text-lg">
            <button
              type="button"
              className={`mr-8 px-8 py-3 rounded ${
                gainerLoserOption === "gainers"
                  ? "bg-blue-700"
                  : "bg-gradient-btn"
              } text-white`}
              onClick={() => handleGainLoserOption("gainers")}
            >
              <i className="mr-3 fa fa-star" />
              Gainers
            </button>
            <button
              type="button"
              className={`mr-8 px-8 py-3 rounded ${
                gainerLoserOption === "losers"
                  ? "bg-blue-700"
                  : "bg-gradient-btn"
              } text-white`}
              onClick={() => handleGainLoserOption("losers")}
            >
              <i className="mr-3 fa fa-arrow-down" />
              Losers
            </button>
          </div>
          <div className="">
            <select
              className="px-8 py-3 rounded bg-gradient-btn text-white"
              onChange={(event) => handleSelectOption(event, "timeChanged")}
            >
              {filter.timeChanged.map((item, key) => {
                return (
                  <option key={key} className="bg-[#313131]" value={key}>
                    {item.header}
                  </option>
                );
              })}
            </select>
            <select
              className="ml-5 px-8 py-3 rounded bg-gradient-btn text-white"
              onChange={(event) => handleSelectOption(event, "showCount")}
            >
              {filter.showCount.map((item, key) => {
                return (
                  <option key={key} className="bg-[#313131]" value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="mt-8 overflow-x-auto overflow-y-hidden">
        <DaisugiTable tableData={tableData} isLoading={isLoading} />
        <ReactPaginate
          pageCount={tableData.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-end mt-8 pagination"}
          pageClassName="h-[33px]"
          pageLinkClassName="px-4 py-2 border-2 border-solid border-[#212121] rounded-md bg-[#323232] text-white hover:brightness-125"
          previousLinkClassName="px-4 py-2 border-2 border-solid border-[#212121] rounded-md bg-[#323232] text-white hover:brightness-125"
          nextLinkClassName="px-4 py-2 border-2 border-solid border-[#212121] rounded-md bg-[#323232] text-white hover:brightness-125"
          breakLinkClassName="mx-1 text-white items-center flex"
          activeLinkClassName={"bg-blue-700 active"}
          disabledLinkClassName="brightness-75 hover:brightness-75 hover:cursor-not-allowed"
        />
      </div>
    </>
  );
};

export default Liquidation;
