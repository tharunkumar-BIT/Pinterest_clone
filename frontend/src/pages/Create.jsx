import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Create = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const [file, setFile] = useState("");
  const [filePrev, setFilePrev] = useState("");
  const changeFileHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFilePrev(reader.result);
      setFile(file);
    };
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-80 h-auto p-6 bg-white rounded-lg shadow-lg">
            {filePrev && <img src={filePrev} alt="" />}
            <div
              className="flex flex-col items-center justify-center h-full cursor-pointer"
              onClick={handleClick}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={changeFileHandler}
              />
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
                <FaPlus />
              </div>
              <p className="text-gray-500">Choose a file</p>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              We recommend using high quality .jpg files but less than 10mb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
