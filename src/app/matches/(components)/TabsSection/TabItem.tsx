import { DateLinkProps } from "@/constants/interfaces/interfaces";

const DateLink: React.FC<DateLinkProps> = ({ label, onClick, isActive }) => (
    <a
        onClick={onClick}
        className={`font-IranSans text-nowrap min-w-20 text-lg ml-6 text-center ${isActive && 'border-b-[5px]'} border-TextGreen pb-3`}
    >
        {label}
    </a>
);

export default DateLink