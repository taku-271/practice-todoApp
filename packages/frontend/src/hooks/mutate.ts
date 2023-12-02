import { useMutation } from "react-query";
import axios from "axios";

export const useCreateTodoMutation = () => {
  return useMutation<unknown, unknown, CreateTodo>({
    mutationKey: ["createTodo"],
    mutationFn: async (newTodo) => {
      return await axios.post<Todo>(
        "http://localhost:3001/api/todo/create",
        newTodo
      );
    },
  });
};

export const useUpdateTodoMutation = () => {
  return useMutation<unknown, unknown, Todo>({
    mutationKey: ["updateTodo"],
    mutationFn: async (todo) => {
      return await axios.post<Todo>(
        `http://localhost:3001/api/todo/update`,
        todo
      );
    },
  });
};
