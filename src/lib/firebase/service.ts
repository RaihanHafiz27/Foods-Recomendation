import app from "./init";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export const login = async (data: { email: string }) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user) {
    return user[0];
  } else {
    return null;
  }
};

export const register = async (data: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return {
      status: false,
      statusCode: 400,
      message: "Email already exists",
    };
  } else {
    data.role = "user";
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return {
        status: true,
        statusCode: 200,
        message: "Registration successful",
      };
    } catch {
      return { status: false, statusCode: 400, message: "Registration Failed" };
    }
  }
};
