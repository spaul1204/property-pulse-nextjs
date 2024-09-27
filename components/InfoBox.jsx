import Link from "next/link";
import React from "react";

const InfoBox = ({ bgColor, heading, children, buttonInfo }) => {
  const { btnBgColor, text, link } = buttonInfo;
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-gray-800 text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={link}
        className={`${btnBgColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {text}
      </Link>
    </div>
  );
};

export default InfoBox;
