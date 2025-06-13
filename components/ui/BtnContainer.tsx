import { getAllButton } from "@/util/data"
import { View, StyleSheet } from "react-native"
import Button from "../Button"

// type Props = {
//   type: 'operator' | 'primary' | 'specialOperator';
//   direction: 'row' | 'column';
// }

export default function BtnsContainer() {
  const btns = getAllButton()
  console.log(btns)
  return (
    <View style={styles.container}>
      {btns && btns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})

