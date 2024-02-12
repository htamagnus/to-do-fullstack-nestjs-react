import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    index(): Promise<import("./entity/todo.entity").TodoEntity[]>;
    create(body: CreateTodoDto): Promise<import("./entity/todo.entity").TodoEntity>;
    show(id: string): Promise<import("./entity/todo.entity").TodoEntity>;
    update(id: string, body: UpdateTodoDto): Promise<import("./entity/todo.entity").TodoEntity>;
    destroy(id: string): Promise<void>;
}
