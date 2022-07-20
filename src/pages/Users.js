import UserContainer from "../Components/Users/UsersContainer";
import {ContextProvider} from "../../src/Components/Context";

const Users = () => {
  return (
    <>
      <ContextProvider>
        <UserContainer />
      </ContextProvider>
    </>
  );
};
export default Users;
