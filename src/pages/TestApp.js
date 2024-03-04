import { View, Text, ImageBackground, Image, Button, TouchableHighlight, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../style/pages/testApp'
import { AntDesign,Ionicons ,Feather,MaterialCommunityIcons} from '@expo/vector-icons';


const TestApp = () => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.cont}>

      <ImageBackground source={require('../../assets/images/pexels.jpg')} style={styles.image}   >
        <View style={styles.topView}>
          <View style={styles.topView2}>
            <View style={styles.profileImageView}>
              <Image source={require('../../assets/images/1-intro-photo-final.png')} style={styles.profileImage} />
            </View>
            <View>
              <Text style={styles.profileName}>Astrologer</Text>
              <View style={styles.topView2}>
                <AntDesign name="eyeo" size={15} color="black" />
                <Text style={styles.eyeViewText}>2,396</Text>
              </View>

            </View>

          </View>
          <View>
            <TouchableHighlight style={styles.ButtonStyle} onPress={() => console.log("Leave")} >
              <Text style={styles.ButtonText}>Leave</Text>
            </TouchableHighlight>

          </View>
        </View>
        <View style={styles.BottomStyles}>
          <View style={{ width: '70%' }}>

            <View style={styles.topView2}>
              <View style={styles.profileImageView}>
                <Image source={require('../../assets/images/1-intro-photo-final.png')} style={styles.profileImage} />
              </View>
              <View>
                <Text style={styles.BootomProfileName}>Ram like your livetresam</Text>


              </View>

            </View>

            <View style={styles.topView2}>
              <View style={styles.profileImageView}>
                <Image source={require('../../assets/images/1-intro-photo-final.png')} style={styles.profileImage} />
              </View>
              <View>
                <Text style={styles.BootomProfileName2}>James</Text>
                <Text style={styles.BootomProfileName3}>Heyy</Text>
              </View>

            </View>

            <View style={styles.topView2}>
              <View style={styles.profileImageView}>
                <Image source={require('../../assets/images/1-intro-photo-final.png')} style={styles.profileImage} />
              </View>
              <View>
                <Text style={styles.BootomProfileName2}>James</Text>
                <Text style={styles.BootomProfileName3}>Heyy</Text>
              </View>

            </View>

            <View style={styles.eyeView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="write here..."
                placeholderTextColor="#000"


              />

              <TouchableOpacity onPress={() => console.log("Send")} style={styles.iconStyle}>
                <Feather name="send" size={24} color="#fff" />
              </TouchableOpacity>
            </View>


          </View>

          <View style={styles.left}>
            <TouchableOpacity onPress={()=>console.log("heart")} style={styles.leftIcon}>
              <AntDesign name="hearto" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.leftIcon} onPress={()=>console.log("gift")}>
            <AntDesign name="gift" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftIcon} onPress={()=>console.log("call")}>
            <Ionicons name="call-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftIcon} onPress={()=>console.log("timer")}>
            <MaterialCommunityIcons name="timer-sand-empty" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    </View>
  )
}

export default TestApp