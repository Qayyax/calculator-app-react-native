import { useMemo } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native"
type Props = {
  value: string;
}

export default function OutputView({ value }: Props) {
  const valueArr = useMemo(() => value.split(""), [value])
  return (
    <View style={styles.container} >
      <FlatList
        data={valueArr}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        horizontal
        scrollEnabled
        contentContainerStyle={styles.flatList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBlockColor: 'blue',
    borderWidth: 5
  },
  flatList: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 70,
  }
})
