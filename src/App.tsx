import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="text-green-500" size={20} />
              <span>{completedCount} of {todos.length} completed</span>
            </div>
          </div>
          
          <TodoInput onAdd={addTodo} />
          
          <div className="mt-8 space-y-4">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No tasks yet. Add one above to get started!
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;