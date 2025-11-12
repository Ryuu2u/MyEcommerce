import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-gray-800 shadow-inner mt-8'>
      <div className='container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <h3 className='text-lg font-semibold text-white'>เกี่ยวกับเรา</h3>
          <p className='text-sm text-gray-600 text-white'>TechHome ให้บริการเครื่องใช้ไฟฟ้าคุณภาพ</p>
        </div>
        <div>
          <h3 className='text-lg font-semibold text-white'>ติดต่อ</h3>
          <ul className='text-sm text-gray-600 text-white'>
            <li className='text-white'>Facebook: /TechHome</li>
            <li>Line: @TechHome</li>     
          </ul>
        </div>
        <div className='text-right text-white'>
          <p className='text-sm text-gray-500 text-white'>&copy; {new Date().getFullYear()} TechHome</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer