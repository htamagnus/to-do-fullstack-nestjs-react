import { ITodo } from "interfaces"
import { Api } from "providers"

const getAllTodos = () => Api.get<ITodo[]>('/v1/todos')

const createTodo = (todo: Pick<ITodo, 'task' | 'isDone'>) => Api.post<ITodo>('/v1/todos', todo)

const updateTodo = (id: string, todo: Pick<ITodo, 'task' | 'isDone'>) => Api.put(`/v1/todos/${id}`, todo)


export const TodoService = {
    getAllTodos, 
    createTodo, 
    updateTodo
}