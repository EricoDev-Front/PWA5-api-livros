import User from "../../@types/user.type";
import users from "../../database/users";

const updateUserService = async (newUser: User, index: number) => {
  newUser.password = newUser.password;
  users[index] = { ...users[index], ...newUser };

  return users[index];
};

export default updateUserService;
