import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    image: {
        width: '100%',
        height: 430
    },

    button: {
        position:'relative',
        top: 165,
        right: '68%',
        bottom: 80,
        width: 170,
        padding: 12,
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