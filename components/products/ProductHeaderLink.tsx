"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
const ProductHeaderLink = ({text,path}:{
  text: string;
  path: string
}) => {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <Button variant={'outline'} 
        className={`h-[35px] w-[97px] rounded-[14px] font-bold text-[14px] leading-[19px]  ${pathname === path ? "text-[#FF951D] hover:text-[#FF951D] bg-[#FFF5E9] hover:bg-[#FFF5E9] border-[#FF951D]" :"text-[#828282] hover:text-[#828282] bg-[#FFFFFF] hover:bg-[#FFFFFF] border-[#E0E0E0]" }`}
      >
        {text}
      </Button>
    </Link>
  )
}

export default ProductHeaderLink
