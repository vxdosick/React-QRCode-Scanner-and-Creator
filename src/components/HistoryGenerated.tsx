import { useOutletContext } from "react-router-dom";

import { QRCodeSVG } from "qrcode.react";

type Props = {
  generated: string[];
};

export const HistoryGenerated = () => {
  const { generated } = useOutletContext<Props>();

  return (
    <nav className="px-[8px] max-h-[400px] overflow-y-scroll">
      <ul className="flex flex-col gap-[30px]">
        {generated.length === 0 ? (
          <li className="text-center">No data</li>
        ) : (
          generated?.map((item, index) => (
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
  );
};
