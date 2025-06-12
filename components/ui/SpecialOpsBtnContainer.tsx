import { getSpecOps } from "@/util/data"
import { View, StyleSheet } from "react-native"
import Button from "../Button"

export default function SpecialOpsBtnContainer() {
  const specialOpsBtns = getSpecOps()
  // needs styling
  return (
    <View style={styles.container}>
      {specialOpsBtns && specialOpsBtns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10
  }
})
