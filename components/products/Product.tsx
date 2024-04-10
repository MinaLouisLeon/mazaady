import { ProductType } from '@/types'
import Image from 'next/image'
import TimeLabel from './TimeLabel'
import LikeIcon from "@/Images/Icons/like.svg";
import UnlikeIcon from "@/Images/Icons/unlike.svg";
import { Button } from '../ui/button';
const Product = ({ product }: {
  product: ProductType
}) => {
  return (
    <div className='flex flex-row m-1 relative'>
      <Button className='absolute z-10 top-[4px] left-[4px] lg:top-0 lg:right-0 lg:left-auto w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]  bg-white hover:bg-white p-0 rounded-full'>
        <div className='relative w-[14px] h-[14px] lg:h-[24px] lg:w-[24px]'>
          <Image alt='like or unlike' src={product.isLiked ? LikeIcon : UnlikeIcon} fill={true} />
        </div>
      </Button>
      <div className='w-[80px] h-[80px] lg:w-[145px] lg:h-[127px] relative'>
        <Image alt={product.productName} src={product.productImage} className='rounded-[15px] lg:rounded-[28px]' fill={true} />
        <div className={`z-10 absolute bottom-0 right-0 w-[66px] h-[20px] lg:w-[114px] lg:h-[37px] rounded-tl-[15px] rounded-br-[15px] lg:rounded-tl-[28px] lg:rounded-br-[28px] flex items-center justify-center ${product.type === "Live Auction" ? "bg-[#D20653]" : "bg-[#FF951D]"}`}>
          <p className='text-white font-normal text-[8px] lg:text-[12px] leading-[10px] lg:leading-[16px]'>{product.type}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 ml-2 lg:ml-8'>
        <h3 className='font-normal text-[12px] lg:text-[18px] leading-[16px] lg:leading-[25px] text-wrap'>{product.productName}</h3>
        <p className='font-normal lg:font-bold text-[12px] lg:text-[18px] leading-[16px] lg:leading-[25px] text-[#828282]'>starting price
          <span className='font-bold text-black'>{" "}{product.startingPrice}{" "}{product.currencyCode}</span>
        </p>
        <div className='flex flex-col lg:flex-row lg:items-center align-middle lg:h-[40px]'>
          <p className='font-normal text-[12px] lg:text-[18px] leading-[16px] lg:leading-[25px] text-[#828282]'>Lot starts in</p>
          <div className='flex flex-row items-center gap-2 mt-2'>
            <TimeLabel time={product.timeStartInDays} label='Days' />
            <TimeLabel time={product.timeStartInHours} label='Hours' />
            <TimeLabel time={product.timeStartInMinutes} label='Minutes' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product