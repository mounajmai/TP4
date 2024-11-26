import React, { createContext, useState } from 'react';
// Crée le contexte
export const TaskContext = createContext();
// Crée le fournisseur de contexte
export function TaskProvider({ children }) {
const [tasks, setTasks] = useState([]);
// Fonction pour ajouter une tâche
const addTask = (task) => {
setTasks([...tasks, task]);
};
// Fonction pour supprimer une tâche
const removeTask = (index) => {
setTasks(tasks.filter((_, i) => i !== index));
};
return (
<TaskContext.Provider value={{ tasks, addTask, removeTask }}>
{children}
</TaskContext.Provider>
);
}