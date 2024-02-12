import { TodoEntity } from './entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<TodoEntity>);
    findAll(): Promise<TodoEntity[]>;
    findOneOrFail(id: any): Promise<TodoEntity>;
    create(data: CreateTodoDto): Promise<TodoEntity>;
    update(id: string, data: UpdateTodoDto): Promise<TodoEntity>;
    deleteById(id: string): Promise<void>;
}
