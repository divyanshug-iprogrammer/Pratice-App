// import React, { useEffect, useRef } from 'react'
// import { View ,Text, Animated, Dimensions} from 'react-native';

// const stringArray = [
//     "The quick brown fox jumps over the lazy dog",
//     "A journey of a thousand miles begins with a single step",
//     "To be or not to be, that is the question",
//     "All that glitters is not gold",
//     "The only thing we have to fear is fear itself",
//     "In the end, we will remember not the words of our enemies, but the silence of our friends",
//     "I think, therefore I am",
//     "That's one small step for man, one giant leap for mankind",
//     "The greatest glory in living lies not in never falling, but in rising every time we fall",
//     "Life is what happens when you're busy making other plans"
//   ];
// const windowWidth = Dimensions.get('window').width;
// function Marquee() {
//     const marqueeStrings = useRef(new Animated.Value(0)).current;
//     const marqueeStrings2 = useRef(new Animated.Value(-windowWidth)).current;
//     // const textWidth = windowWidth * 2; 
//     useEffect(() => {
//         // marqueeStrings.setValue(-textWidth);
//         Animated.loop(
//             // marqueeStrings.setValue(0),
//             // marqueeStrings2.setValue(-windowWidth),
//             Animated.sequence([
//                 Animated.timing(marqueeStrings,{
//                     toValue : windowWidth,
//                     duration : 4000,
//                     useNativeDriver : true
//                 }),
//                 Animated.timing(marqueeStrings2,{
//                     toValue : windowWidth,
//                     duration : 4000,
//                     useNativeDriver : true
//                 })
//             ])
//         ).start()
//     },[])
    
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <Text style={{ color: "black", }}>Marquee Effect</Text>
//             <Animated.View style={{ backgroundColor: "#4a060f", height: 50, width: windowWidth,alignItems : "center",justifyContent : "center" }} >
//                 <Animated.Text style = {{textAlign : "center",transform : [{translateX : marqueeStrings}]}}>The quick brown fox jumps over the lazy dog</Animated.Text>
//                 <Animated.Text style = {{textAlign : "center",transform : [{translateX : marqueeStrings2}]}}>4444444444</Animated.Text>
//             </Animated.View>
//         </View>
//     )
// }

// export default Marquee

// import React, { useEffect, useRef } from 'react';
// import { View, Text, Animated, StyleSheet, Dimensions,Easing } from 'react-native';

// const { width } = Dimensions.get('window');

// const Marquee = () => {
//   const translateX = useRef(new Animated.Value(width)).current;

//   useEffect(() => {
//     console.log("translateX",translateX)
//     const animation = Animated.loop(
//       Animated.timing(translateX, {
//         toValue: -width,
//         duration: 10000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//         isInteraction: false,
//       })
//     );

//     animation.start();
//   }, [translateX]);

//   return (
//     <View style={styles.container}>
//       <Animated.Text style={[styles.text, { transform: [{ translateX : translateX }] }]}>
//         The quick brown fox jumps over the lazy dog
//       </Animated.Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     overflow: 'hidden',
//     width: '100%',
//     backgroundColor: 'red', // Adjust the background color as needed
//   },
//   text: {
//     fontSize: 20, // Adjust the font size as needed
//     whiteSpace: 'nowrap', // Ensure the text doesn't wrap
//   },
// });

// export default Marquee;

// import React, { useEffect, useRef } from 'react';
// import { View, Text, Animated, StyleSheet, Dimensions,Easing } from 'react-native';

// const { width } = Dimensions.get('window');

// const Marquee = () => {
//   const translateX = useRef(new Animated.Value(100)).current;
//   const string2 = useRef(new Animated.Value(width)).current;

//   useEffect(() => {
//     Animated.loop(
//         Animated.timing(translateX,{
//             toValue : -width,
//             duration : 5000,
//             useNativeDriver : true,
//             easing : Easing.linear
//         })
//     ).start()
    
//   },[translateX])

//     console.log("translateX",translateX)
//   return (
//     <View style={styles.container}>
//       <Animated.View style={{flexDirection: 'row' }}>
//         <Animated.Text style={[styles.text,{marginRight : 20,transform: [{ translateX : translateX }]}]}>The quick brown fox jumps over the lazy dog</Animated.Text>
//         <Animated.Text style = {{fontSize: 20, whiteSpace: 'nowrap',transform: [{ translateX : translateX }]}}>The quick brown fox jumps over the lazy dog</Animated.Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     overflow: 'hidden',
//     width: width,
//     backgroundColor: 'red', // Adjust the background color as needed
//   },
//   text: {
//     fontSize: 20, // Adjust the font size as needed
//     whiteSpace: 'nowrap', // Ensure the text doesn't wrap
//   },
//   spacing: {
//     width: 20, // Adjust the spacing between the duplicated strings as needed
//   },
// });

// export default Marquee;


// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated, Dimensions,Easing } from 'react-native';

// const { width } = Dimensions.get('window');
// const textWidth = width * 2; // Adjust based on your text length

// const Marquee = () => {
//   const stringOne = useRef(new Animated.Value(width)).current;
//   const stringTwo = useRef(new Animated.Value(width/2)).current;

//   useEffect(() => {
//     Animated.loop(
//         //   Animated.delay(1000),
//           Animated.timing(stringOne, {
//             toValue: -width,
//             duration: 3000,
//             useNativeDriver : true
//           }),
//       ).start()
      
    
//   }, [stringOne,stringTwo]);


//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[styles.marqueeContainer,{
//             transform: [{ translateX : stringOne }],
//           },]}>
//         <Animated.Text style={{fontSize: 20,whiteSpace: 'nowrap',marginRight : 20}}>The quick brown fox jumps over the lazy dog</Animated.Text>
//         <Animated.Text style={{fontSize: 20,whiteSpace: 'nowrap'}}>The quick brown fox jumps over the lazy dog</Animated.Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     overflow: 'hidden',
//     width: '100%',
//     backgroundColor : "red",
//   },
//   marqueeContainer: {
//     flexDirection: 'row',
//     marginRight : 20,
//   },
//   text: {
//     fontSize: 20,
//     whiteSpace: 'nowrap',
//   },
// });

// export default Marquee;

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

const { width } = Dimensions.get('window');

const Marquee = () => {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    const animate = () => {
      translateX.setValue(0);
      Animated.timing(translateX, {
        toValue: -width*1.17,
        duration: 3000, // Adjust duration for speed
        useNativeDriver: true,
        easing: Easing.linear,
        isInteraction: false,
      }).start(() => animate());
    };

    animate();
  }, [translateX]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.marqueeContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Text style={styles.text}>The quick brown fox jumps over the lazy dog</Text>
        <View style={styles.spacing} />
        <Text style={styles.text}>The quick brown fox jumps over the lazy dog</Text>
        <View style={styles.spacing} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
    backgroundColor: 'red', // Adjust the background color as needed
  },
  marqueeContainer: {
    flexDirection: 'row',
    width: width * 2, // Ensure the container is wide enough to fit multiple strings
  },
  text: {
    fontSize: 20, // Adjust the font size as needed
    whiteSpace: 'nowrap', // Ensure the text doesn't wrap
  },
  spacing: {
    width: 20, // Adjust the spacing between the duplicated strings as needed
  },
});

export default Marquee;


