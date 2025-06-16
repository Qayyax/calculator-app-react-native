import { StyleSheet, Text, ScrollView } from "react-native"

type Props = {
  value?: string;
}

export default function OutputView({ value }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      <Text style={styles.text}>{value}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    borderBlockColor: 'blue',
    borderWidth: 5
  },
  text: {
    color: '#fff',
    fontSize: 70,
  }
})
