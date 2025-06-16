import { getAllButton } from "@/util/data"
import { View, StyleSheet, FlatList } from "react-native"
import Button from "../Button"

type Props = {
  onPress: (key: string) => void
}

export default function BtnsContainer({ onPress }: Props) {
  const btns = getAllButton()
  return (
    <View style={styles.container}>
      <FlatList
        data={btns}
        renderItem={({ item }) => <Button text={item.label} type={item.type} onPress={onPress} />}
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

