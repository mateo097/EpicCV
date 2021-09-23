import './Card.css'
interface CardProps {
    image?:string
}

const Card = ({image}: CardProps) => {
    return( 
        <div className="card-container square shadow ">
            <img src={image} alt="" className=""/>
            <div className="flex column align-center content-around">
                <p className="size-small">TITULO</p>
                <p className="size-small weight-light" >20/20/2021 - ACTUALIDAD</p>
            </div>
        </div>
      
    )
}

export default Card