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
    <View style={styles.container}>
      <FlatList
        data={btns}
        renderItem={({ item }) => <Button text={item.label} type={item.type} onPress={() => alert('I was clicked')} />}
        keyExtractor={item => item.label}
        horizontal={false}
        numColumns={4}
        scrollEnabled={false}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

