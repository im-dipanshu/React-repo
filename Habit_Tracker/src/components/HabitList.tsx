import { Button } from "./Button"
export function HabitList(){
    const habits=["d"]

    if(habits.length === 0){
        return <p className="text-center text-zinc-500 py-12">No Habits yet. Add one above to get started!</p>
    }
    return <div className="flex flex-col gap-3">
        {habits.map(habit => {
            return <h1>{habit}</h1>
        })}
    </div>
}