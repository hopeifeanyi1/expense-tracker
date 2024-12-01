import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function AddExpenseScreen({ route, navigation }) {
  const { setExpenses } = route.params;

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    if (!title || !amount || !date) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setExpenses((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        title,
        amount: parseFloat(amount),
        date,
      },
    ]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Expense Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
  },
});
