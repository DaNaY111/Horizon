import BalanceBox from '@/components/BalanceBox';
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'DaNaY',
    lastName: 'aa',
    email: 'example@gmail.com'
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
              type='greeting'
              title='Welcome'
              // user firstname(will be implemented later)
              user={loggedIn?.firstName || 'danay'}
              subtext='Access & manage your account and transactions efficiently.'
            />

            <BalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1004.59}
            />
        </header>

        RECENT TRANSACTIONS
      </div>

        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 207.50 }, { currentBalance: 1034.78 }]}
        />
    </section>
  )
}

export default Home 