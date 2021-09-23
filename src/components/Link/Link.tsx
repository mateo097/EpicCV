import './Link.css'
import { ReactNode } from "react"


interface LinkProps {
    href?: string
    children?: ReactNode
    icon?: ReactNode
    iconStyle?: "gray" | "white"
}
const Link = ({ href, children, icon, iconStyle }: LinkProps) => {
    return (
        
            <a href={href} className="weight-light flex align-center">
                <i className={`m-r-min size-little color-${iconStyle} `}>{icon}</i>
                {children}
            </a>
       

    )
}

export default Link