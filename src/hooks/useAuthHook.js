import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthHook = () => {
  const allInfo = useContext(AuthContext);
  console.log(allInfo);

  return allInfo;
};

export default useAuthHook;
