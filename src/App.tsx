
import { useState } from 'react';
import './App.css'
import {closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors} from "@dnd-kit/core"
import { Column } from './components/Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Input } from './components/Input/Input';


function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "洗い物"},
    { id: 2, title: "洗濯"},
    { id: 3, title: "ゴミ捨て"},
  ]);
  
  const addTask = (title) =>{
    setTasks((tasks) => [...tasks, {id: tasks.length + 1, title
    }]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => 
    task.id === id)


  const handleDragEnd = (event) => {
    const {active, over} = event;

    if(active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  

  return (
    <div className='App'>
      <h1>My Tasks ✅</h1>
      <DndContext 
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Input onSubmit={addTask}/>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App
