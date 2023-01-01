import React from 'react'
import Logo from '../assets/Logo.png'
import { BiHomeAlt, BiGridAlt, BiCreditCardAlt, BiUser, BiCalculator } from 'react-icons/bi'
import { RiSettings2Line } from 'react-icons/ri'

const Sidebar = () => {
    const menu = [
        { name: "Home", icon: <BiHomeAlt /> },
        { name: "Account", icon: <BiGridAlt /> },
        { name: "Cards", icon: <BiCreditCardAlt /> },
        { name: "Contacts", icon: <BiUser /> },
        { name: "Loan Calculator", icon: <BiCalculator /> },
        { name: "Setting", icon: <RiSettings2Line /> },
    ]

    const scheduledPayments = [
        { name: "Monthly Rent", color: 'border-biru' },
        { name: "Food Payment", color: 'border-merah' },
        { name: "Utility Bills", color: 'border-hijau' },
    ]

    return (
        // Container
        <div className='w-[17%] min-h-screen px-10 text-gray-400 border-r border-gray-200'>
            <div className='pt-8 pb-16'>
                <img src={Logo} alt="Logo Lupinsky Banking" />
            </div>

            {/* Menu Container */}
            <div className='mb-16'>
                <h4 className='mb-4 text-md text-primary'>Menu</h4>
                <ul>
                    {menu.map((val, index) => {
                        return (
                            <li key={index} className='flex flex-row items-center mb-5 text-sm'>
                                <div className='mr-4 text-2xl'>{val.icon}</div>
                                <div>{val.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Scheduled Payments Container */}
            <div>
                <h4 className='mb-5 text-md text-primary'>Scheduled Payments</h4>
                <ul>
                    {scheduledPayments.map((val, index) => {
                        return (
                            <li key={index} className="flex flex-row items-center pl-2 mb-5">
                                <div className={`w-4 h-4 mr-4 border rounded-full opacity-100 ${val.color}`}></div>
                                <div className='text-sm'>{val.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar