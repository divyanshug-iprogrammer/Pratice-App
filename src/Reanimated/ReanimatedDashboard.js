import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Button, Dimensions, TouchableOpacity, View, Text, useAnimatedValue } from 'react-native';
import { Svg, Circle, Rect } from 'react-native-svg';


const windowWidth = Dimensions.get('window').width;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function ReanimatedDashboard(props) {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const handlePress = () => {
    if (windowWidth < width.value) {
      width.value = withSpring(100);
      return
    }
    width.value = withSpring(width.value + 50);
  }

  const scaleIncrease = () => {
    if(scale.value > 1){
      scale.value = withSpring(1);
      props.navigation.navigate("ReanimatedEasingSquares")
      return
    }
    scale.value = withSpring(scale.value + 1);
  }

  const movingHorizontal = () => {
    if (windowWidth < translateX.value) {
      translateX.value = withSpring(0);
      return
    }
    translateX.value = withSpring(translateX.value  + 10);
  }

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));


  console.log("screenWidth", windowWidth)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
      <Animated.View
        style={[{width: width, height: 100, backgroundColor: 'violet', marginBottom: 10,},animatedStyles]}
          // transform: [{ translateX }]
      />
      <TouchableOpacity style = {{marginBottom : 10}} onPress={handlePress}><Text style = {{color : "black"}}>Increase Size</Text></TouchableOpacity>
      <TouchableOpacity style = {{marginBottom : 10}} onPress={movingHorizontal}><Text style = {{color : "black"}}>Moving Horizontal</Text></TouchableOpacity>
      <AnimatedTouchable style = {{justifyContent : "center",
        alignItems : "center", 
        marginTop : 20,
        height : 40,
        width : 150,
        backgroundColor : "yellow",
        borderRadius : 20,
        transform : [{scale}]}} onPress={scaleIncrease}>
        <Text style = {{color : "green",textAlign : "center"}}>Animated Button</Text>
      </AnimatedTouchable>
    </View>
  )
}

export default ReanimatedDashboard;