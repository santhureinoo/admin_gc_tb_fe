"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../../../components/common/logo'
import { TextField } from '../../../components/common/text-field'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { setAlert } from '@/redux/alertSlice'
import { resetPassword } from '@/actions/auth'

type resetPasswordFormData = {
    newPassword: string;
    confirmPassword: string;
}

export default function ResetPasswordForm() {

    const dispatch = useDispatch();
    const schema: ZodType<resetPasswordFormData> = z.object({
        newPassword: z
            .string()
            .min(5, { message: "Invalid password" })
            .max(30, { message: "Invalid Password" }),
        confirmPassword: z
            .string()
            .min(5, { message: "Invalid password" })
            .max(30, { message: "Invalid Password" }),
      });
    const [userId, setUserId] = useState({
        value: ''
    });
    const [otpToken, setOtpToken] = useState({
        value: ''
    });
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<resetPasswordFormData>({
        resolver: zodResolver(schema)
    })

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        let userIdTemp:any;
        let otpTokenTemp:any;
        userIdTemp = params.get('userId') ? params.get('userId') : "";
        otpTokenTemp = params.get('otpToken') ? params.get('otpToken') : "";
        setUserId({
            value: userIdTemp
        })
        setOtpToken({
            value: otpTokenTemp
        })
    }, []);

    const handleReset = async (data: resetPasswordFormData) => {
        const { newPassword, confirmPassword } = data;

        if(newPassword !== confirmPassword) {
            dispatch(
                setAlert({
                    alertType: "error",
                    alertMessage: "Passwords are not the same!"
                })
            )
            return;
        }
        setLoading(true);
        try {
            const data = {
                userId: userId.value,
                password: confirmPassword,
                otpToken: otpToken.value
            }

            const response = await resetPassword(data);
            if(response) {
                dispatch(setAlert({
                    alertType: 'success',
                    alertMessage: "Password Created! Your new password has been set successfully. "
                }));
                setLoading(false);
                router.push('/login');
            }
            else {
                setLoading(false);
                dispatch(setAlert({
                    alertType: 'error',
                    alertMessage: "Something went wrong!"
                }));
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
                        Create a new password
                    </h2>
                    <p className="text-center text-neutralGrey800-light text-[16px] mb-[48px] font-[500]">
                        Create a new password for your account
                    </p>
                    <form onSubmit={handleSubmit(handleReset)}>
                        <TextField
                        textFieldHeader="New Password"
                        textFieldType="password"
                        placeHolderText="Enter your password"
                        extraHintText=""
                        icon={true}
                        register={register("newPassword")}
                        error={errors.newPassword}
                        />
                        <TextField
                        textFieldHeader="Confirm New Password"
                        textFieldType="password"
                        placeHolderText="Confirm your password"
                        extraHintText=""
                        icon={true}
                        register={register("confirmPassword")}
                        error={errors.confirmPassword}
                        />
                        <button className={`py-3 rounded-md w-full bg-primary border-none text-white animate-none ${isLoading ? "bg-opacity-70" : "hover:bg-primary "}`} disabled={isLoading}>
                            {isLoading ? "Loading..." : "Confirm"}
                        </button>
                    </form>
                </div>
                <div className="flex items-start">
                    <button onClick={() => router.push('/forgot-password')} className='border border-1 p-3 text-neutralGrey700 rounded'>Go back</button>
                </div>
            </div>
        </div>
    )
}
