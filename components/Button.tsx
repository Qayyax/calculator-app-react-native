import { StyleSheet, Pressable, Text, useWindowDimensions } from "react-native";

type Props = {
  text: string;
  onPress: () => void
  type: 'primary' | 'operators' | 'specialOperators';
}

export default function Button({ text, onPress, type }: Props) {
  const bgColor = type === 'primary' ? '#1B1A18' : type === 'operators' ? '#DE8D24' : '#544D45';
  const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={onPress}
      // depending on the type, the backgroud color would be selected
      style={[styles.buttonContainer, { backgroundColor: bgColor, width: width / 5 }]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    // borderRadius: '50%',
    // padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
})
