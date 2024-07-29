import type { FC } from "react";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import ButtonGroup from "@/components/UI/ButtonGroup/ButtonGroup";
import Card from "@/components/Card/Card";


// это демонстрационная страница, написана без расчета на поддержку и масштабирование 
export const ExpertsPage: FC = () => {

  return (
    <div className="bg-white h-max min-h-screen">
      <div className="px-4 pt-5">
        <h1 className="text-3xl font-bold text-gray-900 mb-5">Специалисты</h1>
        <SearchInput />
      </div>
      <div className="py-3.5 pl-4">
        <ButtonGroup />
      </div>
      <div className="px-5 h-max grid gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
