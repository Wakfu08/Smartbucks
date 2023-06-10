import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [stateData, setData] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:5000/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'My Expenses', style: { color: '#fff', fontSize: 20 } }}
                containerStyle={{ backgroundColor: 'green' }}
                leftComponent={<Icon name='menu' color='#fff' />}
            />
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableHeaderText, styles.tableHeaderCell]}>Key</Text>
                    <Text style={[styles.tableHeaderText, styles.tableHeaderCell]}>Value</Text>
                </View>
                {Object.entries(stateData).map(([key, value]) => (
                    <View key={key} style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableKeyCell]}>{key}</Text>
                        <Text style={[styles.tableCell, styles.tableValueCell]}>{parseFloat(value).toFixed(2)}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tableContainer: {
        backgroundColor: 'white',
        padding: 24,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 8,
        marginBottom: 8,
    },
    tableHeaderText: {
        paddingLeft: 12,
        fontSize: 16,
        fontWeight: 'bold',
    },
    tableHeaderCell: {
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    tableCell: {
        flex: 1,
        fontSize: 16,
    },
    tableKeyCell: {
        fontWeight: 'bold',
        marginRight: 16,
    },
    tableValueCell: {
        textAlign: 'right',
    },
});
