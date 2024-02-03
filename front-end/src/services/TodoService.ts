import { ITodo } from "interfaces"
import { Api } from "providers"

const getAll = () => Api.get<ITodo[]>('/v1/todos')

export const TodoService = {
    getAll
}