import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const RadioButton = ({ currentValue, comparisonValue, text, action, primaryColor, radioButtonText }) => {
    return (
        <TouchableOpacity onPress={action} style={styles.radioButtonContainer}>
            <View style={[styles.circle, { borderColor: primaryColor }]}>
                {currentValue == comparisonValue && (<View style={[styles.checkedCircle, { borderColor: primaryColor, backgroundColor: primaryColor }]} />)}
            </View>

            <View>
                <Text style={
                    (radioButtonText)
                        ?
                        [styles.defaultRadioButtonText, { color: primaryColor }, { ...radioButtonText }]
                        :
                        [styles.defaultRadioButtonText, { color: primaryColor }]
                }>{text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    defaultRadioButtonText: {
        fontSize: 25,
        marginLeft: 5
    },
    radioButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 5,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7
    },
});



export default RadioButton;