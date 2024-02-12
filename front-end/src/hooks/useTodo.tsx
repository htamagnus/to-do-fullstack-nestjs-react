import { useState, useCallback } from 'react';

import { ITodo } from 'interfaces';
import { TodoService } from 'services';

export const useTodo = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);

  const getAllTodos = useCallback(async () => {
    const { status, data } = await TodoService.getAllTodos();

    if (status !== 200) throw new Error();

    setTasks(data);
  }, []);

  const createTodo = useCallback(async (todo: Pick<ITodo, 'task' | 'isDone'>) => {
    const { status } = await TodoService.createTodo(todo);

    if (status !== 201) throw new Error();
  }, []);

  return {
    tasks,
    getAllTodos, 
    createTodo
  };
};