import { Chip } from '..'

import './TimeCard.css'
interface TimeCardProps {
    title?: string
    period?: string
    description?: string
    activitiesList?: string[]
    tecnologiesList?: string[] 
    institution?: string
    company?:string
}

const TimeCard = ({ title, period, description, activitiesList, tecnologiesList, institution, company }: TimeCardProps) => {
    return (
        <div className="timecard-container">
            <div className="timecard-timeline flex align-center justify-around column">
                <div className="timecard-timeline-circle border-circle border-bold flex align-center justify-around" />
                <div className="timecard-timeline-bar border-normal back-gray " />
            </div>
            <div className="timecard-information flex column">
                <div className="timecard-information-title ">
                    {title} <div className="size-small">{institution}{company}</div>
                    <div className="weight-light color-primary m-bot-1 size-small">
                        {period}
                    </div>
                </div>
                <div className="timecard-information-description">
                    <div className="weight-light">
                        {description}
                    </div>
                </div>
                {activitiesList ?
                    <div className="timecard-information-activities">
                        <div>Activities:</div>
                        <div className="p1 ">
                            {activitiesList.map((act: string, i: any) => {
                                return (
                                    <li key={i} className="weight-light ">{act}</li>
                                )
                            }
                            )
                            }
                       </div>
                    </div> : ""}
                <div className="timecard-information-tecnologies ">
                    <div className="timecard-information-tecnologies-title">Tecnologies:</div>
                    <div className="flex row justify-start wrap m-bot-1">
                        {
                            tecnologiesList?.map((tec: string) => {
                                return (
                                    <Chip>
                                        {tec}
                                    </Chip>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCard