import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const IncrementDecrementButton = ({
    minValue,
    maxValue,
    value,
    setValue,
    primaryColor,
    arrowButtonStyle,
    textStyle,
    iconSize
}) => {
    const intervalIdRef = useRef(null);
    const isIncrementingRef = useRef(false);

    const handleIncrement = () => {
        setValue((prevValue) => {
            if (prevValue < maxValue) {
                return prevValue + 1;
            } else {
                return minValue;
            }
        });
    };

    const handleDecrement = () => {
        setValue((prevValue) => {
            if (prevValue > minValue) {
                return prevValue - 1;
            } else {
                return maxValue;
            }
        });
    };

    const handlePressIn = (action) => {
        isIncrementingRef.current = action === 'increment';

        // Continuously increments or decrements the value while holding down the button
        intervalIdRef.current = setInterval(() => {
            if (isIncrementingRef.current) {
                handleIncrement();
            } else {
                handleDecrement();
            }
        }, 100); // You can adjust the speed of increase or decrease here
    };

    const handlePressOut = () => {
        // Stops continuous action when you release the button
        clearInterval(intervalIdRef.current);
    };

    useEffect(() => {
        return () => {
            // Clear the interval when the component is disassembled
            clearInterval(intervalIdRef.current);
        };
    }, []);

    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => handleIncrement()}
                onLongPress={() => handlePressIn('increment')}
                onPressOut={handlePressOut}
                style={(arrowButtonStyle) ? [styles.bottom, { ...arrowButtonStyle }] : styles.bottom}
            >
                <Icon name={"angle-up"} size={iconSize} color={primaryColor} />
            </TouchableOpacity>

            <View style={styles.textBox}>
                <Text style={(textStyle) ? [styles.textLabel, { color: primaryColor }, { ...textStyle }] : [styles.textLabel, { color: primaryColor }]}> {(value < 10) ? '0' + value : value} </Text>
            </View>

            <TouchableOpacity
                onPress={() => handleDecrement()}
                onLongPress={() => handlePressIn('decrement')}
                onPressOut={handlePressOut}
                style={(arrowButtonStyle) ? [styles.bottom, { ...arrowButtonStyle }] : styles.bottom}
            >
                <Icon name={"angle-down"} size={iconSize} color={primaryColor} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    textBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLabel: {
        fontSize: 50,
        color: "#000",
        justifyContent: 'flex-end'
    }
});

export default IncrementDecrementButton;
