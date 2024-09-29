import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface AboutScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const AboutScreen = ({}: AboutScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> AboutScreen View Component </Text>
    </View>
  );
};
export default AboutScreen;
