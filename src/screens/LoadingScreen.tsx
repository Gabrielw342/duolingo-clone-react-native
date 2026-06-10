import { View, Text, Image } from "react-native";
import { styles } from "../styles/LoadingStyles";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/duolingo-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Duolingo
      </Text>

      <Text style={styles.subtitle}>
        Carregando...
      </Text>
    </View>
  );
}