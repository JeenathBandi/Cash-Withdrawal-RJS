// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, id, onChangeBalance} = props
  const {value} = denominationsList

  const onChooseDenomination = () => onChangeBalance(id)

  return (
    <li>
      <button type="button" className="btn" onClick={onChooseDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
