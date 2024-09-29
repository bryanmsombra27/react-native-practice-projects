import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {globalStyles} from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

interface ProductsScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const products = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
  },
  {
    id: 5,
    name: 'Product 5',
  },
  {
    id: 6,
    name: 'Product 6',
  },
];

const ProductsScreen = ({}: ProductsScreenProps): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Productos
      </Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => {
              navigation.navigate('Product', item);
            }}
            label={item.name}
          />
        )}
      />

      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Ajustes
      </Text>
      <PrimaryButton
        onPress={() => {
          navigation.navigate('Settings' as never);
        }}
        label={'Ajustes'}
      />
    </View>
  );
};
export default ProductsScreen;
