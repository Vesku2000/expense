import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({expenses, expensesPeriod}) {
    return  <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,

    }
})