import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {inputStyle,labelStyle,containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        fontSize: 18,
        lineHeight: 23,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };