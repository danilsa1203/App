import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './messagesStyle';

const Messages = [
  {
    id: '1',
    userName: 'Juan Pérez',
    userImg: require('../../assets/images/user.png'),
    messageTime: 'Hace 4 minutos',
    messageText:
      'Hola',
  },
  {
    id: '2',
    userName: 'María Collado',
    userImg: require('../../assets/images/user.png'),
    messageTime: 'Hace 2 horas',
    messageText:
      'Hola.',
  },
  {
    id: '3',
    userName: 'Carlos Santana',
    userImg: require('../../assets/images/user.png'),
    messageTime: 'Hace 1 hora',
    messageText:
      'Hola',
  },
  
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});