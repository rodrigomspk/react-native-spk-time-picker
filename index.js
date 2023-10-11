import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IncrementDecrementButton from './components/IncrementDecrementButton';
import RadioButton from './components/RadioButton';


const HourPicker = ({
    currentHour = 0,
    currentMinutes = 0,
    currentFormat = 0,
    primaryColor = "#4d4dff",
    arrowButtonStyle,
    textStyle,
    iconSize = 50,
    radioButtonText,
    selectButtonStyle,
    selectButtonTextStyle,
    selectButtonText = "ok",
    getTime
}) => {

    const [hour, setHour] = useState((currentHour >= 0 && currentHour <= 12) ? currentHour : 0);
    const [minutes, setMinutes] = useState((currentMinutes >= 0 && currentMinutes <= 59) ? currentMinutes : 0);
    const [format, setFormat] = useState(
        (currentHour >= 0 && currentHour <= 12) && (currentMinutes >= 0 && currentMinutes <= 59) && (currentFormat >= 0 && currentFormat <= 1)
            ? (currentHour == 12)
                ? 1
                : (currentHour == 0)
                    ? 0
                    : currentFormat
            :
            (currentHour >= 0 && currentHour <= 12)
                ? (currentHour == 12)
                    ? 1
                    : (currentHour == 0)
                        ? 0
                        : currentFormat
                : 0
    );

    useEffect(() => {
        (currentHour >= 0 && currentHour <= 12)
            ?
            setHour(currentHour)
            :
            setHour(0)
    }, [currentHour])

    useEffect(() => {
        (currentMinutes >= 0 && currentMinutes <= 59)
            ?
            setMinutes(currentMinutes)
            :
            setMinutes(0)
    }, [currentMinutes])

    useEffect(() => {
        (currentFormat >= 0 && currentFormat <= 1)
            ? (hour == 12)
                ? setFormat(1)
                : (hour == 0)
                    ? setFormat(0)
                    : setFormat(currentFormat)
            :
            (hour >= 0 && hour <= 12)
                ? (hour == 12)
                    ? setFormat(1)
                    : (hour == 0)
                        ? setFormat(0)
                        : setFormat(currentFormat)
                : setFormat(0)
    }, [currentFormat]);

    useEffect(() => {
        if (hour == 0 && format == 1) {
            setFormat(0);
        }

        if (hour == 12 && format == 0) {
            setFormat(1);
        }
    }, [hour, format])

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                    <IncrementDecrementButton
                        minValue={0}
                        maxValue={12}
                        value={hour}
                        setValue={(value) => { setHour(value) }}

                        primaryColor={primaryColor}
                        arrowButtonStyle={arrowButtonStyle
                        }
                        textStyle={textStyle}
                        iconSize={iconSize}
                    />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={(textStyle) ? [styles.dividerStyle, { color: primaryColor }, { ...textStyle }] : [styles.dividerStyle, { color: primaryColor }]}>:</Text>
                </View>

                <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                    <IncrementDecrementButton
                        minValue={0}
                        maxValue={59}
                        currentValue={5}
                        value={minutes}
                        setValue={(value) => { setMinutes(value) }}

                        primaryColor={primaryColor}
                        arrowButtonStyle={arrowButtonStyle
                        }
                        textStyle={textStyle}
                        iconSize={iconSize}
                    />
                </View>

                <View style={{ alignItems: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                    <RadioButton currentValue={format} comparisonValue={0} text={'AM'} action={() => { setFormat(0) }} primaryColor={primaryColor} style={{ width: '100%' }} radioButtonText={radioButtonText} />
                    <View style={{ height: 5 }} />
                    <RadioButton currentValue={format} comparisonValue={1} text={'PM'} action={() => { setFormat(1) }} primaryColor={primaryColor} style={{ width: '100%' }} radioButtonText={radioButtonText} />
                </View >
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        getTime(
                            {
                                hour: hour,
                                minutes: minutes,
                                format: format
                            })
                    }}
                    style={(selectButtonStyle) ? [styles.defaultSelectButtonStyle, { borderColor: primaryColor }, { ...selectButtonStyle }] : [styles.defaultSelectButtonStyle, { borderColor: primaryColor }]}>
                    <Text style={(selectButtonTextStyle) ? [styles.defaultSelectButtonTextStyle, { color: primaryColor }, { ...selectButtonTextStyle }] : [styles.defaultSelectButtonTextStyle, { color: primaryColor }]}>{selectButtonText}</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    defaultSelectButtonStyle: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 35,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    defaultSelectButtonTextStyle: {
        fontSize: 20
    },
    dividerStyle: {
        fontSize: 40
    }
});

export default HourPicker;
