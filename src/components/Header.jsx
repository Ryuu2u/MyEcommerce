import React from 'react'

const Header = () => {
    return (
        <header className='bg-dark from-neutral-400 to-white text-black shadow-lg p-3'>
            <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <h1 className='text-2xl font-bold text-white'>TechHome</h1>
                </div>
                <nav>
                    <ul className='flex space-x-6'>
                        <li><a href='' className='px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-700 transition decoration-none'>Home</a></li>
                        <li><a href='' className='px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-700 transition decoration-none'>About</a></li>
                        <li><a href='' className='px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-700 transition decoration-none'>Menu</a></li>
                        <li><a href='' className='px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-700 transition decoration-none'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header