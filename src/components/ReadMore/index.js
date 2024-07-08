// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Caption,
  Image,
  Text,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMoreInput, setMoreInput] = useState(false)

  const onClickButton = () => {
    setMoreInput(prevState => !prevState)
  }

  const buttonText = readMoreInput ? 'Read Less' : 'Read More'

  const readMoreText = readMoreInput ? reactHooksDescription.slice(171) : ''

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Caption>Hooks are a new addition to React</Caption>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Text>
        {reactHooksDescription.slice(0, 171)}
        {readMoreText}
      </Text>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default ReadMore
