import React from "react";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function SummaryTable() {
  return (
    <div className="w-full flex ">
      {/* CABEÇALHO HORIZONTAL DA TABELA */}
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
              key={index}
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-row gap-3">
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-100 rounded-lg"></div>
      </div>
    </div>
  );
}
