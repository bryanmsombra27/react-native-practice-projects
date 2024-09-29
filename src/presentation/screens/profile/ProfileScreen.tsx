import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

interface ProfileScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ProfileScreen = ({}: ProfileScreenProps): React.JSX.Element => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}>
      <Text> ProfileScreen View Component </Text>

      <PrimaryButton
        label="Abrir Menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
export default ProfileScreen;
