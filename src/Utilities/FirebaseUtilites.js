import analytics from '@react-native-firebase/analytics';


export const firebaseLogEvent = async(eventName,params) => {
    console.log("Firebase event trigger")
    await analytics().logEvent(eventName, params)
}