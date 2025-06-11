import { StyleSheet, Pressable, Text } from "react-native";

type Props = {
  text: string;
  onPress: () => void
  type: 'primary' | 'operators' | 'special-function';
}

// rename this component 
// Change from color to type = 'Primary' | 'Secondary' | 'Function' >> something like that
export default function Button({ text, onPress, type }: Props) {
  return (
    <Pressable
      onPress={onPress}
      // depending on the type, the backgroud color would be selected
      style={[styles.buttonContainer]}
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
