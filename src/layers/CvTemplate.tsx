import { Container, Header, Title } from "../components"
import { MoreInformation, Abilities, Experiences, Formation } from "../sections"
import './CvTemplate.css'

const CvTemplate = () => {
  return (
    <Container>
      <Header />
      <div className="cv-body p1 color-primary">
        <div>
          <Title >Experience</Title>
          <Experiences />
          <Title >Formation</Title>
          <Formation />
        </div>
        <div>
          <Title >Abilities</Title>
          <Abilities />
          <Title>About me</Title>
          <MoreInformation />
        </div>
      </div>
    </Container>
  )
}

export default CvTemplate