import ExpenseItem from './components/ExpenseItem.js'
function App() {
  const expenses=[
    {
    location:"Hyderbad",
    title:"Car Insurance",
    amount:'RS.1250'},

    {
      location:"Bangalore",
      title:'Food',
      amount:'RS.2000'
    },

    {
      location:"Agra",
      title:'Trip',
      amount:'RS.82000'
    },
    {
      location:"Petrol",
      title:'Fuel',
      amount:'RS.8000'
    }

  ]
 expenses.map((expenses)=>(console.log(expenses)))
  return (
    <div>
     {<h2> EXPENSE ITEMS</h2> }
  
     {expenses.map((e,index)=>
     
     <ExpenseItem key={index.toString()}
     location={expenses[index].location}
     title={expenses[index].title }
     amount={expenses[index].amount}>
     </ExpenseItem>)}

     {/* <ExpenseItem 
     location={expenses[1].location}
     title={expenses[1].title }
     amount={expenses[1].amount}>
     </ExpenseItem>

     <ExpenseItem 
     location={expenses[2].location}
     title={expenses[2].title }
     amount={expenses[2].amount}>
     </ExpenseItem> */}
     
    </div>
  );
}

export default App;
