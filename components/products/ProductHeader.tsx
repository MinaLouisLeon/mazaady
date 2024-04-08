"use client";
import ProductHeaderLink from "./ProductHeaderLink"
import { usePathname } from "next/navigation";
import AddReviewButton from "../AddReviewButton";
const ProductHeader = ({ itemsCount }: {
    itemsCount?: number
}) => {
    const pathname = usePathname();
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-8">
                    <ProductHeaderLink text="Products" path="/userID/Products" />
                    <ProductHeaderLink text="Articles" path="/userID/Articles" />
                    <ProductHeaderLink text="Reviews" path="/userID/Reviews" />
                </div>
                <AddReviewButton className="hidden md:flex" />
            </div>
            <h2 className=" font-extrabold text-[24px] leading-[33px] mt-4">
                {pathname.split("/")[2]}
                {itemsCount && <span className="font-normal text-[14px] text-[#828282] leading-[19px]">{" "}({itemsCount})</span>}
            </h2>
        </>
    )
}

export default ProductHeader