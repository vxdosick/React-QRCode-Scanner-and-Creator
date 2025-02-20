import { QRCodeSVG } from "qrcode.react";

import { useState } from "react";

import { GENERATE_DATA } from "../constants";

export const QRCodeGenerator = () => {
  const [textValue, setTextValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const errorHandler = (text: string) => {
    setErrorMessage(text);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  const handleCreateQRCode = () => {
    if (!textValue) {
      errorHandler("Please enter a text");
      return;
    }

    const storageGenerateData = localStorage.getItem(GENERATE_DATA);
    const generateData: string[] = storageGenerateData
      ? JSON.parse(storageGenerateData)
      : [];
      
    if (generateData.includes(textValue)) {
      errorHandler("This code already exists, go to history page");
      return;
    }

    setSubmittedText(textValue);
    setTextValue("");


    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...generateData, textValue])
    );

    console.log(generateData);
  };

  return (
    <div className="container border border-pink-500 rounded-sm px-[15px] py-[10px]">
      {showError && (
        <p className="absolute top-[88px] left-[50%] transform -translate-x-1/2 py-[2px] px-[7px] bg-white text-center text-red-500 text-small">
          {errorMessage}
        </p>
      )}
      <h1 className="text-center text-title">Generate QR Code</h1>
      <div className="flex flex-col gap-[10px] mb-[20px]">
        <input
          className="input-normal"
          type="text"
          name="qrcode-name"
          placeholder="Enter QR Code text..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button
          onClick={handleCreateQRCode}
          className="button-normal"
          type="button"
        >
          Create QR Code
        </button>
      </div>
      <div className="mb-[20px] mx-auto w-[150px] p-[10px] border border-pink-300 rounded-sm">
        <QRCodeSVG value={submittedText} />
      </div>
      <p className="text-center text-normal text-small max-w-[180px] mx-auto break-words">
        {submittedText.length == 0
          ? "This is an empty QR code for an example, type in the text to display valid QR code"
          : submittedText}
      </p>
    </div>
  );
};
