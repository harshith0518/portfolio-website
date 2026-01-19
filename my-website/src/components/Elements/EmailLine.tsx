import { BiLogoGmail } from "react-icons/bi";

type emailProps = {
    toShow:string,
    mailId:string
}

const EmailLine = ({toShow, mailId}: emailProps) => {
    return <div className="group flex items-center justify-center gap-2 w-full">

  {/* Label text (collapses INTO icon) */}
  <span
    className="
      mt-2 font-semibold
      overflow-hidden whitespace-nowrap
      max-w-[140px] opacity-100
      transition-all duration-500 ease-in-out
      group-hover:max-w-0
      group-hover:opacity-0
      group-hover:translate-x-2
    "
  >
    {toShow} -
  </span>

  <a
    href="mailto:bsharshith1808@gmail.com"
    className="
      flex items-center
      mt-2 text-base font-light
      underline underline-offset-4
      hover:opacity-90
    "
  >
    {/* Icon (acts as the core) */}
    <BiLogoGmail
      className="
        text-xl mr-1
        transition-all duration-700 ease-in-out
        group-hover:rotate-[360deg]
        group-hover:scale-110 mt-0.5
      "
    />

    {/* Email text (emerges FROM icon) */}
    <span
      className="
        overflow-hidden whitespace-nowrap
        max-w-0 opacity-0 translate-x-[-8px]
        transition-all duration-700 ease-in-out
        group-hover:max-w-[260px]
        group-hover:opacity-100
        group-hover:translate-x-0
      "
    >
      {mailId}
    </span>
  </a>
</div>
};


export default EmailLine;