import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", pw: "", pw2: "" });
  const [showModal, setShowModal] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
  }, []);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const hasMin = form.pw.length >= 8;
  const hasCap = /[A-Z]/.test(form.pw);
  const hasNum = /[0-9]/.test(form.pw);
  const hasSpec = /[!@#$%^&*]/.test(form.pw);
  const isStrong = hasMin && hasCap && hasNum && hasSpec;

  const getStr = () => {
    if (!form.pw) return 0;
    if (isStrong) return 3;
    if (form.pw.length >= 6) return 2;
    return 1;
  };

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={s.scroll}>
        
        <TouchableOpacity onPress={() => router.back()} style={s.btnBack}>
          <Ionicons name="chevron-back" size={16} color="#5d8767" />
          <Text style={s.textBack}>Volver</Text>
        </TouchableOpacity>

        <View style={s.header}>
          <View style={s.logoCircle}><FontAwesome5 name="leaf" size={26} color="#5d8767" /></View>
          <Text style={s.titleLogo}>EcoRuteando</Text>
        </View>

        <Animated.View style={[s.card, { opacity: fadeAnim }]}>
          <Text style={s.cardTitle}>Crear Cuenta</Text>
          <Text style={s.cardSubtitle}>Únete a la comunidad sostenible</Text>

          <View style={{ gap: 15 }}>
            <View>
              <Text style={s.label}>Nombre completo</Text>
              <TextInput placeholder="Tu nombre" style={s.input} onChangeText={(v)=>setForm({...form, name: v})}/>
            </View>
            
            <View>
              <Text style={s.label}>Correo electrónico</Text>
              <TextInput placeholder="tucorreo@email.com" style={s.input} onChangeText={(v)=>setForm({...form, email: v})}/>
            </View>

            <View>
              <Text style={s.label}>Contraseña</Text>
              <TextInput placeholder="Mín. 8 caracteres" secureTextEntry style={s.input} onChangeText={(v)=>setForm({...form, pw: v})}/>
              <View style={s.strContainer}>
                {[1, 2, 3].map(i => (
                  <View key={i} style={[s.strBar, {backgroundColor: i <= getStr() ? (getStr() === 3 ? '#5d8767' : '#fbbf24') : '#e5e7eb'}]} />
                ))}
                <Text style={[s.strText, {color: getStr() === 3 ? '#5d8767' : '#9ca3af'}]}>{getStr() === 3 ? 'Fuerte' : 'Usa mayúsculas y números'}</Text>
              </View>
            </View>

            <View>
              <Text style={s.label}>Confirmar contraseña</Text>
              <TextInput placeholder="Repite tu contraseña" secureTextEntry style={s.input} onChangeText={(v)=>setForm({...form, pw2: v})}/>
            </View>

            <TouchableOpacity onPress={() => setShowModal(true)} style={s.termsRow}>
              <View style={[s.check, accepted && s.checkActive]}>{accepted && <Ionicons name="checkmark" size={12} color="white" />}</View>
              <Text style={s.termsText}>Acepto los <Text style={s.termsLink}>términos y condiciones</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={!accepted || !isStrong} style={[s.mainBtn, (!accepted || !isStrong) && s.btnOff]}>
              <Text style={s.mainBtnText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Modal visible={showModal} animationType="fade" transparent>
          <View style={s.modalOverlay}>
            <View style={s.modalBox}>
               <Text style={s.modalTitle}>Términos y Condiciones</Text>
               <ScrollView onScroll={({nativeEvent}) => { if(nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 20) setHasRead(true); }} style={s.modalScroll}>
                 <Text style={s.modalText}>EcoRuteando · Enero 2025{"\n\n"}1. Aceptación: Al usar EcoRuteando (SENA Neiva) usted acepta...{"\n\n"}2. Servicio: Planificación de rutas ecológicas...{"\n\n"}3. Registro: Datos veraces...{"\n\n"}4. Uso: Prohibido contenido ofensivo...{"\n\n"}5. Privacidad: Ley 1581 de 2012...</Text>
               </ScrollView>
               <TouchableOpacity disabled={!hasRead} onPress={() => { setAccepted(true); setShowModal(false); }} style={[s.mainBtn, !hasRead && s.btnOff]}>
                 <Text style={s.mainBtnText}>{hasRead ? "Acepto los términos" : "Lee todo para aceptar"}</Text>
               </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6f3' },
  scroll: { flexGrow: 1, padding: 25 },
  btnBack: { position: 'absolute', top: 10, right: 15, flexDirection: 'row', alignItems: 'center' },
  textBack: { color: '#5d8767', fontWeight: 'bold', fontSize: 14 },
  header: { alignItems: 'center', marginVertical: 20 },
  logoCircle: { width: 60, height: 60, backgroundColor: 'white', borderRadius: 30, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  titleLogo: { fontSize: 24, fontWeight: 'bold', color: '#2d4a35', marginTop: 10 },
  card: { backgroundColor: 'white', borderRadius: 40, padding: 30, elevation: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 30 },
  cardTitle: { fontSize: 26, fontWeight: 'bold', color: '#2d4a35', textAlign: 'center' },
  cardSubtitle: { fontSize: 13, color: '#9ca3af', textAlign: 'center', marginBottom: 20 },
  label: { color: '#2d4a35', fontWeight: 'bold', marginBottom: 5, fontSize: 13 },
  input: { backgroundColor: '#ebf0ec', borderRadius: 15, padding: 15 },
  strContainer: { flexDirection: 'row', gap: 5, marginTop: 8, alignItems: 'center' },
  strBar: { flex: 1, height: 4, borderRadius: 2 },
  strText: { fontSize: 10, fontWeight: 'bold', marginLeft: 10 },
  termsRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  check: { width: 20, height: 20, borderRadius: 5, borderWidth: 1, borderColor: '#d1d5db', marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  checkActive: { backgroundColor: '#5d8767', borderColor: '#5d8767' },
  termsText: { fontSize: 12, color: '#6b7280' },
  termsLink: { color: '#5d8767', fontWeight: 'bold' },
  mainBtn: { backgroundColor: '#5d8767', padding: 18, borderRadius: 18, alignItems: 'center' },
  btnOff: { backgroundColor: '#cbd5e1' },
  mainBtnText: { color: 'white', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', padding: 20 },
  modalBox: { backgroundColor: 'white', borderRadius: 30, padding: 25, maxHeight: '80%' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#2d4a35', textAlign: 'center', marginBottom: 15 },
  modalScroll: { marginBottom: 20 },
  modalText: { fontSize: 12, color: '#4b5563', lineHeight: 18 }
});