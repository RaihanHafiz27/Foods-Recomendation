import AuthForm from "@/components/fragments/auth/AuthForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return <AuthForm isRegister={false} />;
};

export default LoginPage;
