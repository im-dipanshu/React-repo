import { Button } from "./Button"
export function HabitForm(){
  return <form className="flex gap-2">
    <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visibile:ring-2 focus-visible:ring-violet-500" placeholder="New habit...."/>
    <Button>Add Habit</Button>
  </form>
}