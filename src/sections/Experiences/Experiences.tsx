import { TimeCard } from '../../components'
import info from '../../assets/en.json'

const Experiences = () => {
    return (
        <section>
            {
                info.CV.EXPERIENCE.map((exp: any) => {
                    return (
                        <TimeCard
                            title={exp.TITLE}
                            period={exp.PERIOD}
                            description={exp.DESCRIPTION}
                            activitiesList={exp.ACTIVITIES}
                            tecnologiesList={exp.TECNOLOGIES}
                            company={exp.COMPANY}
                        />
                    )
                })
            }


        </section>
    )
}

export default Experiences