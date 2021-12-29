import { auth } from "../config/firebase";

export const signInUser = async (email, pass) => {
  return await auth.signInWithEmailAndPassword(email, pass);
};
