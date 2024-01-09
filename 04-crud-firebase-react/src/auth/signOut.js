import { auth } from "../firebase";
import "firebase/auth";
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    throw new Error("Error signinig out");
  }
};
