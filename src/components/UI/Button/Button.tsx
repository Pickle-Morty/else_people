import { FC } from "react";

const Button: FC = () => {
  return (
    <a
      href="https://t.me/justC0de"
      className="group block text-center w-full relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
    >
      <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>
      <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
        Написать в тг
      </span>
    </a>
  );
};

export default Button;
