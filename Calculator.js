import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Calculator = () => {
  const [darkTheam, setDarkTheam] = useState(false);
  const [result, setResult] = useState('');
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const Calculate =(title)=>{
    if(title == 'C'){
      setResult("");
    } else if(title == 'DL'){
        setResult(result.substring(0,result.length-1));
    } else if(title == '='){
    
        setResult( ans=()=>{
            return(
                Number(eval(result).toFixed(3)).toString()
            )
        });
    } else setResult(result+title);
  }

  const Btn = ({title,type}) => {
    return (
      <TouchableOpacity
        onPress={() =>Calculate(title) }
        style={{
          padding: 10,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: getColor(colors.dark2, colors.light1),
          height: 70,
          width: 70,
          margin: 15,
        }}>
        <Text
          style={{
            fontSize: 37,
            color: 'black',
            textAlign: 'center',
            color: getBtnColor(type),
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const getBtnColor = type => {
    if (type == 'top') {
      return '#35fbd6';
    } else if (type == 'right') {
      return '#eb6363';
    } else {
      return getColor(colors.light, colors.dark);
    }
  };
  const getColor = (light, dark) => (darkTheam ? dark : light);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: getColor(colors.dark, colors.light),
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheam}
        onValueChange={() => setDarkTheam(!darkTheam)}
        thumbColor={getColor(colors.light, colors.dark)}
        // TrackColor takes values in boolean forms(true,false)
        trackColor={{true: colors.dark2, false: colors.light2}}
      />
      <Text
        style={{
          fontSize: 25,
          color: getColor(colors.light, colors.dark),
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          marginTop: 180,
          paddingBottom: 20,
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: getColor(colors.dark1, colors.light1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="%" type="top" />
        <Btn title="/" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({});
