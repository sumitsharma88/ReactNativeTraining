import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex :1,
     },
     flatView : {
         flex :2, 
     },
     text : {
        fontSize : 30,
        flex :6,
        color : '#20B2AA', 
     },
     text1 : {
        fontSize : 22,
        // color : '#20B2AA', 
     },
     viewList : {
         borderRadius :1,
     },
     search : {
        //flex :0.15,
        height: 60,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list : {
        backgroundColor : 'white',
        borderRadius : 5,
        margin : 15,
        marginBottom : 0,
        borderStyle : 'dotted',
        paddingLeft : 15
    }
})
