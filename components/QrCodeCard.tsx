"use client";
import Image from "next/image"
import { Card } from "./ui/card"
import EyeIcon from "@/Images/Icons/eye.svg";
import ShareIcon from "@/Images/Icons/send-square.svg";
import DownloadIcon from "@/Images/Icons/document-download.svg";
import DownloadIconOrange from "@/Images/Icons/document-download2tone.svg"
import Logo from "@/Images/logo.svg";
import ArrowUp from "@/Images/Icons/arrow-up.svg";
import ArrowDown from "@/Images/Icons/arrow-down.svg";
import { Button } from "./ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";

const QrCodeCard = ({ userName, qrCode }: {
    userName: string,
    qrCode: string | StaticImport
}) => {
    const [showQrCode, setShowQrCode] = useState<boolean>(true);
    return (
        <Card className="my-4 mx-4 md:mx-0 rounded-[24px] p-4 flex flex-col gap-2">
            <div className="flex items-center">
                <h1 className="font-bold leading-[23px] text-[24px] ">QR Code</h1>
                <div className="flex-1 flex items-center justify-end">
                    <Button variant={"ghost"} className="hover:bg-transparent">
                        <Image alt="" src={EyeIcon} width={24} height={24} />
                    </Button>
                    <Button variant={"ghost"} className="hover:bg-transparent">
                        <Image alt="" src={ShareIcon} width={24} height={24} />
                    </Button>
                    <Button variant={"ghost"} className="hover:bg-transparent">
                        <Image alt="" src={DownloadIcon} width={24} height={24} />
                    </Button>
                    <Button onClick={() => setShowQrCode(!showQrCode)} variant={"ghost"} className={`block md:hidden rounded-full px-2 py-0 mx-0 my-0 ${showQrCode ? "bg-[#FBE7EE] hover:bg-[#FBE7EE]" : "bg-[#F6F4F5] hover:bg-[#F6F4F5]"}`}>
                        <Image alt="show or hide Qr code" src={showQrCode ? ArrowDown : ArrowUp} width={24} height={24} />
                    </Button>
                </div>
            </div>
            {showQrCode && (
                <>
                    <div className=" bg-[#FFF5E9] rounded-[20px] h-[60px] flex items-center px-4 gap-8">
                        <Image alt="download" src={DownloadIconOrange} width={24} height={24} />
                        <p className="font-normal text-[12px] leading-[16px]">Download the QR code or share it with your friends.</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#D20653] to-[#FF951D] p-4 rounded-[20px]">
                        <div className="bg-white h-fit rounded-[18px] flex flex-col items-center p-4 gap-2">
                            <Image alt="mazaady logo" src={Logo} width={152} />
                            <h2 className="font-bold text-[24px] leading-[33px]">{userName}</h2>
                            <Image alt="QR code" src={qrCode} width={135} />
                            <p className="font-normal text-[14px] leading-[19px]">Follow Us on Mazaady</p>

                        </div>
                    </div>
                </>
            )}
        </Card>
    )
}

export default QrCodeCard

