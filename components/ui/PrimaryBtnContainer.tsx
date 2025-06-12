import { getPrimary } from "@/util/data"
import { View, StyleSheet } from "react-native"
import Button from "../Button"

export default function PrimaryBtnContainer() {
  const primaryBtns = getPrimary()
  // needs styling
  return (
    <View style={styles.container}>
      {primaryBtns && primaryBtns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap'
  }
})
