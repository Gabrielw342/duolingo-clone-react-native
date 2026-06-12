import { View, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles } from "../styles/MainStyles";

export default function MainScreen() {
  return (
    <View style={styles.container}>

      <Video
        source={require("../../assets/images/parabensZE!.mp4")}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay
        isMuted={false}
        volume={1.0}
      />

      <Text style={styles.title}>
        Bem-vindo ZE!
      </Text>

      <Text style={styles.subtitle}>
        PARABENS!
        Você entrou com sucesso no Duolingo Clone.
      </Text>

    </View>
  );
}