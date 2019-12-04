import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

class SeminarScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = () => {
    fetch('http://112.166.141.161/testing.php', {
          method: 'GET',
    }).then((response) => response.json())
    .then((responseJson) => {
    
      this.setState({
         isLoading: false,
         dataSource: responseJson[0],
      });
      
    }).catch((error) => {
      console.error(error);
    });
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item}) => (
    <ListItem
      title={item.subject}
      subtitle={item.name}
      onPress={() => {
        let path = 'http://112.166.141.161/pdf/' + item.filename
        let result = WebBrowser.openBrowserAsync(path);
      }}
      rightTitle={item.date}
      bottomDivider
      chevron
    />
  );

  render() {
    if(!this.state.isLoading) {
      return (
        <SafeAreaView forceInset={{top:'always'}}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.dataSource}
            renderItem={this.renderItem}
          />
        </SafeAreaView>
      );
    }
    return (<View/>);
  }
};

const styles = StyleSheet.create({});

export default SeminarScreen;