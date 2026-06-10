import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071d2b",
    paddingHorizontal: 20,
    paddingTop: 80,
  },

  title: {
    color: "#5f7280",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },

  inputContainer: {
    backgroundColor: "#183240",
    borderWidth: 1,
    borderColor: "#36505d",
    borderRadius: 15,
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 2,
  },

  inputText: {
    color: "#6f8490",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#58cc02",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  forgotPassword: {
  color: "#1cb0f6",
  textAlign: "center",
  marginTop: 25,
  fontSize: 16,
  fontWeight: "bold",
},

separator: {
  color: "#6f8490",
  textAlign: "center",
  marginTop: 40,
  marginBottom: 20,
  fontSize: 16,
  fontWeight: "bold",
},

socialButton: {
  backgroundColor: "#183240",
  borderWidth: 1,
  borderColor: "#36505d",
  borderRadius: 15,
  height: 55,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 12,
},

socialButtonText: {
  color: "#ffffff",
  fontSize: 16,
  fontWeight: "bold",
},

});