import { Button } from "./components/Button"
import {Header} from "./components/Header"
import { HabitForm } from "./components/HabitForm"
import { HabitList } from "./components/HabitList"
export default function App(){
  return <div className="max-width-2x mx-auto p-4 flex flex-col gap-4">
    <Header></Header>
    <HabitForm />
    <HabitList/>
  </div>
}


