import Button from "@/components/Button";
import Hamburger from "@/components/Hamburder";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const mockData = [
    { label: "1", type: 'primary' },
    { label: "2", type: 'operators' },
    { label: "3", type: 'primary' },
    { label: "4", type: 'primary' },
    { label: "5", type: 'special-function' },
    { label: "6", type: 'primary' },
    { label: "7", type: 'primary' },
  ]

  // the whole page is a flex box
  // flex 1/3 something like that
  // would break this index page as well into components
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Edit app/index.tsx to edit this screen.</Text>
      <Hamburger onPress={() => alert('I was clicked')} />
      <View style={styles.allButtonContainer}>
        <View style={styles.buttonContainer}>
          {mockData && mockData.map(item => (
            <Button key={item.label} text={item.label} type={item.type as 'primary' | 'operators' | 'special-function'} onPress={() => alert('I was clicked')} />
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

