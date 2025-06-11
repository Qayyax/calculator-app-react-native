import Button from "@/components/Button";
import Hamburger from "@/components/Hamburder";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const mockData = [
    { label: "1", type: 'primary' },
    { label: "2", type: 'primary' },
    { label: "3", type: 'primary' },
    { label: "4", type: 'primary' },
    { label: "5", type: 'primary' },
    { label: "6", type: 'primary' },
    { label: "7", type: 'primary' },
    { label: "8", type: 'primary' },
    { label: "9", type: 'primary' },
    { label: "0", type: 'primary' },
    { label: "\u{00F7}", type: 'operators' },
    { label: "\u{00D7}", type: 'operators' },
    { label: "-", type: 'operators' },
    { label: "+", type: 'operators' },
    { label: "=", type: 'operators' },
    { label: "AC", type: 'specialOperators' },
    { label: "\u{207A} \u{2215} \u{208B}", type: 'specialOperators' },
    { label: "%", type: 'specialOperators' },
  ]
  // the whole page is a flex box
  // flex 1/3 something like that
  // would break this index page as well into components
  return (
    <SafeAreaView style={styles.container}>
      {/* top half 1/3 */}
      <Hamburger onPress={() => alert('I was clicked')} />
      {/* 2/3 */}
      <View style={styles.allButtonContainer}>
        <View style={styles.buttonContainer}>
          {mockData && mockData.map(item => (
            <Button key={item.label} text={item.label} type={item.type as 'primary' | 'operators' | 'specialOperators'} onPress={() => alert('I was clicked')} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  textStyle: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  allButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  }

})


/*
 * top left has the hamburger
 * bottom half has the screen
 * */


/*
 * there is the main screen which is dark right
 * the text is white
 * Then there are the button components
 * they would take a function prop too as well
 * then at the top left of the page there is an hamburger
 * The hamburger opens a modal from the buttom with an animation
 * we would get the hamburger modal later
 * the button on the bottom left of the screen opens up another modal
 * */

