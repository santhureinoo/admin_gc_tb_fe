"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../../../components/common/logo'
import { TextField } from '../../../components/common/text-field'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { number, z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setAlert } from '@/redux/alertSlice';
import { resendOTP, verifyOTP } from '@/actions/auth';

type verifyOTPFormData = {
    otp: string
}

export default function VerifyOTP() {

    const dispatch = useDispatch();
    const schema: ZodType<verifyOTPFormData> = z.object({
        otp: z.string().length(6, {
            message: "OTP must be 6 digits length"
        })
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<verifyOTPFormData>({
        resolver: zodResolver(schema)
    })

    const router = useRouter();
	const navigation = useRouter();
	const [isLoading, setLoading] = useState(false);
	const [userId, setUserId] = useState({ value: "" });
	const [otpType, setOtpType] = useState({ value: "" });
	// Countdown state for resend button
	const [countdown, setCountdown] = useState(90); // 1 minute 30 seconds

    // Convert countdown seconds to MM:SS format
	const formatCountdown = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
	};

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
		let userIdTemp = params.get("userId") || "";
		let otpTypeTemp = params.get("otpType") || "";
		setUserId({ value: userIdTemp });
		setOtpType({ value: otpTypeTemp });
    }, [])

	useEffect(() => {
		// Start the countdown timer
		const timer = setInterval(() => {
			setCountdown((prevCountdown) =>
				prevCountdown > 0 ? prevCountdown - 1 : 0
			);
		}, 1000);

		// Clear the timer when the component unmounts
		return () => clearInterval(timer);
	}, []);

    const verifyOtpCode = async (data: verifyOTPFormData) => {
        const { otp } = data;
        setLoading(true);
        try {
            const response = await verifyOTP({
                userId: userId.value,
                type: otpType.value,
                otpToken: Number.parseInt(otp),
            });
            
            if(response) {
                let params = new URLSearchParams({
                    userId: userId.value,
                    otpToken: otp,
                });
                dispatch(
                    setAlert({
                        alertType: "success",
                        alertMessage: "Verification Complete! Your OTP has been successfully verified.",
                    })
                );
                setLoading(false);
                navigation.push(`/reset-password?${params.toString()}`);
            }
            else {
                setLoading(false);
                dispatch(
                    setAlert({
                        alertType: "error",
                        alertMessage: "Something went worng"
                    })
                )
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

    const resend = async () => {
        const resendOtpReq = {
			userId: userId.value,
			type: otpType.value,
		};

        try {
            const response = await resendOTP(resendOtpReq);
            // setCountdown(90); 
            if(response) {
                dispatch(
                    setAlert({
                        alertType: "success",
                        alertMessage: "OTP Sent! We have sent a One-Time Password (OTP) to your registered email.",
                    })
                );
                setCountdown(90); // Reset the countdown after resending OTP
            }
            else {
                dispatch(
                    setAlert({
                        alertType: "error",
                        alertMessage: "Something went worng"
                    })
                )
            }
        }
        catch(error) {
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
                        Verify OTP Code
                    </h2>
                    <p className="text-center text-neutralGrey800-light text-[16px] mb-[48px] font-[500]">
                        Enter the OTP code that we've sent to your email
                    </p>
                    <form onSubmit={handleSubmit(verifyOtpCode)}>
                        <TextField
                        textFieldHeader="OTP code (6 digits)"
                        textFieldType="number"
                        placeHolderText="Enter OTP code"
                        register={register("otp")}
                        error={errors.otp}
                        />
                        <button className={`py-3 rounded-md w-full bg-primary border-none text-white animate-none ${isLoading ? "bg-opacity-70" : "hover:bg-primary "}`} disabled={isLoading}>
                            {isLoading ? "Loading..." : "Verify OTP code"}
                        </button>
                    </form>
                    <div className='flex gap-1 justify-center mt-4'>
                        <span className="text-neutralGrey800-light text-[16px]">{`Didn't you receive any code? `}</span>
                        {countdown > 0 ? (
                            <span className="text-neutralGrey500 text-[16px]">{`Resend available in ${formatCountdown(
                                countdown
                            )}`}</span>
                        ) : (
                            <a
                                className="text-primary underline text-[16px] cursor-pointer"
                                onClick={resend}>
                                Resend again
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex items-start">
                    <button onClick={() => router.push('/forgot-password')} className='border border-1 p-3 text-neutralGrey700 rounded'>Go back</button>
                </div>
            </div>
        </div>
    )
}
