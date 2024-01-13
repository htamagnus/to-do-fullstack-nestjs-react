import { IsNotEmpty } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends CreateTodoDto {
  @IsNotEmpty()
  task: string;

  @IsNotEmpty()
  isDone: number;
}
