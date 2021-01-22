import React from 'react';

import { Header, Title, Button, Left, Body, Right, Icon } from 'native-base';


const PrincipalHeader = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
       <Body>
        <Title>
          Hola
        </Title>
      </Body>
      <Right />
    </Header>
  )
}
export default PrincipalHeader;