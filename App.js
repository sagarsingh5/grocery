import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';

export default function App() {
  const [data, setData] = useState([
    'milk',
    'bread',
    'egg',
    'sauce',
    'cream',
    'oil',
  ]);
  const [text, setText] = useState('');

  // useEffect(() => {
  const filteredData = data.filter(item => {
    return item.toLowerCase().includes(text.toLowerCase());
  });
  const extra = ['apple', 'orange', 'banana', 'patato'];
  const addItem = () => {
    setData(prevData => [
      ...prevData,
      extra[Math.floor(Math.random() * extra.length)],
    ]);
  };
  // }, [text])
  // console.log(filteredData);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          style={{flex: 1}}
          onChangeText={e => setText(e)}
          placeholder="Search"
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />
      <Button title="Add" onPress={addItem} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    width: '80%',
    alignSelf: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});
