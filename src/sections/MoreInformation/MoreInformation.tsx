import './MoreINformation.css'
import info from '../../assets/en.json'



const MoreInformation = () => {
    return (
        <div className="flex column justify-between m1">

            {
                info.CV.OTHER_INFORMATION.map((data: any, i:number) => {
                    return (
                        <div>
                            <p key={i}>{data.TITLE}</p>
                            {data.LIST.map((element: any) => {
                                return (
                                    <p className="weight-light">{element}</p>
                                )
                            })}
                        </div>



                    )

                })
            }

        </div>
    )
}

export default MoreInformation