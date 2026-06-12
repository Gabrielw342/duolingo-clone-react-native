import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/LoginStyles";

export default function LoginScreen({ setTela }: any) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function validarLogin() {
    if (email === "gabriel" && senha === "1234") {
      setTela("loading");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Insira os seus dados
      </Text>

      <TextInput
        style={styles.inputContainer}
        placeholder="E-mail, telefone ou nome de usuário"
        placeholderTextColor="#6f8490"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.inputContainer}
        placeholder="Senha"
        placeholderTextColor="#6f8490"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={validarLogin}
      >
        <Text style={styles.buttonText}>
          ENTRAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTela("imagem")}
      >
        <Text style={styles.forgotPassword}>
          ESQUECEU A SENHA?
        </Text>
      </TouchableOpacity>

      <Text style={styles.separator}>
        OU
      </Text>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => setTela("imagem")}
      >
        <Text style={styles.socialButtonText}>
          CONTINUAR COM GOOGLE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => setTela("imagem")}
      >
        <Text style={styles.socialButtonText}>
          CONTINUAR COM FACEBOOK
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => setTela("imagem")}
      >
        <Text style={styles.socialButtonText}>
          CONTINUAR COM APPLE
        </Text>
      </TouchableOpacity>

    </View>
  );
}