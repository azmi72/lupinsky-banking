import React from 'react'
import CardVisa from './RightContent/CardVisa';
import TransactionList from './RightContent/TransactionList';

const RightNav = () => {
    return (
        // Container
        <section className="w-[28%] bg-gray-100 rounded-tl-[48px] px-12">
            <CardVisa />
            <TransactionList />
        </section>
    )
}

export default RightNav
