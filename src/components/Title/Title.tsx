import { Children, ReactNode } from "react"

interface TitleProps {
    children: ReactNode
    className?: string | undefined
}

const Title = ({ children, className }: TitleProps) => {
    return (
        <div className={` border-bottom m1 ${className}` }>
            <p className="size-little">{children}</p>

        </div>

    )
}

export default Title