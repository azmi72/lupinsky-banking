import React from 'react'
import { BiUser } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr'
import dp from '../../assets/DP Azmi.png'
import visa from '../../assets/visa.png'

const CardVisa = () => {
    return (
        <section>
            <div className="flex items-center justify-end mt-8 space-x-9">
                <GrNotification size={20} />
                <BiUser size={20} />
                <img src={dp} alt='user' className="w-8 h-8 rounded-full object-cover" />
            </div>
            <div className="card mt-9">
                <div className="relative px-5 py-6 text-white tracking-wider">
                    <h2 className="text-lg font-semibold">Azmi Ali</h2>
                    <div className="space-y-1 text-sm font-light mt-10">
                        <h4>Amazon Platinum</h4>
                        <h4>2522 <span className="text-4xl leading-[0]">.... ....</span> 2026</h4>
                        <div className="flex justify-between pt-1">
                            <h3 className="text-md font-semibold">Rp. 7.226.000</h3>
                            <img src={visa} alt="visa" className="h-4" />
                        </div>
                    </div>
                </div>
            </div>
            <button className="py-3 border rounded border-indigo-300 text-indigo-300 border-dashed w-full mt-6">
                Add new card
            </button>
        </section>
    )
}

export default CardVisa