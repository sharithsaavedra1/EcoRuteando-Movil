import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", pw: "" });
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={s.scroll}>
        
        <TouchableOpacity onPress={() => router.replace('/')} style={s.btnBack}>
          <Ionicons name="chevron-back" size={16} color="#5d8767" />
          <Text style={s.textBack}>Volver</Text>
        </TouchableOpacity>

        <View style={s.header}>
          <View style={s.logoCircle}>
            <FontAwesome5 name="leaf" size={30} color="#5d8767" />
          </View>
          <Text style={s.titleLogo}>EcoRuteando</Text>
          <Text style={s.subtitleLogo}>Movilidad sostenible para tu ciudad</Text>
        </View>

        <Animated.View style={[s.card, { opacity: fadeAnim }]}>
          <Text style={s.cardTitle}>Iniciar sesión</Text>
          <Text style={s.cardSubtitle}>Bienvenido de vuelta a EcoRuteando.</Text>

          <View style={s.inputGroup}>
            <Text style={s.label}>Correo electrónico</Text>
            <TextInput 
              placeholder="tucorreo@email.com"
              style={s.input}
              placeholderTextColor="#9ca3af"
              onChangeText={(v) => setForm({...form, email: v})}
            />
          </View>

          <View style={s.inputGroup}>
            <Text style={s.label}>Contraseña</Text>
            <View style={s.pwContainer}>
              <TextInput 
                placeholder="Mín. 8 caracteres"
                secureTextEntry
                style={s.inputPw}
                placeholderTextColor="#9ca3af"
                onChangeText={(v) => setForm({...form, pw: v})}
              />
              <Ionicons name="eye-outline" size={20} color="#9ca3af" />
            </View>
            <TouchableOpacity style={s.forgotBtn}>
              <Text style={s.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.replace('/tabs')} style={s.mainBtn}>
            <Text style={s.mainBtnText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <View style={s.divider}>
             <View style={s.line} /><Text style={s.dividerText}>Continuar con</Text><View style={s.line} />
          </View>

          <View style={s.socialRow}>
            <TouchableOpacity style={s.socialIcon}><Ionicons name="logo-google" size={24} color="#DB4437" /></TouchableOpacity>
            <TouchableOpacity style={s.socialIcon}><Ionicons name="logo-facebook" size={24} color="#4267B2" /></TouchableOpacity>
            <TouchableOpacity style={s.socialIcon}><Ionicons name="logo-twitter" size={24} color="#000000" /></TouchableOpacity>
          </View>
        </Animated.View>

        <View style={s.footer}>
          <Text style={s.footerText}>¿No tienes cuenta? <Text style={s.linkText} onPress={() => router.push('/auth/register')}>Regístrate aquí.</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6f3' },
  scroll: { flexGrow: 1, padding: 25, justifyContent: 'center' },
  btnBack: { position: 'absolute', top: 10, right: 15, flexDirection: 'row', alignItems: 'center' },
  textBack: { color: '#5d8767', fontWeight: 'bold', fontSize: 14 },
  header: { alignItems: 'center', marginBottom: 25 },
  logoCircle: { width: 70, height: 70, backgroundColor: 'white', borderRadius: 35, alignItems: 'center', justifyContent: 'center', elevation: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, marginBottom: 10 },
  titleLogo: { fontSize: 32, fontWeight: 'bold', color: '#2d4a35' },
  subtitleLogo: { color: '#5d8767', fontSize: 12, fontWeight: '500' },
  card: { backgroundColor: 'white', borderRadius: 40, padding: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.1, shadowRadius: 30, elevation: 15, borderWidth: 1, borderColor: 'rgba(93, 135, 103, 0.05)' },
  cardTitle: { fontSize: 28, fontWeight: 'bold', color: '#2d4a35', textAlign: 'center', marginBottom: 5 },
  cardSubtitle: { color: '#9ca3af', fontSize: 14, textAlign: 'center', marginBottom: 25 },
  inputGroup: { marginBottom: 20 },
  label: { color: '#2d4a35', fontWeight: 'bold', marginBottom: 8, fontSize: 14 },
  input: { backgroundColor: '#ebf0ec', borderRadius: 15, padding: 15, color: '#374151' },
  pwContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ebf0ec', borderRadius: 15, paddingRight: 15 },
  inputPw: { flex: 1, padding: 15, color: '#374151' },
  forgotBtn: { alignItems: 'flex-end', marginTop: 10 },
  forgotText: { color: '#5d8767', fontWeight: 'bold', fontSize: 13 },
  mainBtn: { backgroundColor: '#5d8767', padding: 18, borderRadius: 18, alignItems: 'center', marginTop: 10, shadowColor: '#5d8767', shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 },
  mainBtnText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  line: { flex: 1, height: 1, backgroundColor: '#e5e7eb' },
  dividerText: { marginHorizontal: 10, fontSize: 12, color: '#9ca3af' },
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
  socialIcon: { width: 55, height: 55, backgroundColor: 'white', borderRadius: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#f3f4f6', elevation: 3, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  footer: { marginTop: 30, alignItems: 'center' },
  footerText: { color: '#9ca3af' },
  linkText: { color: '#5d8767', fontWeight: 'bold' }
});