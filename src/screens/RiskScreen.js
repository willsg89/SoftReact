'use strict';

import React, { Component, PropTypes } from 'react';

import  {
  Alert,
  ScrollView,
  StyleSheet,
  Picker,
  PixelRatio,
  TouchableHighlight,
  Text,
  Switch,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native'
// import ImagePicker from 'react-native-image-picker';

export default class RiskScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      relatedPersons: false,
      inMyName: true,
      area: "",
      subarea: "",
      local: "",
      description: "",
      nameOf: "",
      sector: "",
      sended: false,
      images: []
    };
  }
    selectPhotoTapped() {
      const options = {
        title: 'De onde você quer obter a foto?',
        cancelButtonTitle	: 'Fechar',
        takePhotoButtonTitle : 'Câmera',
        chooseFromLibraryButtonTitle : 'Galeria',
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('***************** Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          var idGerador = this.state.images.length + 1;
          this.state.images.push(
            {
              key: idGerador,
              //data: {uri: 'data:image/jpeg;base64,' + response.data}
              data: {uri: response.uri}
            }
          );
          this.setState({
              images: this.state.images
          });
        }
      });
    }

    onButtonPress () {
      Alert.alert("Status", "Formulário enviado");
      this.setState({sended:!this.state.sended})
    }

    removeImage(indice) {
    	this.state.images.splice(indice, 1);
      this.setState({
        images: this.state.images
      })
    }

    render() {

      let viewImages = () => {
        let arrayList = [];
        this.state.images.map( ( item, ind)=> {
          arrayList.push(
              <View key={ind} style={{flexGrow: 0,
                flexShrink: 0, flexBasis: "50%",
                padding: 5}}>
                <Image
                  resizeMode={Image.resizeMode.contain}
                       style={{ width:"100%",
                                backgroundColor:"#f0f0f0",
                                height:150,
                                marginBottom: 5}}
                       source={item.data}  />
                <Button  title="Remover" onPress={() => this.removeImage(ind)} />
            </View>
          );
        });
        return arrayList;
      }

    return (
      <ScrollView style={styles.container}>
        <View style={{margin:10}}>

        <Text style={{flex:2, textAlign:"center", fontSize: 18}}>Registrar Situação de Risco / Quase Acidente</Text>

        <View style={{ marginBottom:10}}>
          <View style={{ flex:1, flexDirection:"row", paddingTop:10, paddingBottom:5}}>
            <Text style={{flex:2}}>Anexar foto</Text>

            <TouchableHighlight style={{backgroundColor:"#387ef5", borderRadius:6}}
                                onPress={this.selectPhotoTapped.bind(this)} >
              <Image resizeMode={Image.resizeMode.contain}
                style={{width:100, height:30 , tintColor: "white"}}
                source={require('../../img/icon-camera.png')} />
            </TouchableHighlight>

          </View>

        </View>

        <View style={{ marginBottom:10 }}>
          <View style={{ flex:1, flexDirection:"row",  flexWrap:'wrap' }}>
            {viewImages()}
          </View>
        </View>

        <View style={{ marginBottom:10 }}>
          <Picker
            selectedValue={this.state.area}
            onValueChange={(area) => this.setState({area: area})}>
            <Picker.Item label="Área"               value="" />
            <Picker.Item label="Porto Alegre / RS"  value="porto_alegre" />
            <Picker.Item label="Florianópolis / SC" value="florianopolis" />
            <Picker.Item label="São Paulo / SP"     value="sao_paulo" />
          </Picker>

        </View>

        <View style={{ marginBottom:10 }}>
          <Picker selectedValue={this.state.subarea}
          onValueChange={(subarea) => this.setState({subarea: subarea})}>
            <Picker.Item label="Subárea"  value="" />
            <Picker.Item label="Térreo"   value="terreo" />
            <Picker.Item label="1º Andar" value="1_andar" />
            <Picker.Item label="2º Andar" value="2_andar" />
            <Picker.Item label="3º Andar" value="3_andar" />
            <Picker.Item label="4º Andar" value="4_andar" />
            <Picker.Item label="5º Andar" value="5_andar" />
            <Picker.Item label="6º Andar" value="6_andar" />
            <Picker.Item label="7º Andar" value="7_andar" />
            <Picker.Item label="8º Andar" value="8_andar" />
          </Picker>

        </View>

        <View style={{ marginBottom:10 }}>
          <TextInput placeholder={"Local"}
                     onChangeText={(local) => this.setState({local})}
                     value={this.state.local}/>
        </View>
        <View style={{ marginBottom:10 }}>
          <TextInput placeholder={'Descrição'}
                     onChangeText={(description) => this.setState({description})}
                     value={this.state.description} />
        </View>

        <View style={{ marginBottom:10}}>
          <View style={{ flex:1, flexDirection:"row", paddingTop:10, paddingBottom:5}}>
            <Text style={{flex:2}}>Há pessoas envolvidas</Text>
            <Switch
              style={{flex:1}}
              onValueChange={(value) => this.setState({relatedPersons: value})}
              value={this.state.relatedPersons}
            />
          </View>

        </View>


        <View style={{ marginBottom:10}}>
          <View style={{ flex:1, flexDirection:"row", paddingTop:10, paddingBottom:5}}>
            <Text style={{flex:2}}>Registrar em meu nome</Text>
            <Switch
              style={{flex:1}}
              onValueChange={(value) => this.setState({inMyName: value})}
              value={this.state.inMyName}
            />
          </View>

        </View>

        {
          (!this.state.inMyName) ?
            <View>
              <View style={{ marginBottom:10 }}>
                <TextInput placeholder={'Registrar em nome de...'}
                  onChangeText={(nameOf) => this.setState({nameOf})}
                  value={this.state.nameOf} />
              </View>
              <View style={{ marginBottom:10 }}>
                <TextInput placeholder={'Setor'}
                  onChangeText={(sector) => this.setState({sector})}
                  value={this.state.sector} />
              </View>
            </View>
          : null
        }

          {
            (this.state.sended) ?
              <View>
                  <Text>
                    {"Resultado: \n"}
                    {"Há pessoas envolvidas: "}{this.state.relatedPersons.toString()}{"\n"}
                    {"Registrar em meu nome: "}{this.state.inMyName.toString()}{"\n"}
                    {"Área: "}{this.state.area}{"\n"}
                    {"Subárea: "}{this.state.subarea}{"\n"}
                    {"Local: "}{this.state.local}{"\n"}
                    {"Descrição: "}{this.state.description}{"\n"}
                    {"Registrar em nome de: "}{this.state.nameOf}{"\n"}
                    {"Setor: "}{this.state.sector}{"\n"}
                  </Text>
              </View>
            : null
          }
          <Button
              onPress={() => this.onButtonPress()}
              title="ENVIAR"
              color="green"
            />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
