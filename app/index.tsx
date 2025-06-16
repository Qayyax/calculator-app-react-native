import Hamburger from "@/components/Hamburder";
import BtnsContainer from "@/components/ui/BtnContainer";
import OutputView from "@/components/ui/OutputView";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* top half 1/3 */}
      <View style={styles.hamburger}>
        <Hamburger onPress={() => alert('I was clicked')} />
      </View>
      {/* 2/3 */}
      <View style={styles.buttonContainer}>
        <OutputView value="02020" />
        <BtnsContainer />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  hamburger: {
    flex: 1
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    borderBlockColor: 'red',
    borderWidth: 2,
    paddingHorizontal: 5,
  },
})

/*
 * The hamburger opens a modal from the buttom with an animation
 * we would get the hamburger modal later
 * the button on the bottom left of the screen opens up another modal
 * */

