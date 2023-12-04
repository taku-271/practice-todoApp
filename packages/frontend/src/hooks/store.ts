import { useGetTodosQuery } from "@/hooks/query";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "@/hooks/mutate";

export const useGetTodos = () => {
  const { data, error, isLoading } = useGetTodosQuery();

  if (error) {
    throw error;
  }

  return { todos: data, isGetTodosLoading: isLoading };
};

export const useCreateTodo = () => {
  const { mutateAsync: createTodo, error } = useCreateTodoMutation();

  if (error) {
    throw error;
  }

  return { createTodo };
};

export const useUpdateTodo = () => {
  const { mutateAsync: updateTodo, error } = useUpdateTodoMutation();

  if (error) {
    throw error;
  }

  return { updateTodo };
};

export const useDeleteTodo = () => {
  const { mutateAsync: deleteTodo, error } = useDeleteTodoMutation();

  if (error) {
    throw error;
  }

  return { deleteTodo };
};
