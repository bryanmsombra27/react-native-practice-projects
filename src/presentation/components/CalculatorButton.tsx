import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {colors, styles} from '../../config/theme/appTheme';

interface CalculatorButtonProps extends PropsWithChildren {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

const Styles = StyleSheet.create({});

const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: CalculatorButtonProps): React.JSX.Element => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={press => ({
        ...styles.button,
        backgroundColor: color,
        opacity: press ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}>
      <Text
        style={{...styles.buttonText, color: blackText ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};
export default CalculatorButton;
