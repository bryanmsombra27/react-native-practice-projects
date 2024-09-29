import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ProfileScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ProfileScreen = ({}: ProfileScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> ProfileScreen View Component </Text>
    </View>
  );
};
export default ProfileScreen;
