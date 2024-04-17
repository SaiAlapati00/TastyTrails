import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome.png")}
				style={{ marginTop: 100, marginBottom: 50 }}
			/>

			<Text style={{ color: "#ff1493", fontSize: 42, fontWeight: "bold" }}>
				Tasty Trails
			</Text>

			<Text
				style={{
					fontSize: 22,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 60,
				}}
			>
				Embark on a flavourful journey
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#dda0dd",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#800080", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
