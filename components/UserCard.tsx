import { Card } from "./ui/card";
import Image from "next/image";
import FollowingIcon  from "@/Images/Icons/user-tick.svg"
import UserCardTag from "./UserCardTag";
import FollowersIcon from "@/Images/Icons/profile-2user.svg";
import RateIcon from "@/Images/Icons/magic-star.svg";
import { Button } from "./ui/button";
const UserCard = ({userName,description}:{
  userName: string,
  description: string
}) => {
  return (
    <Card className=" mt-4 md:mt-0 mx-4 md:mx-0 rounded-[24px] p-6">
        <Image alt="userImage" src={"/user.jpg"} width={100} height={100} className="rounded-[20px] h-[100px]" />
        <h2 className="text-[24px] leading-[23px] font-bold mt-4" >{userName}</h2>
        <p className="max-w-[400px] mt-2 text-[14px] leading-[20px]">
          {description}
        </p>
        <div className="flex mt-4 justify-between items-center">
            <UserCardTag text="Following" value={5} icon={FollowingIcon} />
            <UserCardTag  text="Followers" value={20} icon={FollowersIcon} />
            <UserCardTag text="Rate" value={4.2} subValue={15} icon={RateIcon} />
        </div>
        <Button className="font-bold text-white text-[16px] leading-[22px] mt-6 w-full h-[50px] rounded-[14px] bg-gradient-to-r from-[#D20653] to-[#FF951D]">
            Follow
        </Button>
    </Card>
  )
}

export default UserCard;
