import { useTheme } from "../../contexts/ThemeContext";

type Interest = {
  title: string;
  desc: string;
};

type InterestCardProps = {
  heading:string;
  interestArr: Interest[];
};



const InterestCard = (interestArrCard : InterestCardProps) => {
    const {theme} = useTheme();
    
    return <>
    
        <div
  className={`
    rounded-2xl p-6 border backdrop-blur-md
    transition-all duration-300
    ${
      theme === "dark"
        ? "bg-neutral-400/20 text-neutral-300 hover:bg-neutral-500/30 shadow-md shadow-gray-700"
        : "bg-neutral-300/20 text-neutral-700 hover:bg-neutral-500/10 shadow-md shadow-neutral-400/20"
    }
  `}
>
  <span className="block text-sm font-semibold mb-5 opacity-80">
    {interestArrCard.heading}
  </span>

  <ul className="space-y-4">
    {interestArrCard.interestArr.map((item:Interest) => (
      <li
        key={item.title}
        className="
          group relative pl-4
          transition-all duration-300
        "
      >
        {/* Accent bar */}
        <span
          className="
            absolute left-0 top-2 h-2 w-2 rounded-full
            bg-current opacity-50
            group-hover:opacity-90
          "
        />

        <p className="text-sm font-medium">
          {item.title}
        </p>

        <p className="text-xs opacity-75 leading-relaxed mt-1">
          {item.desc}
        </p>
      </li>
    ))}
  </ul>
</div>
    
    </>
};

export default InterestCard;