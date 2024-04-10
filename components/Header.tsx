"use client";
import Link from 'next/link'
import Logo from "@/Images/logo.svg";
import MenuIcon from "@/Images/Icons/menu.svg";
import SearchIcon from "@/Images/Icons/search-normal.svg";
import NotificationIcon from "@/Images/Icons/notification.svg";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import AddNewIcon from "@/Images/Icons/add-circle.svg";
import GlobalIcon from "@/Images/Icons/global.svg";
import { Avatar, AvatarImage } from './ui/avatar';
import { pathList } from '@/constants/HeaderLinks';

const Header = () => {
    const pathname = usePathname();
    return (
        <header className="bg-white  border-b h-[68px] relative w-screen">
            <div className="mx-auto  max-w-screen-xl flex items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Button variant={'ghost'} className='lg:hidden px-0'>
                    <span className="sr-only">toggle menu</span>
                    <Image alt='menu' src={MenuIcon} width={24} height={24} />
                </Button>
                <Link href={"/UserID/Products"} prefetch={false}>
                    <Image alt="Mazaady" src={Logo} width={108} height={43} />
                </Link>

                <div className="flex flex-1 items-center justify-end lg:justify-between mr-4 lg:mr-0">
                    <nav aria-label="Global" className="hidden lg:block">
                        <ul className="flex items-center gap-6 text-sm">
                            {pathList.map((item) => (
                                <li key={item.name} className='h-[68px] flex flex-col justify-center items-center'>
                                    <Link href={item.path} className={` text-[#828282] text-[18px] leading-[23px] ${pathname === item.path ? " font-extrabold text-[#D20653] " : null}`}>
                                        {item.name}
                                    </Link>
                                    {pathname === item.path && <div className='bg-[#D20653] w-[44px] h-[6px] absolute bottom-0 rounded-tl-md rounded-tr-md'></div>}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant={"ghost"} className='px-0 hover:bg-transparent'>
                            <Image alt="search" src={SearchIcon} width={24} height={24} />
                        </Button>
                        <div className='h-[40px] w-[1px] bg-[#FFEAD2] hidden lg:block' aria-hidden="true"></div>
                        <Button variant={"ghost"} className='px-0 hover:bg-transparent'>
                            <Image alt="notification" src={NotificationIcon} width={24} height={24} />
                        </Button>
                        <div className='h-[40px] w-[1px] bg-[#FFEAD2] hidden lg:block' aria-hidden="true"></div>
                        <Avatar className='h-[24px] w-[24px] lg:w-[40px] lg:h-[40px]'>
                            <AvatarImage src={"/user.jpg"}/>
                        </Avatar>
                        <Button className=' hidden lg:flex h-[40px] rounded-[10px] text-white w-fit font-bold text-[14px] leading-[19px] gap-2 bg-gradient-to-r from-[#D20653] to-[#FF951D]'>
                            <Image alt="add new product" src={AddNewIcon} width={18} height={18} />
                            Add New Product
                        </Button>
                        <Image alt="gloabal" src={GlobalIcon} width={24} height={24} className="hidden lg:block" />
                        <div className='h-[40px] w-[1px] bg-[#E0E0E0] hidden lg:block' aria-hidden="true"></div>
                        <Button variant={"ghost"} className='hover:bg-transparent hidden lg:block font-bold text-[18px] leading-[23px] px-0'>
                            EN
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header