import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

interface SettingsScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const SettingsScreen = ({}: SettingsScreenProps): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text> SettingsScreen </Text>
      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />
      <PrimaryButton
        label="Regresar a Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
export default SettingsScreen;
