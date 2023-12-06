import {
  useCreateTodo,
  useDeleteTodo,
  useGetTodos,
  useUpdateTodo,
} from "@/hooks/store";
import { Box, Button, Checkbox, TextField } from "@mui/material";
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

  const onSubmitTitle = () => {
    title ? createTodo({ title }) : alert("Title is required");
    setTitle("");
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
    <Box sx={{ textAlign: "center" }}>
      <h1>～やることリスト～</h1>
      <Box sx={{ mb: 5 }}>
        <h2>～新規作成～</h2>
        <TextField
          sx={{ mr: 2 }}
          variant="outlined"
          onChange={(e) => onChangeTitle(e.target.value)}
          value={title}
          size="small"
        />
        <Button variant="contained" onClick={onSubmitTitle}>
          新規作成
        </Button>
      </Box>
      {isGetTodosLoading ? (
        <p>Loading...</p>
      ) : (
        todos?.map((todo) => (
          <Box
            key={todo.id}
            sx={{
              width: 200,
              m: "0 auto",
              p: 3,
              mb: 2,
              border: "1px solid #000",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <h2>{todo.title}</h2>
              <p>{todo.completed ? "完了" : "未完了"}</p>
            </Box>
            <Checkbox
              sx={{ mr: 5 }}
              checked={todo.completed}
              onChange={(e) => onChangeCompleted(e.target.checked, todo)}
            />
            <Button
              onClick={() => onDelete(todo.id)}
              variant="contained"
              color="error"
            >
              削除
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Index;
