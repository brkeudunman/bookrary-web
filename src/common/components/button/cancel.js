import React from "react";
import { useNavigate } from "react-router-dom";

const Cancel = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={onClick ? onClick : () => navigate("/")}
      className="bg-[white] text-[#7AD6FF] px-12 py-1 border hover:border-[#7AD6FF] rounded-md ease-in-out  transition-all delay-75"
    >
      Cancel
    </button>
  );
};

export default Cancel;
