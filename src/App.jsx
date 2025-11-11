import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BeverageCard from './components/BeverageCard'
import beverageList from './data/data'

const App = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto px-4 py-6 bg-light'>
        <h1 className='text-center text-2xl font-bold'>เครื่องใช้ไฟฟ้า</h1>
        <hr className='my-4' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {beverageList.map(b => (
            <BeverageCard key={b.id} {...b} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
