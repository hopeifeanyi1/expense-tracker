import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button, Alert } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';

export default function AllExpensesScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  const handleDeleteExpense = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this expense?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => setExpenses((prev) => prev.filter((expense) => expense.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            onDelete={() => handleDeleteExpense(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No expenses added yet.</Text>}
      />
      <Button title="Add Expense" onPress={() => navigation.navigate('AddExpense', { setExpenses })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});
