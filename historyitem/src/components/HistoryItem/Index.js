import './Index.css'

const Index = props => {
    const {historyDetails, deleteHistory} = props
    
    const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

const onDelete = () => {
        deleteHistory(id)
    }

    return (
        <li className="list-item">
            <div className="domain-icon-container">
                <div className='domain-container'>
                <p className="time">{timeAccessed}</p>
                <div className="logo-container">
                <img src={logoUrl} alt={title} className="icon"/>
            <h1 className="domain-name">{title}</h1>
            <p className="domain-url">{domainUrl}</p>
           
                </div>
                </div>
                <button className="delete-button" type="button" onClick={onDelete} testid="onDelete">
                <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" className="del-img"/>
            </button>
            </div>
            
           
            
            
           
            
            
        </li>
    )
}
export default Index