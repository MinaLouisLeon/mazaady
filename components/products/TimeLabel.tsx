
const TimeLabel = ({time,label}:{
  time:number | string;
  label : string;
}) => {
  return (
    <div className="w-[57px] h-[28px] lg:w-[105px] lg:h-[40px] bg-[#FFF5E9] flex items-center justify-center rounded-[14px] lg:rounded-[24px] lg:ml-4">
      <p className="font-bold text-[12px] lg:text-[20px] leading-[16px] lg:leading-[28px] text-[#FF951D]">{time}
        <span className="text-[8px] lg:text-[14px] leading-[10px] lg:leading-[10px]">{" "}{label}</span>
      </p>
    </div>
  )
}

export default TimeLabel;
