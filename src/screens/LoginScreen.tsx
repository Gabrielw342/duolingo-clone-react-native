import { View, Text, TextInput, TouchableOpacity  } from "react-native";
import { styles } from "../styles/LoginStyles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
  <Text style={styles.title}>
    Insira os seus dados
  </Text>

  <TextInput
    style={styles.inputContainer}
    placeholder="E-mail, telefone ou nome de usuário"
    placeholderTextColor="#6f8490"
  />

  <TextInput
    style={styles.inputContainer}
    placeholder="Senha"
    placeholderTextColor="#6f8490"
    secureTextEntry
  />

  <TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText}>
    ENTRAR
  </Text>
</TouchableOpacity>
<Text style={styles.forgotPassword}>
  ESQUECEU A SENHA?
</Text>

<Text style={styles.separator}>
  OU
</Text>
<TouchableOpacity style={styles.socialButton}>
  <Text style={styles.socialButtonText}>
    CONTINUAR COM GOOGLE
  </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.socialButton}>
  <Text style={styles.socialButtonText}>
    CONTINUAR COM FACEBOOK
  </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.socialButton}>
  <Text style={styles.socialButtonText}>
    CONTINUAR COM APPLE
  </Text>
</TouchableOpacity>

</View>
  );
}