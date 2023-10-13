

# react-native-spk-time-picker


The component is a time selector.
Allows you to select: hour, minutes and format (AM/PM). and get those selected values.

## Installation

To install use the following commands:
```bash
npm install react-native-spk-time-picker
````

```bash
yarn add react-native-spk-time-picker
````


## Simple Picker Component

<div style="text-align:center"><img src="https://github.com/rodrigomspk/react-native-spk-time-picker/blob/main/assets/simple.gif" alt="Avatar Ticket" height="600" style="border: 2px solid #000;"></div>

### Simple Usage

```javascript
import TimePicker from react-native-spk-time-picker;

export default function App() {
 return (
    <View style={styles.container}>
      <TimePicker
        getTime={(values) => { console.log(values) }}
      />      
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
});
```

## Custom Time Picker Component

<div style="text-align:center"><img src="https://github.com/rodrigomspk/react-native-spk-time-picker/blob/main/assets/custom.gif" alt="Avatar Ticket" height="600" style="border: 2px solid #000;"></div>

### Custom Usage

```javascript
import TimePicker from react-native-spk-time-picker;

export default function App() {
 return (
    <View style={styles.container}>
      <TimePicker
        currentHour={12}
        currentMinutes={6}
        currentFormat={1}
        primaryColor="#4d4dff"
        arrowButtonStyle={{ width: 50, height: 50, borderRadius: 25, borderColor: "#4d4dff", padding: 0 }}
        textStyle={{ fontSize: 50 }}
        iconSize={30}
        radioButtonText={{ fontSize: 20 }}
        selectButtonStyle={{ backgroundColor: '#4d4dff', width: '100%' }}
        selectButtonTextStyle={{ color: '#fff' }}
        selectButtonText={"Seleccionar"}
        getTime={(values) => { console.log(values) }}
      />    
    </View >
  )
}
```

## Props

<table>
    <thead>
        <tr>
            <th style="text-align:center;">prop</th>
            <th style="text-align:center;">Type</th>
            <th style="text-align:center;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>currentHour</td>
            <td>Integer</td>
            <td>This value corresponds to the current time selected in the component, its value can vary between (currentHour >= 0 && currentHour <= 12)</td>
        </tr>
        <tr>
            <td>currentMinutes</td>
            <td>Integer</td>
            <td>This value corresponds to the current minute value selected in the component, its value can vary between ((currentMinutes >= 0 && currentMinutes <= 59))</td>
        </tr>
        <tr>
            <td>currentFormat</td>
            <td>Integer</td>
            <td>This value corresponds to the format value selected in the component, its value can vary between (0 = AM / 1 = PM).
            </td>
        </tr>
        <tr>
            <td>primaryColor</td>
            <td>string</td>
            <td>Component Primary Color.
            </br>'rgba(20, 164, 172, 0.2)'
            </br>"#fff"
            </td>
        </tr>
        <tr>
            <td>arrowButtonStyle</td>
            <td>Object</td>
            <td>Style of the elements (arrow buttons) of the component. 
            </br>
            { width: 50, height: 50, borderRadius: 25, borderColor: "#4d4dff", padding: 0 }
            </td>
        </tr>
        <tr>
            <td>textStyle</td>
            <td>Object</td>
            <td style="text-align: justify;">Style of the hour, minute and separator symbol (:)
            </br>
            { fontSize: 50 }
            </td>
        </tr>
        <tr>
            <td>iconSize</td>
            <td>Integer</td>
            <td style="text-align: justify;">Action buttons arrow icon size.
            </td>
        </tr>
        <tr>
            <td>radioButtonText</td>
            <td>Object</td>
            <td style="text-align: justify;">Radio button elements text style.
            </br>
            { fontSize: 20 }
            </td>
        </tr>
        <tr>
            <td>selectButtonStyle</td>
            <td>Object</td>
            <td style="text-align: justify;">Time selection button style.
            </br>
            { backgroundColor: '#4d4dff', width: '100%' }
            </td>
        </tr>
        <tr>
            <td>selectButtonTextStyle</td>
            <td>Object</td>
            <td style="text-align: justify;">Time selection button text style.
            </br>
            { color: '#fff' }
            </td>
        </tr>
        <tr>
            <td>selectButtonText</td>
            <td>string</td>
            <td style="text-align: justify;">Time selection button text.</td>
        </tr>
         <tr>
            <td>getTime</td>
            <td>Function</td>
            <td style="text-align: justify;">function to obtain values ​​currently selected in the component.
            </td>
        </tr>       
    </tbody>
</table>


