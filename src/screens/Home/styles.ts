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
    form: {
        padding: 24,
        marginTop: -55,
        alignItems: "center",
        zIndex: 10
    },
    tasks: {
        padding: 24,

    },
    labels: {
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    created: {
        flexDirection: "row"
    },
    textCreated: {
        color: "#4EA8DE",
        fontWeight: 'bold',
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
        fontWeight: 'bold'
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
        marginTop: 20,
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
        lineHeight: 20
    },
    listEmptyText: {
        fontSize: 14,
        color: "#808080"
    }
});
