// Write your code here
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, key, onChangeBalance} = props
  const {value, id} = denominationsList

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

