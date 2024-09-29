import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {globalStyles} from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

interface ProductScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ProductScreen = ({}: ProductScreenProps): React.JSX.Element => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Producto </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          marginTop: 20,
          textAlign: 'center',
        }}>
        {params.id} - {params.name}{' '}
      </Text>
    </View>
  );
};
export default ProductScreen;
