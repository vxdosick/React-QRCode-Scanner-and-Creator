import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { GENERATE_DATA, SCAN_DATA } from "../constants";

export const History = () => {
  const [scanned, setScanned] = useState<string[]>([]);
  const [generated, setGenerated] = useState<string[]>([]);

  useEffect(() => {
    const storageScanData = localStorage.getItem(SCAN_DATA);
    const scanData: string[] = storageScanData
      ? JSON.parse(storageScanData)
      : [];

    const storageGenerateData = localStorage.getItem(GENERATE_DATA);
    const generateData: string[] = storageGenerateData
      ? JSON.parse(storageGenerateData)
      : [];

    setScanned(scanData);
    setGenerated(generateData);
  }, []);

  return (
    <div className="container border border-pink-500 rounded-sm px-[15px] py-[10px]">
      <h1 className="text-center text-title">History</h1>
      <nav className="mb-[20px]">
        <ul className="flex justify-between">
          <li>
            <Link
              className="button-normal px-[15px] py-[2px]"
              to={"/react-ts-tailwind-qrcode/history/generated"}
            >
              Generated
            </Link>
          </li>
          <li>
            <Link
              className="button-normal px-[15px] py-[2px]"
              to={"/react-ts-tailwind-qrcode/history/scanned"}
            >
              Scanned
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ scanned, generated }} />
    </div>
  );
};
