
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';



const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation={"bounceIn"}
                    duration={1500}
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                    resizeMode={"stretch"}
                />
            </View>
            <Animatable.View
                animation={"fadeInUpBig"}
                style={styles.footer}>
                <Text style={styles.title}>FLUX IT - Demo Ezequiel Project</Text>
                <Text style={styles.text}>Sign in - Example</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("SignInScreen")}} >
                       <Text> Get started </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 400/ 2
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        borderRadius: 50,
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default SplashScreen;
