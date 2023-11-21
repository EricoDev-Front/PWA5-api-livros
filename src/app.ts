import express from "express";
import booksRoutes from "./routes/books.routes";
import usersRoutes from "./routes/users.routes";

const server = express();
const port = 3000;
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello Erico");
});

server.use("/users", usersRoutes);
server.use("/books", booksRoutes);

server.listen(port, () => {
  console.log("rodando");
});
