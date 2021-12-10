import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    image: {
        width: '100%',
        height: 350
    },

    button: {
        position:'relative',
        top: 120,
        right: '80%',
        bottom: 80,
        width: 155,
        padding: 10,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    buttonText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 10
    },

    balls: {
        flexDirection: 'row',
        justifyContent: "center",
    }

})