import { View, Text, FlatList } from "react-native";

function ExpensesOutput({expenses}) {
    return  <View>
        <View>
            <Text>Last 7</Text>
            <Text>199€</Text>
        </View>
        <FlatList />
    </View>
}

export default ExpensesOutput;