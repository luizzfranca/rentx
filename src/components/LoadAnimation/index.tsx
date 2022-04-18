import React from 'react';

import { Container } from './styles';

import LottieView from 'lottie-react-native'
import loadingCar from '../../assets/loadingCar.json'

export const LoadAnimation = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ height: 200}}
        resizeMode='contain'
        autoPlay
        loop
      />
    </Container>
  );
}