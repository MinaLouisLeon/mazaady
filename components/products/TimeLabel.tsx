
const TimeLabel = ({time,label}:{
  time:number | string;
  label : string;
}) => {
  return (
    <div className="w-[57px] h-[28px] md:w-[105px] md:h-[40px] bg-[#FFF5E9] flex items-center justify-center rounded-[14px] md:rounded-[24px] md:ml-4">
      <p className="font-bold text-[12px] md:text-[20px] leading-[16px] md:leading-[28px] text-[#FF951D]">{time}
        <span className="text-[8px] md:text-[14px] leading-[10px] md:leading-[10px]">{" "}{label}</span>
      </p>
    </div>
  )
}

export default TimeLabel;
