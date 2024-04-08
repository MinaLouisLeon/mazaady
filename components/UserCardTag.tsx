import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
const UserCardTag = ({icon,value,text,subValue}:{
    icon: string | StaticImport,
    value: string | number,
    text:string,
    subValue?:string | number
}) => {
    return (
        <div className="h-[59px] w-[108px] bg-[#FFF5E9] rounded-[18px] flex items-center p-2 gap-2">
            <Image alt="following" src={icon} width={24} height={24} />
            <div className="flex-1">
                <h2 className="font-bold text-[14px] leading-[20px]">{value} 
                    {subValue && <span className="font-normal text-[10px] leading-[14px] text-[#828282]">{" "}({subValue})</span> }
                </h2>
                <h2 className=" font-normal text-[#FF951D] leading-[16px] text-[12px]">{text}</h2>
            </div>
        </div>
    )
}

export default UserCardTag