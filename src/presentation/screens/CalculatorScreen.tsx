import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors, styles} from '../../config/theme/appTheme';
import CalculatorButton from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

interface CalculatorScreenProps extends PropsWithChildren {}

const internalStyles = StyleSheet.create({
  resultContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

const CalculatorScreen = ({}: CalculatorScreenProps): React.JSX.Element => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    clearScreen,
    toggleSign,
    deleteOperation,
    addOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <View style={internalStyles.resultContainer}>
        <Text style={styles.mainResult} adjustsFontSizeToFit numberOfLines={1}>
          {number}
        </Text>

        {formula === prevNumber ? (
          <Text style={styles.subResult}></Text>
        ) : (
          <Text style={styles.subResult} adjustsFontSizeToFit numberOfLines={1}>
            {prevNumber}
          </Text>
        )}
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => clearScreen()}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="del"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={divideOperation}
          label="/"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          label="X"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={substractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
export default CalculatorScreen;
