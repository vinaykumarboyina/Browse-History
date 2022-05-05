import React from 'react'
import {Component} from 'react'
import Index from './components/HistoryItem/Index'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component{
  state={
    searchInput : "",
    historyList:initialHistoryList,
    isEmpty:false,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput:event.target.value})
  }

  emptyView = filteredData => {
    this.setState({historyList:filteredData, isEmpty:true})
  }

  getSearchResults = () => {
    const {historyList, searchInput} = this.state
    const searchResults = historyList.filter(each => each.title.includes(searchInput))
    if(searchResults === undefined){
      return this.emptyView()
    }
    return searchResults
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredData = historyList.filter(each => each.id !== id)
    if (filteredData.length === 0) {
        
      return this.emptyView(filteredData)
    }

    this.setState({historyList: filteredData})
  }

  renderHistoryView =()=>{
    const searchResults = this.getSearchResults()
    
    return (
      <ul className="history-list">
        {searchResults.map(eachHistory => (
          <Index
            key={eachHistory.id}
            historyDetails={eachHistory}
            deleteHistory={this.deleteHistory}
          />
        ))}
      </ul>
    )
  }

  renderEmptyHistoryView = () => {
    const {isEmpty} = this.state

    if (isEmpty) {
      return <p className="empty-view-txt">There is no history to show</p>
    }
    return null
  }

  render(){
    const {searchInput, isEmpty} = this.state
    console.log(isEmpty)
    
    return (
      <div className = "app-container">
        <nav className = "navbar">
          <div className="logo-search-container">
            <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="app logo" className="logo-image"/>
            <div className="search-container">
              <div className="search-icon-container">
                <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" className="search-icon"/>
              </div>
              <input type="search" className="search-input" value={searchInput} onChange={this.onChangeSearchInput}/>
            </div>
          </div>

        </nav>
        <div className="history-container">
        
            {isEmpty ? this.renderEmptyHistoryView() : this.renderHistoryView()
            }
        </div>
      </div>
    )
  }
}
export default App