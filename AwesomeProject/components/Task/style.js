import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    items: {
    },
    item: {
        flexDirection:'row',
        backgroundColor:'white',
        marginBottom:15,
        paddingVertical:14,
        paddingHorizontal:20,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'space-between'
    },
    square: {
        width:36,
        height:28,
        borderRadius:8,
        backgroundColor:'#48CFED',
        justifyContent:'center',
        alignItems:'center'
    },
    number: {
        color:'white',
        fontSize:16,
        fontWeight:'700'
    },
    content: {
        width:'80%',
        fontSize:16
    }
})

export default styles;