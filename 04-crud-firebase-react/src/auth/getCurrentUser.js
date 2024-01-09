import { auth } from "../firebase";
import "firebase/auth";

export const getCurrentUser = () => {
  const user = auth.currentUser;
  if (!user) return null;
  return {};
};
