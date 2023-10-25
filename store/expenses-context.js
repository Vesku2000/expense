import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: '1e',
        description: 'couple pair of shoes',
        amount: 69.99,
        date: new Date('2021-12-19')
    },
    {
        id: '2e',
        description: 'stylish handbag',
        amount: 129.99,
        date: new Date('2021-11-25')
    },
    {
        id: '3e',
        description: 'men\'s watch',
        amount: 299.99,
        date: new Date('2022-01-05')
    },
    {
        id: '4e',
        description: 'women\'s scarf',
        amount: 39.99,
        date: new Date('2022-02-14')
    },
    {
        id: '5e',
        description: 'leather wallet',
        amount: 79.99,
        date: new Date('2022-03-20')
    },
    {
        id: '6e',
        description: 'sunglasses',
        amount: 149.99,
        date: new Date('2022-04-30')
    }
]
    
export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) { 
    switch (action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id );
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = {...updateExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updateItem;
            return updatedExpenses;
        case 'DELETE':
            default:
            return state
    }
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData){
        dispatch({ type: 'ADD ', payload: expenseData });
    }

    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData){
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData }});
    } 
    
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;