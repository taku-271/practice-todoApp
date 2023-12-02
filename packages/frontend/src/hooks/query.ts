import { useQuery } from "react-query";
import axios from "axios";

export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: "getTodos",
    queryFn: async () => {
      const { data } = await axios.get<Todo[]>(
        "http://localhost:3001/api/todos"
      );

      return data;
    },
    cacheTime: 0,
  });
};
