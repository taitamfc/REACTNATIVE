import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.containerTop}>
				<View style={styles.top}>
					<Text>Top Left</Text>
				</View>
			</View>
			<View style={styles.containerCenter}>
				<View style={styles.center}>
					<Text>Center</Text>
				</View>
			</View>
			<View style={styles.containerBottom}>
				<View style={styles.bottom}>
					<Text>Top Right</Text>
				</View>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e7feff'
	},
	containerTop: {
		flex: 1,
		backgroundColor: 'red'
	},
	containerCenter: {
		flex: 1,
		backgroundColor: 'yellow',
		justifyContent:'center',
		alignItems:'center'
	},
	containerBottom: {
		flex: 1,
		backgroundColor: 'green'
	},
	top: {
		marginTop: 80,
		marginLeft: 40,
		marginRight: 40,
		backgroundColor: 'pink',
		paddingVertical: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius:12
	},
	center: {
		width:150,
		height:150,
		backgroundColor:'red',
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center'
	},
	bottom: {
		marginTop: 80,
		marginLeft: 40,
		marginRight: 40,
		backgroundColor: 'blue',
		paddingVertical: 20,
		textAlign: 'right',
		fontWeight: 'bold',
		borderRadius:12,
		color:'white'
	}
});
