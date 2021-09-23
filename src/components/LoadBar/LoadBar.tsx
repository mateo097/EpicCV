import './LoadBar.css'

interface LoadBarProps {
    knowledgePercent?: number
    ability?: string
}
const LoadBar = ({ ability, knowledgePercent }: LoadBarProps) => {
    const style = {
        width: `${knowledgePercent}%`
    }

    return (
        <div className="expand">
            <div className="load-bar-ability  m-bot-small weight-light" >{ability}</div>
            <div className="load-bar-background m1 border-normal ">
                <div className="load-bar-percent border-normal" style={style} /> 
            </div>
        </div>
    )
}

export default LoadBar