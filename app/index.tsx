import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#fff',
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

