"use client";

import Logo from "../common/logo";
import { TextField } from "../common/text-field";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type loginFormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const schema: ZodType<loginFormData> = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "Invalid password" })
      .max(30, { message: "Invalid Password" }),
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(schema),
  });

  const handleLogin = (data: loginFormData) => {
    const { email, password } = data;
    if (Object.keys(errors).length === 0) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-neutralGrey0 shadow-md p-[24px] rounded-2xl min-h-[80vh] min-w-[770px] max-w-[50vw] flex flex-col items-center justify-between">
        <div className="w-full">
          <Logo />
          <h2 className="text-center text-neutralGrey800 text-[28px] mb-[16px] font-[700]">
            Log in to your Admin Dashboard
          </h2>
          <p className="text-center text-neutralGrey800-light text-[16px] mb-[48px] font-[500]">
            Enter your account information to log in back into your account
          </p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <TextField
              textFieldHeader="Email"
              textFieldType="text"
              placeHolderText="Enter your email"
              register={register("email")}
              error={errors.email}
            />
            <TextField
              textFieldHeader="Password"
              textFieldType="password"
              placeHolderText="Enter your password"
              extraHintText="Forgot Password?"
              icon={true}
              register={register("password")}
              error={errors.password}
            />
            <button className="btn w-full bg-primary text-white hover:bg-primary border-none animate-none">
              Log in
            </button>
          </form>
        </div>
        <div className="flex gap-1">
          <h3 className="text-neutralGrey800-light text-[18px]">
            For more information?
          </h3>
          <p className="text-primary underline text-[18px] cursor-pointer">
            Email us
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
