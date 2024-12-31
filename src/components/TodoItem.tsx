import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`flex items-center justify-between p-4 ${todo.completed ? 'bg-gray-50' : 'bg-white'} rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <Check size={14} />}
        </button>
        <span className={`flex-1 text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}