import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, CreateTodo>({
    mutationKey: ["createTodo"],
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
    mutationFn: async (newTodo) => {
      return await axios.post<Todo>(
        "http://localhost:3001/api/todo/create",
        newTodo
      );
    },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, Todo>({
    mutationKey: ["getTodos"],
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
    mutationFn: async (todo) => {
      return await axios.post<Todo>(
        `http://localhost:3001/api/todo/update`,
        todo
      );
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, number>({
    mutationKey: ["deleteTodo"],
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
    mutationFn: async (id: number) => {
      return await axios.delete(`http://localhost:3001/api/todo/delete/${id}`);
    },
  });
};
