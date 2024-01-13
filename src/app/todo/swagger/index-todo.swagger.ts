import { OmitType, PartialType } from '@nestjs/swagger';
import { TodoEntity } from '../entity/todo.entity';

export class IndexTodoSwagger extends PartialType(
  OmitType(TodoEntity, ['createdAt', 'updatedAt', 'deletedAt']),
) {}
