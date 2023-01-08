
import './expense.css'
function ExpenseItem(){
    const expensedes='Car Insurance'
    const expensecost='RS.2150'
    const location='Hyderbad'



    return (<div><h1>EXPENSE LIST</h1> 
    <div className='expense-item'>
    <div><h2>{location}</h2></div>

        <div className='expense-item__description'><h2>{expensedes}</h2> </div>

        <div className='expense-item__price'>{expensecost}</div>
    </div>
    </div>)
}

export default ExpenseItem