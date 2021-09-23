import './Container.css'
import { ReactNode } from "react"

interface ContainerProps {
    children:ReactNode
}

const Container = ({children}:ContainerProps) => {
    return (
       <body className="m-body container-container shadow-big">
           {children}
       </body>
    )
}

export default Container