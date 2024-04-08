import { SignUpSchema } from "@shubh_negi/types";
import express from "express";

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const signup = SignUpSchema.safeParse(req.body);

  if (!signup.success) {
    return res.json({
      msg: "invalid input",
    });
  }

  return res.json({
    msg: "Sign up successfull",
  });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
