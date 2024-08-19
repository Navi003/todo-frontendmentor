const UserSchema = new Schema({
  email: {
    type: "string",
    unique: [true, "Email Alreay Exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: "string",
    required: [true, "Password is required"],
  },
  name: {
    type: "string",
    required: [true, "Username is required"],
  },

  todos: {
    items: [
      {
        text: "string",
        date: { type: Date, default: Date.now() },
        active: { type: "boolean", default: true },
        completed: { type: "boolean", default: flase },
      },
    ],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
