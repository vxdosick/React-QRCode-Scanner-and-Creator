import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { SCAN_DATA } from "../constants";

export const QRCodeScanner = () => {
  const [scanningResult, setScanningResult] = useState("");

  const scannerSettings = {
    audio: false,
    finder: false,
  };

  const scanHandler = async (detectedCodes: IDetectedBarcode[]) => {
    if (!detectedCodes.length) return;

    setScanningResult(detectedCodes[0].rawValue);

    const storageScanData = localStorage.getItem(SCAN_DATA);
    const scanData: string[] = storageScanData ? JSON.parse(storageScanData) : [];

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...scanData, detectedCodes[0].rawValue])
    );

    console.log(scanData);
  };

  //   const handleCamera = async () => {
  //     await navigator.mediaDevices.getUserMedia({ video: true });
  //   };

  return (
    <div className="container border border-pink-500 rounded-sm px-[15px] py-[10px]">
      <h1 className="text-center text-title">Scan QR Code</h1>
      <p className="text-small mb-[5px] text-center">
        Please allow access to your camcorder
      </p>
      {/* <button
        type="button"
        onClick={handleCamera}
        className="button-normal w-full mb-[20px]"
      >
        Allow access to the camera
      </button> */}
      <div className="mb-[10px]">
        <Scanner
          components={scannerSettings}
          styles={{ container: { width: "230px" } }}
          onScan={scanHandler}
        />
      </div>
      <div>
        <h2 className="text-center text-title">Scanning result</h2>
        {scanningResult.length <= 0 ? (
          <p className="text-small text-center">Point the camera at the QR code</p>
        ) : (
          <span>
            Result:{" "}
            <a className="break-words" target="_blank" href={scanningResult}>
              {scanningResult}
            </a>
          </span>
        )}
      </div>
    </div>
  );
};
