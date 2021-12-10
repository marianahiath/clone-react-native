import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import TinyBalls from "../TinyBalls";

import { Feather } from '@expo/vector-icons';
import { styles } from './styles'

export default function RoundedCard() {

    const tinyBalls = [1, 2, 3]
    
    return (

        <>

            <TouchableOpacity style={styles.mainContainer}>

                <View style={styles.imageContainer}>

                    <Feather name="chevron-left" size={24} color="black" style={styles.icons} />

                    <Image source={{
                        uri: 'https://images.unsplash.com/photo-1636927743238-4052967c20e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    }}
                        style={styles.image}
                    />

                    <Feather name="chevron-right" size={24} color="black" style={styles.icons} />

                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Looks para celebrar
                    </Text>

                    <Text style={styles.textStyle}>
                        {`Paêtes, all white, vermelhos,\ncetim e mais`}
                    </Text>

                </View>

                <View>
                <TouchableOpacity style={styles.button}>

                    <Text style={styles.buttonText}>comprar</Text>
                </TouchableOpacity>
                </View>
                        
            </TouchableOpacity>

            <View style={styles.balls}>
                {tinyBalls.map((item, index) =>
                    <TinyBalls key={index} index={index}>{ item }</TinyBalls>
                )}
            </View>

        </>
    );
}  