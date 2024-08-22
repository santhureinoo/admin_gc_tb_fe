import { LoginUserAction } from "@/serverActions/actions";
import Logo from "./common/Logo";
import ServerTextField from "./common/ServerTextField";

function LoginForm() {
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
          <form action={LoginUserAction}>
            <ServerTextField
              textFieldHeader="Email"
              textFieldName="email"
              textFieldType="text"
              placeHolderText="Enter your email"
            />
            <ServerTextField
              textFieldHeader="Password"
              textFieldName="password"
              textFieldType="password"
              placeHolderText="Enter your password"
            />
            <button className="btn w-full bg-primary text-white hover:bg-primary border-none">
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
