import Hamburger from "@/components/Hamburder";
import OperatorsBtnContainer from "@/components/ui/OperatorsBtnContainer";
import PrimaryBtnContainer from "@/components/ui/PrimaryBtnContainer";
import SpecialOpsBtnContainer from "@/components/ui/SpecialOpsBtnContainer";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // the whole page is a flex box
  // flex 1/3 something like that
  // would break this index page as well into components
  return (
    <SafeAreaView style={styles.container}>
      {/* top half 1/3 */}
      <Hamburger onPress={() => alert('I was clicked')} />
      {/* 2/3 */}
      <View>
        <View >
          <SpecialOpsBtnContainer />
          <PrimaryBtnContainer />
        </View>
        <View>
          <OperatorsBtnContainer />
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

