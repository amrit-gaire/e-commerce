import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Sign Up | Ahegao",
  description: "Login form",
};

const SignUpLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SignUpLayout;
