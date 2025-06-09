import Button from "@/components/Button";
import { Text, StyleSheet, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const mockData = [
    { label: "1", color: 'blue' },
    { label: "2", color: 'grey' },
    { label: "3", color: 'grey' },
    { label: "4", color: 'grey' },
    { label: "5", color: 'grey' },
    { label: "6", color: 'grey' },
    { label: "7", color: 'grey' },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Edit app/index.tsx to edit this screen.</Text>
      <View style={styles.buttonContainer}>
        {mockData && mockData.map(item => (
          <Button key={item.label} text={item.label} color={item.color} onPress={() => alert('I was clicked')} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  textStyle: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10
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

