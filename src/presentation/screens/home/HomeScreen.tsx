import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {globalStyles} from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

interface HomeScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const HomeScreen = ({}: HomeScreenProps): React.JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Productos"
        onPress={() => navigation.navigate('Products' as never)}
      />
      <PrimaryButton
        label="Perfil"
        onPress={() => navigation.navigate('Profile' as never)}
      />
    </View>
  );
};
export default HomeScreen;
