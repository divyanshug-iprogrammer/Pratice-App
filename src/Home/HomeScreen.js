import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, PermissionsAndroid, Text, TouchableOpacity, View } from 'react-native';

function HomeScreen(props) {
    const leftValue = useState(new Animated.Value(0))[0];
    const triangle2 = useState(new Animated.Value(0))[0];
    const triangle3 = useState(new Animated.Value(0))[0];
    const upValue = useState(new Animated.Value(0))[0];
    const rightValue = useState(new Animated.Value(0))[0];
    
    // useEffect(() => {
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(leftValue,{
    //                 toValue : 100,
    //                 duration : 3000,
    //                 easing: Easing.ease,
    //                 useNativeDriver : true
    //             }),
    //             Animated.timing(upValue,{
    //                 toValue : -200,
    //                 duration : 3000,
    //                 easing: Easing.ease,
    //                 useNativeDriver : true
    //             }),
    //             Animated.timing(leftValue,{
    //                 toValue : -100,
    //                 duration : 3000,
    //                 easing: Easing.ease,
    //                 useNativeDriver : true
    //             }),
    //             Animated.timing(upValue,{
    //                 toValue : 200,
    //                 duration : 3000,
    //                 easing: Easing.ease,
    //                 useNativeDriver : true
    //             }),
    //         ]),
    //         {
    //             iterations: 2
    //           }).start();
    // },[])

    useEffect(() => {
        Animated.loop(
            Animated.stagger(1000,[
                Animated.timing(leftValue,{
                    toValue : 1,
                    useNativeDriver : true
                    // duration : 1000
                }),
                Animated.timing(triangle2,{
                    toValue : 1,
                    useNativeDriver : true
                    // duration : 1000
                }),
                Animated.timing(triangle3,{
                    toValue : 1,
                    useNativeDriver : true
                    // duration : 1000
                })
            ]))
        .start()
    })

    useEffect(() => {
        const notificationsPermission = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        console.log("notificationsPermission",notificationsPermission)
    },[])
        

    function moveBallRight() {
        Animated.sequence([
            Animated.timing(leftValue,{
                toValue : 0,
                duration : 5000,
                easing: Easing.linear,
                useNativeDriver : true
            }),
            Animated.timing(rightValue,{
                toValue : 0,
                duration : 5000,
                easing: Easing.linear,
                useNativeDriver : true
            })
        ]).start();
    }
    console.log("Left Value",leftValue)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style = {{margin : 10}} onPress={() => {props.navigation.navigate("Details")}}>
                <Text style = {{color : "black"}}>go to details screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{margin : 10}} onPress={() => {props.navigation.navigate("Marquee")}}>
                <Text style = {{color : "black"}}>go to Marquee Effect</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{margin : 10}} onPress={() => {props.navigation.navigate("SquareToTriangle")}}>
                <Text style = {{color : "black"}}>go to SquareToTriangle Effect</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{margin : 10}} onPress={() => {props.navigation.navigate("ReanimatedDashboard")}}>
                <Text style = {{color : "black"}}>go to ReanimatedDashboard</Text>
            </TouchableOpacity>
            <View>
                {/* <TouchableOpacity style={{ marginTop: 20 }} onPress={moveBallLeft}>
                    <Text style={{ color: "black", textAlign: "center" }}>Move Left</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={moveBallRight}>
                    <Text style={{ color: "black", textAlign: "center" }}>Move Right</Text>
                </TouchableOpacity> */}
                <Animated.View
                    style={{
                        backgroundColor: "red",
                        height: 100,
                        width: 100,
                        marginBottom : 10,
                        // borderRadius : 100/2,
                        // marginLeft : leftValue,
                        // opacity: leftValue
                        // opacity : leftValue.interpolate({
                        //     inputRange : [0,0.9,1],
                        //     outputRange : [0,1,0],
                        //     extrapolateLeft : "clamp",
                        //     extrapolateRight : "clamp"
                        // }),
                        // transform: [
                        //     { translateX: leftValue },
                        //     {translateY : upValue},
                        //     {rotate : leftValue.interpolate({
                        //         inputRange : [25,50,75,100],
                        //         outputRange : ['0deg','45deg','90deg','360deg'],
                        //         extrapolateLeft : "clamp",
                        //         extrapolateRight : "clamp"
                        //     }),
                        // },{rotateY : upValue?.interpolate({
                        //         inputRange : [25,50,75,100,150],
                        //         outputRange : ['0deg','45deg','90deg','180deg','360deg'],
                        //         extrapolateLeft : "clamp",
                        //         extrapolateRight : "clamp" 
                        // })}
                        // ]
                    }}>
                </Animated.View>
                <Animated.View
                    style={{
                        backgroundColor: "red",
                        height: 100,
                        width: 100,
                        marginBottom : 10,
                        // opacity: triangle2,
                        // opacity : triangle2.interpolate({
                        //     inputRange : [0,0.9,1],
                        //     outputRange : [0,1,0],
                        //     extrapolateLeft : "clamp",
                        //     extrapolateRight : "clamp"
                        // }),
                        // borderRadius : 100/2,
                        // marginLeft : leftValue,
                        // opacity : leftValue.interpolate({
                        //     inputRange : [100,150,180],
                        //     outputRange : [1,0.77,0],
                        //     extrapolateLeft : "clamp",
                        //     extrapolateRight : "clamp"
                        // }),
                        // transform: [
                        //     { translateX: leftValue },
                        //     {translateY : upValue},
                        //     {rotate : leftValue.interpolate({
                        //         inputRange : [25,50,75,100],
                        //         outputRange : ['0deg','45deg','90deg','360deg'],
                        //         extrapolateLeft : "clamp",
                        //         extrapolateRight : "clamp"
                        //     }),
                        // },{rotateY : upValue?.interpolate({
                        //         inputRange : [25,50,75,100,150],
                        //         outputRange : ['0deg','45deg','90deg','180deg','360deg'],
                        //         extrapolateLeft : "clamp",
                        //         extrapolateRight : "clamp" 
                        // })}
                        // ]
                    }}>
                </Animated.View>
                <Animated.View
                    style={{
                        backgroundColor: "red",
                        height: 100,
                        width: 100,
                        marginBottom : 10,
                        // opacity: triangle3,
                        // opacity : triangle3.interpolate({
                        //     inputRange : [0,0.9,1],
                        //     outputRange : [0,1,0],
                        //     extrapolateLeft : "clamp",
                        //     extrapolateRight : "clamp"
                        // }),
                        // borderRadius : 100/2,
                        // marginLeft : leftValue,
                        // opacity : leftValue.interpolate({
                        //     inputRange : [100,150,180],
                        //     outputRange : [1,0.77,0],
                        //     extrapolateLeft : "clamp",
                        //     extrapolateRight : "clamp"
                        // }),
                        // transform: [
                        //     { translateX: leftValue },
                        //     {translateY : upValue},
                        //     {rotate : leftValue.interpolate({
                        //         inputRange : [25,50,75,100],
                        //         outputRange : ['0deg','45deg','90deg','360deg'],
                        //         extrapolateLeft : "clamp",
                        //         extrapolateRight : "clamp"
                        //     }),
                        // },{rotateY : upValue?.interpolate({
                        //         inputRange : [25,50,75,100,150],
                        //         outputRange : ['0deg','45deg','90deg','180deg','360deg'],
                        //         extrapolateLeft : "clamp",
                        //         extrapolateRight : "clamp" 
                        // })}
                        // ]
                    }}>
                </Animated.View>
                {/* <Animated.View
                    style={{
                        backgroundColor: "blue",
                        height: 100,
                        width: 100,
                        marginTop : 20,
                        // borderRadius : 100/2,
                        // marginLeft : leftValue,
                        // opacity : leftValue.interpolate({
                        //     inputRange : [100,150,180],
                        //     outputRange : [1,0.77,0],
                        //     extrapolateLeft : "clamp",
                        //     extrapolateRight : "clamp"
                        // }),
                        transform: [
                            { translateX: leftValue },
                            // {rotate : leftValue.interpolate({
                            //     inputRange : [50,100,200],
                            //     outputRange : ['0deg','180deg','0deg'],
                            // })},
                        ]
                    }}>
                </Animated.View> */}

            </View>
        </View>
    );
}

export default HomeScreen;