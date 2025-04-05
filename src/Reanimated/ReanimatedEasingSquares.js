import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

function ReanimatedEasingSquares() {
    const animatedTranslateEasingOut = useSharedValue(0);
    const animatedTranslateLinearOut = useSharedValue(0);
    const animatedTouchableScale = useSharedValue(1);
    const offset = useSharedValue(0);

    useEffect(() => {
        animatedTranslateEasingOut.value = withRepeat(
            withSequence(
                withTiming(140,{
                duration : 3000,
                easing : Easing.linear(Easing.quad)
            }),
            withTiming(-140,{
                duration : 3000,
                easing : Easing.inOut(Easing.quad)
            }),
            withTiming(0,{
                duration : 3000,
                easing : Easing.inOut(Easing.quad)
            })
            ),
            -1,
            true,
        )

        animatedTranslateLinearOut.value = withRepeat(
            withSequence(
                withTiming(140,{
                duration : 3000,
                easing : Easing.linear(Easing.quad)
            }),
            withTiming(-140,{
                duration : 3000,
                easing : Easing.linear(Easing.quad)
            }),
            withTiming(0,{
                duration : 3000,
                easing : Easing.linear(Easing.quad)
            })
            ),
            -1,
            true,
        )
    },[])

    const handlePress = () => {
        animatedTouchableScale.value = withSequence(
            withTiming(1.2,{duration : 500}),
            withTiming(1,{duration : 500}),
        )
    }

    const AnimatedTouchableComponent = useAnimatedStyle(() => {
        return({
            transform : [{scale : animatedTouchableScale.value}]
        })
    })
    

    const AnimatedStyleEasingOut = useAnimatedStyle(() => {
        return({
            transform: [{ translateX: animatedTranslateEasingOut.value }],
        })
    })

    const AnimatedStyleLinearOut = useAnimatedStyle(() => {
        return({
            transform: [{ translateX: animatedTranslateLinearOut.value }],
        })
    })

    const shakeStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
      }));
    

  return (
    <View style = {{justifyContent : "center",alignItems : "center"}}>
        <Text style = {{color : "black",textAlign : "left",alignSelf : "flex-start",fontSize : 20,fontWeight : 600,marginLeft : 10}}>withTiming Section</Text>
        <Animated.View style = {[styles.box,AnimatedStyleEasingOut]}><Text style = {{color : "#325ea8"}}>Easing Inout</Text></Animated.View>
        <Animated.View style = {[styles.box,AnimatedStyleLinearOut]}><Text style = {{color : "#325ea8"}}>Easing Linear</Text></Animated.View>
        
        <View style = {{margin : 20}}>
        <Text style = {{color : "black",textAlign : "left",alignSelf : "flex-start",fontSize : 20,fontWeight : 600,marginLeft : 10}}>withShake Section</Text>
        </View>
        <Animated.View style = {styles.box}>
            <Text style = {{color : "#325ea8"}}>With Shake</Text>
        </Animated.View>
          <AnimatedTouchable style={[styles.touchableButton,AnimatedTouchableComponent]} onPress={handlePress}>
              <Text>Handle Press</Text>
          </AnimatedTouchable>
    </View>
  )
}

const styles = StyleSheet.create({
    box : {
        marginBottom : 20,
        borderRadius : 20,
        borderWidth : 1,
        paddingHorizontal : 10,
        paddingVertical : 20,
        borderColor : "#325ea8"
    },
    touchableButton : {
        backgroundColor: "#1d6b49", 
        padding: 10 ,
        borderRadius : 20
    }
})

export default ReanimatedEasingSquares

