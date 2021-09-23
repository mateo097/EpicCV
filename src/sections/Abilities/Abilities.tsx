import './Abilities.css'
import { LoadBar } from '../../components'
import info from '../../assets/en.json'

const Abilities = () => {
  return (
    <div className="abilities-container flex column justify-around m1">


      {
        info.CV.ABILITIES.map((ab: any) => {
          return (
            <div>
              <p>{ab.AREA}</p>
              {ab.LIST_OF_ABILITIES.map((item:string | any) => {
                return <LoadBar ability={item.ABILITIE} knowledgePercent={item.KNOWLEDGE_PERCENT} />
              })
              
              }
              
            </div>

          )
        })
      }



    </div>

  )
}

export default Abilities