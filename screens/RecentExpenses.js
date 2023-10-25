import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";


function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
            const today = new Date();
            
    })
    return <ExpensesOutput expensesPeriod="Last 7 Days"/>
}

export default RecentExpenses;