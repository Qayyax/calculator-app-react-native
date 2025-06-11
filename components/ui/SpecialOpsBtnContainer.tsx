import { getSpecOps } from "@/util/data"
import { View } from "react-native"
import Button from "../Button"

export default function SpecialOpsBtnContainer() {
  const specialOpsBtns = getSpecOps()
  // needs styling
  return (
    <View>
      {specialOpsBtns && specialOpsBtns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}
