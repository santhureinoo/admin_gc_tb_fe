"use client"

import React, { useState } from 'react'
import Logo from '../../../components/common/logo'
import { TextField } from '../../../components/common/text-field'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { setAlert } from '@/redux/alertSlice'
import { checkMail } from '@/actions/auth'

type forgotPasswordFormData = {
    email: string;
}

export default function ForgotPasswordForm() {
    const dispatch = useDispatch();
    const schema: ZodType<forgotPasswordFormData> = z.object({
        email: z.string().email()
    })
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<forgotPasswordFormData>({
        resolver: zodResolver(schema)
    })

    const handleCheckEmail = async (data: forgotPasswordFormData) => {
        const { email } = data;
        setLoading(true);
        try {
            const response = await checkMail({ email: email});
            if(response) {
                let params = new URLSearchParams({
                    userId: response.username,
                    otpType: 'PASSWORD',
                });
                dispatch(
                    setAlert({
                        alertType: "success",
                        alertMessage: "OTP Sent! We have sent a One-Time Password (OTP) to your registered email."
                    })
                )
                setLoading(false);
                router.push(`/verify-otp?${params}`)
            }
            else {
                setLoading(false);
                dispatch(setAlert({
                    alertType: "error",
                    alertMessage: "Invalid email"
                }))
            }
        }
        catch(error) {
            setLoading(false);
            dispatch(
                setAlert({
                    alertType: "error",
                    alertMessage: "Something went worng"
                })
            )
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-neutralGrey0 shadow-md py-[24px] px-[40px] rounded-2xl min-h-[80vh] min-w-[600px] max-w-[50vw] flex flex-col justify-between">
                <div className="w-full">
                    <Logo />
                    <h2 className="text-center text-neutralGrey800 text-[28px] mb-[16px] font-[700]">
                        Reset your password
                    </h2>
                    <p className="text-center text-neutralGrey800-light text-[16px] mb-[48px] font-[500]">
                        Enter your email address that you used when creating an account
                    </p>
                    <form onSubmit={handleSubmit(handleCheckEmail)}>
                        <TextField
                        textFieldHeader="Email"
                        textFieldType="text"
                        placeHolderText="Enter your email"
                        register={register("email")}
                        error={errors.email}
                        />
                        <button className={`py-3 rounded-md w-full bg-primary border-none text-white animate-none ${isLoading ? "bg-opacity-70" : "hover:bg-primary "}`} disabled={isLoading}>
                            {isLoading ? "Loading..." : "Send"}
                        </button>
                    </form>
                </div>
                <div className="flex items-start">
                    <button onClick={() => router.push('/login')} className='border border-1 p-3 text-neutralGrey700 rounded'>Go back to login</button>
                </div>
            </div>
        </div>
    )
}
