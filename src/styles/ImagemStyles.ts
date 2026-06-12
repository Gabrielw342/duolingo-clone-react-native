import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071d2b",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#6f8490",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  button: {
  backgroundColor: "#58cc02",
  paddingHorizontal: 30,
  paddingVertical: 15,
  borderRadius: 12,
  marginTop: 30,
},

buttonText: {
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: 18,
},
});