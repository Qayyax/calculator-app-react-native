import { StyleSheet, Pressable, Text } from "react-native";

type Props = {
  text: string;
  onPress: () => void
  color: string;
}

export default function Button({ text, onPress, color }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: '50%',
    // padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
})
