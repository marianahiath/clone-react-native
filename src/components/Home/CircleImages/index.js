import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from './styles';

export default function CircleImages() {

    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginTwelve]}>Ofertas</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginFive]}>Feminino</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://images.unsplash.com/photo-1568306281824-7afe898030d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginFive]}>Masculino</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginTwelve]}>Infantil</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize]}>{`Perfumaria e\nCosméticos`}</Text>
                </TouchableOpacity>

            </View>

        </>
    );
}