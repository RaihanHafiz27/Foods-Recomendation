import app from "./init";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import bcrypt from "bcrypt";
import { data } from "autoprefixer";

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

// sementara data dan callback tipenya any dahulu, nanti kalau sudah selesai perbaiki
export const loginWithGoogle = async (data: any, callback: any) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    data.role = user[0].role;
    await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {
      callback({ status: true, data: data });
    });
  } else {
    data.role = "member";
    await addDoc(collection(firestore, "users"), data).then(() => {
      callback({ status: true, data: data });
    });
  }
};
