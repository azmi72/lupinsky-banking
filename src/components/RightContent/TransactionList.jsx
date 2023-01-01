import React from 'react'
import { IoMdWater, IoMdCheckbox, IoMdClipboard, IoMdStar, IoMdNotifications } from 'react-icons/io'

const TransactionList = () => {
    const today = [
        {
            name: 'Water Bill',
            status: 'Unsuccessfully',
            price: '- Rp 80.000',
            textColor: 'text-red-600'
        },
    ];

    const yesterday = [
        {
            name: 'Income: Salary Oct',
            status: 'Pending',
            price: '+ Rp 6.000.000',
            textColor: 'text-primary'
        },
        {
            name: 'Electric Bill',
            status: 'Success',
            price: '- Rp 1.200.000',
            textColor: 'text-red-600'
        },
        {
            name: 'Income: Doi Transfers',
            status: 'Unsuccessfully',
            price: '+ Rp 500.000',
            textColor: 'text-primary'
        },
        {
            name: 'Internet Bill',
            status: 'Warning',
            price: '- Rp 50.000',
            textColor: 'text-red-600'
        },
    ];

    const bgColors = (status) => {
        switch (status) {
            case "Success":
                return "bg-blue-500";

            case "Pending":
                return "bg-teal-400";

            case "Warning":
                return "bg-yellow-500";

            default:
                return "bg-red-500";
        }
    };

    const icons = (status) => {
        switch (status) {
            case "Success":
                return <IoMdCheckbox/>;

            case "Pending":
                return <IoMdClipboard/>;

            case "Warning":
                return <IoMdStar/>;

            default:
                return <IoMdNotifications/>;
        }
    };

    return (
        <section className='w-full flex flex-col mt-10 h-[38%] overflow-y-scroll scrollbar-hide'>
            {/* Container Today */}
            <div>
                <h3 className='text-xs text-gray-400'>Today</h3>
                {today.map((val, index) => {
                    return (
                        <div key={index} className='flex flex-row items-center border-b py-2 mb-2'>
                            <div className='w-12 h-10 bg-indigo-800 flex justify-center items-center rounded-lg text-white mr-3'>
                                <IoMdWater />
                            </div>
                            <div className='flex flex-row w-full'>
                                <div className='flex-1'>
                                    <h2 className='text-sm font-medium'>{val.name}</h2>
                                    <h3 className='text-xs text-gray-400'>{val.status}</h3>
                                </div>
                                <div>
                                    <h1 className={`text-right text-md ${val.textColor}`}>{val.price}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Container Yesterday */}
            <div>
                <h3 className='text-xs text-gray-400 mt-5'>Yesterday</h3>
                {yesterday.map((val, index) => {
                    return (
                        <div key={index} className='flex flex-row items-center border-b py-2 mb-2'>
                            <div className={`w-12 h-10 ${bgColors(val.status)} flex justify-center items-center rounded-lg text-white mr-3`}>
                                {icons(val.status)}
                            </div>
                            <div className='flex flex-row w-full'>
                                <div className='flex-1'>
                                    <h2 className='text-sm font-medium'>{val.name}</h2>
                                    <h3 className='text-xs text-gray-400'>{val.status}</h3>
                                </div>
                                <div>
                                    <h1 className={`text-right text-md ${val.textColor}`}>{val.price}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TransactionList