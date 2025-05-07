import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../constants";

type Props = {
  scanned: string[];
};

export const HistoryScanned = () => {
  const { scanned: contextScanned } = useOutletContext<Props>();
  const [scanned, setScanned] = useState<string[]>([]);

  useEffect(() => {
    setScanned(contextScanned);
  }, [contextScanned]);

  const handleClear = () => {
    localStorage.removeItem(SCAN_DATA);
    setScanned([]);
  };

  return (
    <div>
      <nav className="px-[8px] max-h-[400px] overflow-y-scroll">
        <ul className="flex flex-col gap-[30px]">
          {scanned.length === 0 ? (
            <li className="text-center">No data</li>
          ) : (
            scanned.map((item, index) => (
              <li className="break-words" key={index}>
                <div className="flex items-start gap-[10px] mb-[5px] justify-center">
                  <QRCodeSVG size={90} value={item} />
                </div>
                <div className="justify-center text-center">
                  <p className="break-words text-normal">
                    {index + 1 + "."} {item}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </nav>

      {scanned.length > 0 && (
        <button className="button-normal mt-2 w-full" onClick={handleClear}>
          Clear all
        </button>
      )}
    </div>
  );
};
