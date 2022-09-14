import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#333333",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    data: {
        color: '#f2f2f2',
        fontSize: 14,
        flex: 1,
        marginLeft: 8
    },
    dataCrossed: {
        textDecorationLine: "line-through",
        color: "#808080",
        fontSize: 14,
        flex: 1,
        marginLeft: 8
    },
    button: {
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8
    },
    icon: {
        width: 36,
        height: 36
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 9999,
        borderWidth: 1.5,
        borderColor: "#4ea8de",
       
        marginLeft: 12,
    },
});
