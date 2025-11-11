import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-gray-800 shadow-inner mt-8'>
      <div className='container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <h3 className='text-lg font-semibold text-white'>เกี่ยวกับเรา</h3>
          <p className='text-sm text-gray-600 text-white'>Refresh Cafe ให้บริการกาแฟคุณภาพ พร้อมบรรยากาศอบอุ่น</p>
        </div>
        <div>
          <h3 className='text-lg font-semibold text-white'>ติดต่อ</h3>
          <ul className='text-sm text-gray-600 text-white'>
            <li className='text-white'>Facebook: /refreshcafe</li>
            <li>Line: @refresh</li>     
          </ul>
        </div>
        <div className='text-right text-white'>
          <p className='text-sm text-gray-500 text-white'>&copy; {new Date().getFullYear()} Refresh Cafe</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer