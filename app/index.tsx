import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeTabs() {
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#edf4ef' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#064e3b' }}>¡Bienvenido a EcoRuteando!</Text>
      <TouchableOpacity 
        onPress={() => router.replace('/auth/login')}
        style={{ marginTop: 20, padding: 10, backgroundColor: '#10b981', borderRadius: 10 }}
      >
        <Text style={{ color: 'white' }}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}