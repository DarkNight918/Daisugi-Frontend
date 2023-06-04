import React, { useState, useEffect, useCallback, ChangeEvent, FC } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DaisugiTable from "../DaisugiTable";
import { API_BASE } from "@/constants/constants";
import { marketCapFormat } from "@/utils/format";

const filter = {
  showCount: [25, 50, 100],
};

let columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Bridge",
    name: "displayName",
    align: "left",
  },
  {
    header: "VolumePrevDay",
    name: "volumePrevDay",
    align: "left",
  },
  {
    header: "LastHourlyVolume",
    name: "lastHourlyVolume",
    align: "left",
  },
  {
    header: "CurrentDayVolume",
    name: "currentDayVolume",
    align: "left",
  },
  {
    header: "LastDailyVolume",
    name: "lastDailyVolume",
    align: "left",
  },
  {
    header: "WeeklyVolume",
    name: "weeklyVolume",
    align: "left",
  },
];

const Bridges: FC = () => {
  const [showCountOption, setShowCountOption] = useState<number>(filter.showCount[0]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState({
    columns,
    rows: [],
    totalPages: 0,
  });

  const drawTable = useCallback(
    (data: any) => {
      let newData: any = {
        columns,
        rows: [],
        totalPages: 0,
      };
      if (data.data.length) {
        data.data.forEach((row: any, key: number) => {
          newData.rows.push([
            showCountOption * currentPage + (key + 1),
            row.displayName,
            marketCapFormat(row.volumePrevDay),
            marketCapFormat(row.lastHourlyVolume),
            marketCapFormat(row.currentDayVolume),
            marketCapFormat(row.lastDailyVolume),
            marketCapFormat(row.weeklyVolume),
          ]);
        });
      }
      newData.totalPages = data.totalPages;
      setTableData(newData);
    },
    [showCountOption, currentPage]
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${API_BASE}/defi/getbridge?page=${
        currentPage + 1
      }&pageSize=${showCountOption}`
    );
    drawTable(response.data);
    setIsLoading(false);
  }, [showCountOption, currentPage, drawTable]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelectOption = (event: ChangeEvent<HTMLSelectElement>, selectType: string) => {
    const { value } = event.target as any;
    switch (selectType) {
      case "showCount":
        setShowCountOption(value);
        break;
      default:
        break;
    }
  };

const handlePageClick = ({ selected: selectedPage }: { selected: number}) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-end mr-5">
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
      <div className="mt-5">
        <DaisugiTable tableData={tableData} isLoading={isLoading} />
        <ReactPaginate
          pageCount={tableData?.totalPages}
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
    </div>
  );
};

export default Bridges;
