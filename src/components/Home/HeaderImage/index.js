import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import TinyBalls from "../TinyBalls";

import { styles } from './styles';

export default function HeaderImage() {

    const tinyBalls = [1, 2, 3, 4, 5, 6]

    return (
        <>
            
            <View style={styles.container}>

                <Image source={{
                    uri: 'https://images.unsplash.com/photo-1542037012038-5f9fb2b3c681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                }}  style={styles.image} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>comprar</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.balls}>
                {tinyBalls.map((item, index) =>
                    <TinyBalls key={index} index={index}>{ item }</TinyBalls>
                )}
            </View>   
        
        </>
        
    )
}