import { getOperators } from "@/util/data"
import { View, StyleSheet } from "react-native"
import Button from "../Button"

export default function OperatorsBtnContainer() {
  const operatorBtns = getOperators()
  return (
    <View style={styles.container}>
      {operatorBtns && operatorBtns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexWrap: 'wrap'
  }
})
