import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDates = 18 * 7;
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length;

console.log(summaryDates);

export function SummaryTable() {
  return (
    <div className="w-full flex ">
      {/* CABEÇALHO HORIZONTAL DA TABELA */}
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

        {/* <HabitDay /> */}
        <div className="grid grid-rows-7 grid-flow-col gap-3">
          {summaryDates.map((date) => {
            return (
              <div
                key={date.toString()}
                className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center"
              ></div>
            );
          })}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => {
              return (
                <div
                  key={index}
                  className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center opacity-40 cursor-not-allowed"
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
