import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    textColored:{
        color: "red",
    },
    textNormal:{
        color: "black"
    },
    icon: {
        fontSize: 50,
        color: 'white'
    },
    iconBadgeContainer: {
        flexDirection: "row",
        marginLeft: 20
    },
    badgetext: {
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainer: {
        alignItems: "center",
        //borderRadius: 15,

    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    firstTextContainer: {
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontSize: '1.5rem',
        marginTop: 10,
    },
    container:{
        width: "100%",
        height: "100%",
    },
});