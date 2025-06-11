import { getPrimary } from "@/util/data"
import { View } from "react-native"
import Button from "../Button"

export default function PrimaryBtnContainer() {
  const primaryBtns = getPrimary()
  return (
    <View>
      {primaryBtns && primaryBtns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}
