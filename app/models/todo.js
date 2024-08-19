import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  text: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  active: {
    type: "boolean",
    required: true,
  },
});
const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
