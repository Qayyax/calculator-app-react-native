import { getAllButton } from "@/util/data"
import { View, StyleSheet, FlatList } from "react-native"
import Button from "../Button"

// type Props = {
//   type: 'operator' | 'primary' | 'specialOperator';
//   direction: 'row' | 'column';
// }

export default function BtnsContainer() {
  const btns = getAllButton()
  return (
    <FlatList
      data={btns}
      renderItem={({ item }) => <Button text={item.label} type={item.type} onPress={() => alert('I was clicked')} />}
      keyExtractor={item => item.label}
      horizontal={false}
      numColumns={4}
      scrollEnabled={false}
    />
  )
}

// <View style={styles.container}>
//       {btns && btns.map(item => (
//         <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
//       ))}
//     </View>

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})

