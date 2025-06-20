import Hamburger from "@/components/Hamburder";
import BtnsContainer from "@/components/ui/BtnContainer";
import OutputView from "@/components/ui/OutputView";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { calculateExpression } from "@/util/calculation";

export default function Index() {
  const [value, setValue] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === "AC") {
      if (isAnswered) {
        setValue("");
        setIsAnswered(false)
      }
      else if (value.length > 0) {
        // so the thing is, when there is answer on the screen, 
        // it should clear, 
        // so there would be another state, when answer is swapped with value
        setValue(prev => prev.slice(0, -1))
      } else {
        setValue("");
      }
    } else if (key === '=') {
      const answer = calculateExpression(value)
      setValue(answer)
      // to ensure pressing = on 5* or 3+ (things like that)
      // doesn't trigger AC to clear
      if (/\d$/.test(answer)) setIsAnswered(true)

    } else {
      setValue(prev => prev += key)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* top half 1/3 */}
      <View style={styles.hamburger}>
        <Hamburger onPress={() => alert('I was clicked')} />
      </View>
      {/* 2/3 */}
      <View style={styles.buttonContainer}>
        <OutputView value={value} />
        <BtnsContainer onPress={handleKeyPress} />
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
 * Change Button to Touchable maybe, "check online about it"
 * The hamburger opens a modal from the buttom with an animation
 * we would get the hamburger modal later
 * the button on the bottom left of the screen opens up another modal
 * */

