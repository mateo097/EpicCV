import { ReactNode } from "react"

interface ChipProps{
    label?: string
    children?: ReactNode
}

const Chip = ({label, children}: ChipProps) => {
    return(
        <div className="back-secondary border-rounded weight-light m-min p-min color-white size-small ">
            {children} {label}
        </div>
    )
}

export default Chip