import React from "react";
import MenuBar from "../../../components/FormSchema/MeunBar";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl text-black">Quiz App</h1>
        <h1 className="text-lg font-semibold">Quick Quiz</h1>
      </div>
      <MenuBar />
    </div>
  );
};
