import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface PrimaryButtonProps extends PropsWithChildren {
  label: string;
  onPress: () => void;
}

const Styles = StyleSheet.create({});

const PrimaryButton = ({
  label,
  onPress,
}: PrimaryButtonProps): React.JSX.Element => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
      <Text style={globalStyles.buttonText}> {label} </Text>
    </Pressable>
  );
};
export default PrimaryButton;
