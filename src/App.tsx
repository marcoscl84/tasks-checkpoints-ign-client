import "./styles/global.css";
// import { Header } from "../components/Header";
// import { SummaryTable } from "../components/SummaryTable";
// import {HabitDay} from '../components/HabitDay'

import logoImage from "../assets/logo.svg";
import { Plus } from "phosphor-react";
import { generateDatesFromYearBeginning } from "./utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDates = 18 * 7;
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length;

console.log(summaryDates);

// import { Habit } from "../components/Habit";

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <Header /> */}
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        {/* HEADER */}
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={logoImage} alt="logo" />

          <button
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
          >
            <Plus size={20} className="text-violet-500" />
            Novo hábito
          </button>
        </div>

        {/* <SummaryTable /> */}
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
    </div>
  );
}
