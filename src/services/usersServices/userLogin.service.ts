import jwt from "jsonwebtoken";
import users from "../../database/users";

const userLoginService = (email: string, password: string) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return "Email ou senha inválidos!";
  }

  const passwordMatch = user.password;

  if (!passwordMatch) {
    return "Email ou senha inválidos!";
  }

  const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default userLoginService;
