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
      <Button className='absolute z-10 top-[4px] left-[4px] md:top-0 md:right-0 md:left-auto w-[24px] h-[24px] md:w-[40px] md:h-[40px]  bg-white hover:bg-white p-0 rounded-full'>
        <div className='relative w-[14px] h-[14px] md:h-[24px] md:w-[24px]'>
          <Image alt='like or unlike' src={product.isLiked ? LikeIcon : UnlikeIcon} fill={true} />
        </div>
      </Button>
      <div className='w-[80px] h-[80px] md:w-[145px] md:h-[127px] relative'>
        <Image alt={product.productName} src={product.productImage} className='rounded-[15px] md:rounded-[28px]' fill={true} />
        <div className={`z-10 absolute bottom-0 right-0 w-[66px] h-[20px] md:w-[114px] md:h-[37px] rounded-tl-[15px] rounded-br-[15px] md:rounded-tl-[28px] md:rounded-br-[28px] flex items-center justify-center ${product.type === "Live Auction" ? "bg-[#D20653]" : "bg-[#FF951D]"}`}>
          <p className='text-white font-normal text-[8px] md:text-[12px] leading-[10px] md:leading-[16px]'>{product.type}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 ml-2 md:ml-8'>
        <h3 className='font-normal text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-wrap'>{product.productName}</h3>
        <p className='font-normal md:font-bold text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#828282]'>starting price
          <span className='font-bold text-black'>{" "}{product.startingPrice}{" "}{product.currencyCode}</span>
        </p>
        <div className='flex flex-col md:flex-row md:items-center align-middle md:h-[40px]'>
          <p className='font-normal text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#828282]'>Lot starts in</p>
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