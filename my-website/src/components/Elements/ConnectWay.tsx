import type { IconType } from "react-icons/lib";

export type ConnectionProps = {
    href:string,
    ariaLabel:string,
    icon:IconType
}


const ConnectWay = ({href,ariaLabel,icon:Icon} : ConnectionProps) => {
    return <a
                href={href}
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label={ariaLabel}
              >
                <Icon
        className="text-2xl transition-transform duration-500
          hover:rotate-360
        "
      />
        </a>
};

export default ConnectWay;