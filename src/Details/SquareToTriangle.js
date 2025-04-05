import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Text, View } from 'react-native'

function SquareToTriangle() {
    const convertedShape = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const size = 100
    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(convertedShape, {
                        toValue: 1,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }),
                    Animated.timing(convertedShape, {
                        toValue: 0.5,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(scale, {
                        toValue: 2,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }),
                    Animated.timing(scale, {
                        toValue: 1,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear
                    })
                ])
                
            ])
        ).start()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animated.View style={{ height: 100, width: 100, backgroundColor: "#2494e3", opacity : convertedShape , 
            transform : [{scale},
            {rotateX : convertedShape.interpolate({inputRange: [0.5,1],outputRange : ['0deg','180deg'],extrapolateLeft : "clamp",extrapolateRight : "clamp"})},
            {rotateY : convertedShape.interpolate({inputRange: [0.5,1],outputRange : ['0deg','360deg'],extrapolateLeft : "clamp",extrapolateRight : "clamp"})}
        ],
            borderRadius : convertedShape.interpolate({inputRange : [0.5,1],outputRange : [0*size/2 , 1*size/2]}) 
            }}/>
        </View>
    )
}

export default SquareToTriangle