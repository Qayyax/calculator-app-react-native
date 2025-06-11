import { getOperators } from "@/util/data"
import { View } from "react-native"
import Button from "../Button"

export default function OperatorsBtnContainer() {
  const operatorBtns = getOperators()
  // needs styling
  return (
    <View>
      {operatorBtns && operatorBtns.map(item => (
        <Button key={item.label} text={item.label} type={item.type} onPress={() => alert('I was clicked')} />
      ))}
    </View>
  )
}

