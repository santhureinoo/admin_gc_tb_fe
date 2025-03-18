import { getLicenseCSVData, GetLicenseCSVDataReq } from '@/actions/license';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

type CSVDownloadButtonProps = {
    title: string,
    onClick: () => void
}
export default function DownloadCSVButton({title, onClick}: CSVDownloadButtonProps) {

    return (
        <div
            onClick={onClick}
            className="bg-primary-pink600 inline-block rounded-md cursor-pointer"
        >
            <p className="text-neutralGrey py-[10px] px-[20px] text-[14px] font-[500]">
                {title}
            </p>
        </div>
    )
}
