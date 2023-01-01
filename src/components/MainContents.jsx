import React from 'react'
import { BiSearch, BiCreditCard, BiDoughnutChart, BiHomeHeart, BiWallet, BiEdit, BiTrash } from 'react-icons/bi'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import dp from '../assets/DP Azmi.png'

const MainContents = () => {

    // Plugin Swipeable
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='flex items-center px-4'><BiEdit size={20} color="white" /></div>
            </SwipeAction>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='flex items-center px-4'><BiTrash size={20} color="white" /></div>
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <section className="flex-1 w-[55%] bg-white px-16 ">
            <div className='w-full flex border border-gray-300 items-center py-3 px-3 mt-7 rounded-xl focus-within:border-primary'>
                <BiSearch className='mr-2' />
                <input type="text" className='flex-1 px-2 outline-none' placeholder='Search' />
            </div>

            <h1 className='text-xl text-primary my-8'>Welcome back, Azmi!</h1>

            <div className='flex flex-row space-x-6 '>
                <Card
                    icon={<BiCreditCard size={40} />}
                    bgColor="bg-fuchsia-600"
                    textColor="text-fuchsia-600"
                    label={
                        <span className='text-sm font-light tracking-wider'>
                            Transfer via <br /> card number
                        </span>
                    }
                />
                <Card
                    icon={<BiDoughnutChart size={40} />}
                    bgColor="bg-indigo-600"
                    textColor="text-indigo-600"
                    label={
                        <span className='text-sm font-light tracking-wider'>
                            Transfer to <br /> another bank
                        </span>
                    }
                />
                <Card
                    icon={<BiHomeHeart size={40} />}
                    bgColor="bg-amber-600"
                    textColor="text-amber-600"
                    label={
                        <span className='text-sm font-light tracking-wider'>
                            Transfer to <br /> the same bank
                        </span>
                    }
                />
                <Card
                    icon={<BiWallet size={40} />}
                    bgColor="bg-teal-600"
                    textColor="text-teal-600"
                    label={
                        <span className='text-sm font-light tracking-wider'>
                            Transfer to <br /> e-wallet
                        </span>
                    }
                />
            </div>

            {/* Card Contact */}
            <div className='mt-14 space-y-2 overflow-y-scroll h-[44%] scrollbar-hide'>
                {Array.from(Array(6)).map((val, index) =>
                    <div key={index} className='rounded-2xl bg-primary'>
                        <SwipeableList threshold={0.9} type={Type.IOS}>
                            <SwipeableListItem trailingActions={trailingActions()}>
                                <div className='bg-white p-4 rounded-2xl border border-gray-200 w-full flex'>
                                    <img src={dp} alt="dp" className='w-10 h-10 object-cover rounded-full mr-4' />
                                    <div className='text-sm'>
                                        <h2 className='text-gray-800'>Azmi</h2>
                                        <h3 className='font-light text-gray-500'>082123456789</h3>
                                    </div>
                                </div>
                            </SwipeableListItem>
                        </SwipeableList>
                    </div>
                )}
            </div>
        </section>
    )
}

function Card(props) {
    return (
        <div className={`w-1/4 h-36 rounded-xl ${props.bgColor} bg-opacity-10 ${props.textColor} p-4 flex flex-col justify-between`}>
            {props.icon}
            {props.label}
        </div>
    )
}

export default MainContents