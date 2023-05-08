import "./Habit.css";

interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return (
    <div>
      <div className="habit">{completed}</div>
    </div>
  );
}
