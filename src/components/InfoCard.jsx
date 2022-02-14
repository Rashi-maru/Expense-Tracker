import React from 'react'

const isIncome=Math.round(Math.random());  //so that 50% times incomes, 50%times expense it shows in try saying...statement

const InfoCard = () => {
    return (
        <div style={{textAlign: 'center', padding: '0 10%', color: '#3f51b5'}}>
            Try saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '} 
            for {isIncome ? 'Amount 100 ' : 'Amount 50 '}
            in Category {isIncome ? 'Business ' : 'House '} 
            for next {isIncome ? 'Monday ' : 'Tuesday '}
        </div>
    )
}

export default InfoCard
