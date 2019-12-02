import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';

const SeminarScreen = () =>{
  const list = [
    {
      name: 'PoC 2019 후기',
      subtitle: '19 문영균',
      date:'2019-11-26',
    },
    {
      name: 'PoC 2019 후기',
      subtitle: '19 김경민',
      date:'2019-11-26',
    },
    {
      name: 'PoC 2019 후기',
      subtitle: '16 김성민',
      date:'2019-11-26',
    },
    {
      name: 'Google Stadia',
      subtitle: '19 문영균',
      date:'2019-11-26',
    },
    {
      name: '전동킥보드',
      subtitle: '17 최지범',
      date:'2019-11-26',
    },
    {
      name: '디즈니플러스',
      subtitle: '19 박재우',
      date:'2019-11-26',
    },
    {
      name: '라즈베리 먹고 배탈 안 나는 법',
      subtitle: '19 안형진',
      date:'2019-11-26',
    },
    {
      name: '네트워크 꿀팁',
      subtitle: '15 강재민',
      date:'2019-11-26',
    },
    {
      name: '양자 컴퓨터',
      subtitle: '19 장한',
      date:'2019-11-26',
    },
    {
      name: 'CTF-MISC',
      subtitle: '19 김경민',
      date:'2019-11-26',
    },
  ];

  /*a = () => {
    fetch('http://112.166.141.161/pdf/a.pdf', {


    }
    


  }*/


  keyExtractor = (item, index) => index.toString()

  getSeminarFile = () => {
    console.log('item pushed');
  };

  renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      onPress={getSeminarFile}
      rightTitle={item.date}
      bottomDivider
      chevron
    />
  );

  return (
  <SafeAreaView forceInset={{top:'always'}}>
    <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SeminarScreen;