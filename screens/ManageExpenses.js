import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';

function ManageExpenses( {route, navigation } ){

    const editedExpenseId = route.params?.expenseID;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing]);

    function deleteExpensesHandeler(){
        navigation.goBack();
    }

    function CancelHandler(){
        navigation.goBack();
    }

    function COnfirmHandler(){
        navigation.goBack();
    }

    return <View style={styles.container}>
        <View style={styles.buttons}>
            <Button style={styles.button} mode="flat" onPress={CancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={COnfirmHandler}>
                {isEditing ? 'Update' : 'Add'}
                </Button>
        </View>
        {isEditing && <View style={styles.deleteContainer}>
            <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpensesHandeler}/>
            </View>
            }
    </View>
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    }
})