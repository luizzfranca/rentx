import React from 'react';

import { Container, Content, Title, Message, Footer } from './styles';
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native'

export const SchedulingComplete = () => {

  const navigation = useNavigation<any>();

  function handleConfirm() {
    navigation.navigate('Home')
  }

  const { width } = useWindowDimensions();
  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSvg width={width} />

      <Content> 
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado</Title>

        <Message>
          Agora você só precisa  ir {'\n'} 
          até a concessionária da RENTX {'\n'} 
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}