"use client";

import Logo from "../common/logo";
import { TextField } from "../common/text-field";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/actions/auth";
import { setCookie } from "cookies-next";
import { ACCESS_TOKEN, CURRENT_USER_ID, REFRESH_TOKEN } from "@/constants";
import { getEncryptedToken } from "@/utils";
import { useDispatch } from "react-redux";
import { setAlert } from "@/redux/alertSlice";
import { useState } from "react";

type loginFormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const dispatch = useDispatch();
  const schema: ZodType<loginFormData> = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "Invalid password" })
      .max(30, { message: "Invalid Password" }),
  });

  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(schema),
  });

  const handleLogin = async (data: loginFormData) => {
    const { email, password } = data;
    setLoading(true);
    try {
      const response = await login({ email, password });
      if (response?.access_token) {
        setCookie(ACCESS_TOKEN, await getEncryptedToken(response?.access_token), {
          maxAge: response?.expires_in,
        });
        setCookie(
          REFRESH_TOKEN,
          await getEncryptedToken(response.refresh_token),
          { maxAge: response?.refresh_expires_in }
        );
        setCookie(CURRENT_USER_ID, await getEncryptedToken(response?.user_id), {
          maxAge: response?.refresh_expires_in,
        });
        dispatch(
          setAlert({
            alertType: "success",
            alertMessage: `Welcome to Global Caring Handbook Admin`,
          })
        );
        setLoading(false);
        router.push("/");
      }
      else {
        setLoading(false);
        dispatch(
          setAlert({
            alertType: "error",
            alertMessage: "Something went wrong",
          })
        );
      }
    } catch (error) {
      setLoading(false);
      dispatch(
        setAlert({
          alertType: "error",
          alertMessage: "Something went wrong",
        })
      );
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-neutralGrey0 shadow-md py-[24px] px-[40px] rounded-2xl min-h-[80vh] min-w-[600px] max-w-[50vw] flex flex-col items-center justify-between">
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
              extraHintText=""
              icon={true}
              register={register("password")}
              error={errors.password}
            />
            <div className="flex justify-end">
              <p onClick={() => router.push('/forgot-password')} className="text-neutralGrey700 mt-[-20px] mb-6 font-small cursor-pointer">Forgot Password?</p>
            </div>
            <button className={`py-3 rounded-md w-full bg-primary border-none text-white animate-none ${isLoading ? "bg-opacity-70" : "hover:bg-primary "}`} disabled={isLoading}>
              {isLoading ? "Loading..." : "Log in"}
            </button>
          </form>
        </div>
        {/* <div className="flex gap-1">
          <h3 className="text-neutralGrey800-light text-[18px]">
            For more information?
          </h3>
          <p className="text-primary underline text-[18px] cursor-pointer">
            Email us
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default LoginForm;
