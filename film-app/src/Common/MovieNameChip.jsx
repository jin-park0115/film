import { styled } from "styled-components";

const MovieNameChip = (props) => {
  const renderNumber = (id) => {
    const digit = 2;
    const numberString = id;

    if(numberString.length >= digit){
      return numberString
    }

    let result = '';

    for (let i = 0; i < digit - numberString.length; i++){
      result += '0'
    }

    return `${result}${numberString}`
  }

  return(
    <Chip>
      <NumberChip>
        <Number>{renderNumber(props.id)}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
    </Chip>
  )
}

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  font-weight: 700;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: chocolate;

`

const Number = styled.label`
  opacity: 1;
`

const Text = styled.label`
  margin: 0 8px 0 5px;
`

export default MovieNameChip