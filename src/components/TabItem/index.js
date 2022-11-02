import './index.css'

const TabItem = props => {
  const {tabDetails, onSelectTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const classname = isActive ? 'selected' : 'not-selected'
  const selectTab = () => {
    onSelectTab(tabId)
  }

  return (
    <li className={`tab-list ${classname}`}>
      <button type="button" className="tab-button" onClick={selectTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
