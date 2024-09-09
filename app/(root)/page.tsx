
import React from 'react';
import HeaderBox from '../components/HeaderBox';
import TotalBalanceBox from '../components/TotalBalanceBox';
import RightSidebar from '../components/RightSidebar'

const Home = () => {
const loggedIn={firstName:'Sujal', lastName:"Gupta", email:"sujalgupta1412@gmail.com"}

  return (
    
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'} 
          subtext="Access and manage your Accounts Transaction Efficiently"/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.50} />
        </header>
        Recent Transactions
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  )
}

export default Home
