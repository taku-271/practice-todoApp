import {
  useCreateTodo,
  useDeleteTodo,
  useGetTodos,
  useUpdateTodo,
} from "@/hooks/store";
import { useEffect, useState } from "react";

const Index = () => {
  const { todos, isGetTodosLoading } = useGetTodos();
  const { createTodo } = useCreateTodo();
  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo();
  const [title, setTitle] = useState("");

  const onChangeTitle = (title: string) => {
    setTitle(title);
  };

  const onSubmitTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    title ? createTodo({ title }) : alert("Title is required");
  };

  const onChangeCompleted = (isChecked: boolean, todo: Todo) => {
    updateTodo({
      ...todo,
      completed: isChecked,
    });
  };

  const onDelete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <div>
      <h1>Todos</h1>
      {isGetTodosLoading ? (
        <p>Loading...</p>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? "Completed" : "Not completed"}</p>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onChangeCompleted(e.target.checked, todo)}
            />
            <button onClick={() => onDelete(todo.id)}>削除</button>
          </div>
        ))
      )}
      <div>
        <h2>Create Todo</h2>
        <form onSubmit={(e) => onSubmitTitle(e)}>
          <input type="text" onChange={(e) => onChangeTitle(e.target.value)} />
          <button type="submit">新規作成</button>
        </form>
      </div>
    </div>
  );
};

export default Index;
