import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Tab1ScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const Tab1Screen = ({}: Tab1ScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> Tab1Screen View Component </Text>
    </View>
  );
};
export default Tab1Screen;
