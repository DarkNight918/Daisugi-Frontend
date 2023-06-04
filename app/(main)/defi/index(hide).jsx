import React from "react";
import Layout from "@/components/Layout";
import LineChart from "@/components/Charts/LineChart";
import DaisugiTable from "@/components/DaisugiTable";
import ProgressBar from "@/components/ProgressBar";

const labels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1,
  2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7,
  8, 9,
];

const lineChartData1 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset",
      data: labels.map(() => Math.floor(Math.random() * 701) + 300),
      borderWidth: 1,
      pointRadius: 0,
      borderColor: "#FF3C3C",
      backgroundColor: "#FF3C3C22",
    },
  ],
};

const lineChartData2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset",
      data: labels.map(() => Math.floor(Math.random() * 701) + 300),
      borderWidth: 1,
      pointRadius: 0,
      borderColor: "#28FF98",
      backgroundColor: "#28FF9822",
    },
  ],
};

const filter = {
  menu1: [
    {
      name: "Spot",
      selected: true,
    },
    {
      name: "Derivatives",
      selected: false,
    },
    {
      name: "DEX",
      selected: false,
    },
    {
      name: "Lending",
      selected: false,
    },
  ],
  menu2: [
    {
      name: "1D",
      selected: true,
    },
    {
      name: "7D",
      selected: false,
    },
    {
      name: "1M",
      selected: false,
    },
    {
      name: "3M",
      selected: false,
    },
    {
      name: "1Y",
      selected: false,
    },
  ],
};

const tableData = {
  columns: [
    {
      header: "Name",
      name: "name",
    },
    {
      header: "Price",
      name: "price",
    },
    {
      header: "1h%",
      name: "1h",
    },
    {
      header: "24h%",
      name: "24h",
    },
    {
      header: "7d%",
      name: "7d",
    },
    {
      header: "Market Cap",
      name: "marketcap",
    },
    {
      header: "Volumn(24h)",
      name: "volumn",
    },
    {
      header: "Circulating Supply",
      name: "circulating",
    },
    {
      header: "Last 7 Days",
      name: "last",
    },
  ],
  rows: [
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'0-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'0-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'0-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'0-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'0-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'1-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'1-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'1-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'1-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'1-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'2-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'2-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'2-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'2-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'2-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'3-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'3-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'3-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'3-4'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'3-5'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'4-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'4-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'4-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'4-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'4-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'5-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'5-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'5-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'5-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'5-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'6-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'6-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'6-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'6-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'6-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'7-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'7-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'7-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'7-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'7-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'8-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'8-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'8-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'8-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'8-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
    [
      "Avalance AVAX",
      "$58.3k",
      <label key={'9-0'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'9-1'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      <label key={'9-2'} className="text-red-300">
        <i className="fa fa-sort-down" /> 0.04%
      </label>,
      "$5,656,087,725",
      "$165,585,252",
      <div key={'9-3'}>
        <label className="block text-left text-sm">
          34,025,379,637,657 VVS
        </label>
        <div className="flex">
          <ProgressBar
            options={{
              parentClasses: "bg-stone-300",
              childClasses: "bg-stone-700",
            }}
            percent={50}
          />
          <label className="ml-3 text-[0.6rem]">VVS</label>
        </div>
      </div>,
      <div key={'9-4'} className="max-w-[250px] h-[1rem] m-auto">
        <LineChart data={lineChartData1} />
      </div>,
    ],
  ],
};

const DeFi = () => {
  return (
    <>
      {/* Line Chart Cards */}
      <div className="flex w-full">
        <div className="p-5 w-1/2">
          <div className="rounded-lg bg-gradient-card">
            <div className="flex justify-between px-8 py-8">
              <h6 className="text-white text-lg">Market Capital</h6>
              <div className="">
                <label className="text-white text-sm">$5,656,087,725</label>
                <br />
                <label htmlFor="" className="text-[#FF8080] text-xs">
                  <i className="fa fa-sort-down" /> 0.04%
                </label>
              </div>
            </div>
            <div className="relative w-full pt-[25%] mt-6">
              <div className="absolute left-0 top-0 w-full h-full">
                <LineChart data={lineChartData1} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 w-1/2">
          <div className="rounded-lg bg-gradient-card">
            <div className="flex justify-between px-8 py-8">
              <h6 className="text-white text-lg">Trading Volume</h6>
              <div>
                <label className="text-white text-sm">$5,656,087,725</label>
                <br />
                <label htmlFor="" className="text-[#80FF9C] text-xs">
                  <i className="fa fa-sort-up" /> 12.8%
                </label>
              </div>
            </div>
            <div className="relative w-full pt-[25%] mt-6">
              <div className="absolute left-0 top-0 w-full h-full">
                <LineChart data={lineChartData2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
      <div>
        <h3 className="p-5 text-white text-xl">DeFi</h3>
        <div className="flex w-full justify-between">
          <div className="">
            <div className="flex w-max py-2 bg-transparent border rounded-md border-stone-700 text-sm">
              {filter.menu1.map((item, key) => {
                return (
                  <button
                    key={key}
                    type="button"
                    className={`mx-2 px-2 py-1 rounded ${
                      item.selected
                        ? "bg-[#323232] text-white"
                        : "text-stone-500"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="flex w-max mt-2 py-2 bg-transparent border rounded-md border-stone-700 text-sm">
              {filter.menu2.map((item, key) => {
                return (
                  <button
                    key={key}
                    type="button"
                    className={`mx-2 px-2 py-1 rounded ${
                      item.selected
                        ? "bg-[#323232] text-white"
                        : "text-stone-500"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex w-max h-max text-lg">
            <button
              type="button"
              className="mr-8 px-8 py-3 rounded bg-gradient-btn text-white"
            >
              <i className="mr-3 fa fa-star" />
              Gainers
            </button>
            <button
              type="button"
              className="mr-8 px-8 py-3 rounded bg-gradient-btn text-white"
            >
              <i className="mr-3 fa fa-arrow-down" />
              Losers
            </button>
            <button
              type="button"
              className="px-8 py-3 rounded bg-gradient-btn text-white"
            >
              <i className="mr-3 fa fa-table" />
              Table View
            </button>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="mt-8 overflow-x-auto">
        <DaisugiTable tableData={tableData} />
      </div>
    </>
  );
};

export default DeFi;
