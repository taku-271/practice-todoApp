import { PrismaClient } from "@prisma/client";
import { CreateTodo, Todo } from "../types/type";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany();
};

export const createTodo = async (todo: CreateTodo) => {
  return await prisma.todo.create({ data: { title: todo.title } });
};

export const updateTodo = async (todo: Todo) => {
  return await prisma.todo.update({
    where: { id: todo.id },
    data: { ...todo },
  });
};

export const deleteTodo = async (id: number) => {
  return await prisma.todo.delete({ where: { id } });
};
