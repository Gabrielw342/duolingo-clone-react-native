import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/ImagemStyles";

export default function ImagemScreen({ setTela }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        OPS!
      </Text>

      <Text style={styles.subtitle}>
        Eu não codei essa parte
      </Text>

      <Image
        source={require("../../assets/images/OIP.jpg")}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setTela("login")}
      >
        <Text style={styles.buttonText}>
          VOCE NAO VIU NADA
        </Text>
      </TouchableOpacity>

    </View>
  );
}