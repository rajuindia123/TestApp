import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    cont: {
        flex: 1,

        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    topView: {
        paddingVertical: 40,
        padding: 24,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    profileImageView: {
        width: 32,
        height: 32,
        // borderRadius: 50,
        // borderWidth:1,
        // backgroundColor:'red'
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    topView2: {
        marginBottom:15,
        // padding:24,
        flex: 1,
        flexDirection: 'row'
    },
    profileName: {
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    eyeView: {
        flex: 1,
        flexDirection: 'row'
    },
    eyeViewText: {
        fontSize: 7,
        paddingLeft: 2,
        paddingTop: 5
    },
    ButtonStyle: {
        width: 70,
        height: 25,
        backgroundColor: '#7127FF',
        borderRadius: 10
    },
    ButtonText: {
        textAlign: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, alignItems: "center", paddingTop: 5
    },
    BottomStyles: {
       position:'absolute',
       bottom:20,
    //    top:60,
        padding: 24,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BootomProfileName: {
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 10,
        color: '#D65D5D'
    },
    BootomProfileName2: {
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 10,
        color: '#fff'
    },
    BootomProfileName3:{
      
        paddingLeft: 5,
        fontSize: 8,
        color: '#fff'
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#7127FF',
        borderRadius: 20,
        padding: 3,
        paddingLeft: 10,
        height: 36
    },
    iconStyle:{
        paddingTop: 5, paddingLeft: 10 
    },
    left:{
        justifyContent:'flex-end',alignItems:'flex-end',width:'30%'
    },
    leftIcon:{
        marginBottom:25
    }
    
   


});
export { styles }