"use client";

import { CancelButton } from "@/components/common/buttons";
import Logo from "@/components/common/logo";
import { TextAreaField } from "@/components/common/text-field";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/actions/mail";
import { useAppSelector } from "@/redux/store";

type resubmitEmailFormData = {
  message: string;
};

function ResubmitEmailForm() {
  const { selectedApplicantUserId } = useAppSelector(
    (state) => state.selectedApplications
  );
  const schema: ZodType<resubmitEmailFormData> = z.object({
    message: z.string().min(1, { message: "Message is required" }).max(300),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resubmitEmailFormData>({
    resolver: zodResolver(schema),
  });

  const handleSendEmail = async (data: resubmitEmailFormData) => {
    const { message } = data;
    const response = await sendEmail({
      userId: selectedApplicantUserId,
      message_body:  message,
    });
  };

  return (
    <div className="w-screen  bg-[#F6F6F6]">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px]">
          Job Applications / Applicant&apos;s info / Missing info
        </p>
      </div>

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(handleSendEmail)}
          className="flex flex-col shadow-md p-[24px] rounded-md w-[60vw] bg-white"
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
    </div>
  );
}

export default ResubmitEmailForm;
