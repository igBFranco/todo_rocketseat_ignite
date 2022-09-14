import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A",
    },
    logoBox: {
        width: "100%",
        height: 173,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D0D0D",
    },
    logo: {
        width: 110,
        height: 32,
    },
    formContainer: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    form: {
        padding: 24,
        marginTop: -55,
        alignItems: "center",
        zIndex: 10
    },
    input: {
        width: 271,
        height: 54,
        borderRadius: 6,
        backgroundColor: "#262626",
        padding: 16,
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        borderColor: "#0D0D0D",
        borderStyle: "solid",
        borderWidth: 1,
        color:"#f2f2f2"
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    icon: {
        height: 16,
        width: 16
    },
    tasks: {
        padding: 24,

    },
    labels: {
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    created: {
        flexDirection: "row"
    },
    textCreated: {
        color: "#4EA8DE",
        fontWeight: 'bold',
        fontFamily: 'Inter_700Bold',
    },
    createdCounter: {
        marginLeft: 8,
        width: 25,
        height: 19,
        backgroundColor: "#333333",
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#d9d9d9"
    },
    finished: {
        flexDirection: "row"
    },
    textFinished: {
        color: "#8284fa",
        fontWeight: 'bold',
        fontFamily: 'Inter_700Bold',
    },
    finishedCounter: {
        marginLeft: 8,
        width: 25,
        height: 19,
        backgroundColor: "#333333",
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyList: {
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderTopColor: '#333333',
        borderTopWidth: 1,
    },
    emptyListIcon: {
        height: 56,
        width: 56,
    },
    listEmptyTextBold: {
        marginTop: 16,
        fontWeight: "bold",
        fontSize: 14,
        color: "#808080",
        lineHeight: 20,
        fontFamily: 'Inter_700Bold',
    },
    listEmptyText: {
        fontSize: 14,
        color: "#808080",
        fontFamily: 'Inter_400Regular',
    }
});
