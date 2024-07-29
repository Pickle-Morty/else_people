import { FC, useState } from 'react';

interface DataItem {
  label: string;
}

const ButtonGroup: FC = () => {
  const data: DataItem[] = [
    { label: "Все" },
    { label: "Няня" },
    { label: "Водитель" },
    { label: "Садовник" },
    { label: "Охранник" },
  ];

  const [active, setActive] = useState<number>(1);

  const defaultStyle =
    "inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative";
  const activeStyle =
    "inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative";

  return (
    <div className="w-full inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 overflow-x-hidden">
      {data.map((item, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={active === i ? activeStyle : defaultStyle}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
