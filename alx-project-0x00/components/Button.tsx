import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <div>
      <button className={`bg-blue-600 px-3 w-auto h-[27px] ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
