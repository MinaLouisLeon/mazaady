import { Button } from "./ui/button";
import Image from "next/image";
import AddNewIcon from "@/Images/Icons/add-circle.svg";
const AddReviewButton = ({ className }: {
    className?: string;
}) => {
    return (
        <Button className={`${className} h-[40px] w-[125px] rounded-[10px] text-white font-bold text-[14px] leading-[19px] gap-2 bg-gradient-to-r from-[#D20653] to-[#FF951D]`}>
            <Image alt="add new product" src={AddNewIcon} width={18} height={18} />
            Add Review
        </Button>
    )
}

export default AddReviewButton