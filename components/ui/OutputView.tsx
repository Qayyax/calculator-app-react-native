import { StyleSheet, Text, ScrollView } from "react-native"

type Props = {
  value?: string[];
}

export default function OutputView({ value }: Props) {
  return (
    // need to chage to FlatList for better view
    <ScrollView contentContainerStyle={styles.container} horizontal>
      <Text style={styles.text}>{value}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBlockColor: 'blue',
    borderWidth: 5
  },
  text: {
    color: '#fff',
    fontSize: 70,
  }
})
