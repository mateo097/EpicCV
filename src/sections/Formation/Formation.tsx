import { TimeCard } from '../../components'
import info from '../../assets/en.json'

const Formation = () => {
    return (
        <section>
            {
                info.CV.FORMATION.map((exp: any) => {
                    return (
                        <TimeCard
                            title={exp.TITLE}
                            period={exp.PERIOD}
                            description={exp.DESCRIPTION}
                            tecnologiesList={exp.TECNOLOGIES}
                            institution={exp.INSTITUTION}
                        />
                    )
                })
            }


        </section>
    )
}

export default Formation