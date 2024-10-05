"use client";

import { CancelButton } from "@/components/common/buttons";
import Logo from "@/components/common/logo";
import { TextAreaField } from "@/components/common/text-field";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { showToast } from "@/utils";

type resubmitEmailFormData = {
  message: string;
};

function ResubmitEmailForm() {
  const schema: ZodType<resubmitEmailFormData> = z.object({
    message: z.string().min(1, { message: "Message is required" }).max(200),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resubmitEmailFormData>({
    resolver: zodResolver(schema),
  });

  const handleLogin = (data: resubmitEmailFormData) => {
    const { message } = data;
    console.log(message);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button
        onClick={() => {
          showToast(
            "success",
            "This applicant has been moved to missing infos by the admin."
          );
        }}
      >
        Click
      </button>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col shadow-md p-[24px] rounded-md w-[50vw]"
      >
        <Logo />
        <h3 className="text-neutralGrey800 font-[700] text-[23px] text-center">
          Send email to the applicant to resubmit their application
        </h3>
        <p className="text-center my-[10px] text-neutralGrey-grey600 font-[500]">
          Write down an email and send it to the applicant.
        </p>
        <div className="flex flex-col gap-2 mt-[20px] px-[40px]">
          <TextAreaField
            register={register("message")}
            textFieldHeader="Write a message to the applicant *"
            placeHolderText="Type a message here"
            error={errors.message}
          />
          <div className="flex items-center justify-between">
            <CancelButton />
            <button
              type="submit"
              className="bg-primary inline-block rounded-md cursor-pointer border"
            >
              <p className="text-white py-[10px] px-[20px] text-[14px] font-[500]">
                Send to the applicant
              </p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResubmitEmailForm;
