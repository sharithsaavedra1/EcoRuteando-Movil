import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#f0f4f1]">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        
        <TouchableOpacity className="flex-row items-center justify-end mb-4">
          <FontAwesome5 name="chevron-left" size={12} color="#9ca3af" />
          <Text className="text-gray-400 font-bold ml-2">VOLVER</Text>
        </TouchableOpacity>

        <View className="items-center mb-6">
          <View className="w-14 h-14 bg-white rounded-full items-center justify-center shadow-sm mb-2">
            <FontAwesome5 name="leaf" size={24} color="#10b981" />
          </View>
          <Text className="text-xl font-bold text-[#064e3b]">EcoRuteando</Text>
        </View>

        <Text className="text-center italic text-xl font-serif text-[#064e3b] mb-6">Crear Cuenta</Text>

        <View className="space-y-4">
          <View className="flex-row space-x-4">
            <TextInput placeholder="Nombre" className="flex-1 bg-[#e4ece6] p-4 rounded-xl" />
            <TextInput placeholder="Apellido" className="flex-1 bg-[#e4ece6] p-4 rounded-xl" />
          </View>
          
          <TextInput placeholder="tucorreo@email.com" className="bg-[#e4ece6] p-4 rounded-xl" keyboardType="email-address" />
          
          <View className="flex-row items-center bg-[#e4ece6] rounded-xl pr-4">
            <TextInput placeholder="Contraseña" secureTextEntry className="flex-1 p-4" />
            <FontAwesome5 name="eye-slash" size={18} color="#9ca3af" />
          </View>

          <TextInput placeholder="Confirmar contraseña" secureTextEntry className="bg-[#e4ece6] p-4 rounded-xl" />

          {/* Checkbox Términos */}
          <TouchableOpacity 
            onPress={() => setAccepted(!accepted)}
            className="flex-row items-center mt-2"
          >
            <View className={`w-5 h-5 rounded border ${accepted ? 'bg-[#064e3b] border-[#064e3b]' : 'border-gray-400'} items-center justify-center mr-2`}>
              {accepted && <FontAwesome5 name="check" size={10} color="white" />}
            </View>
            <Text className="text-gray-600">Acepto los <Text className="text-[#10b981] font-bold underline">términos y condiciones</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#a3bfae] py-4 rounded-2xl items-center shadow-lg mt-4">
            <Text className="text-white text-lg font-bold">Crear cuenta gratuita</Text>
          </TouchableOpacity>

          {/* Social Icons en Registro (NUEVO) */}
          <View className="items-center mt-6">
            <Text className="text-gray-400 text-[10px] mb-3 font-bold tracking-widest">REGISTRARSE CON</Text>
            <View className="flex-row space-x-6">
              <SocialIcon name="google" color="#DB4437" />
              <SocialIcon name="facebook" color="#4267B2" />
              <SocialIcon name="twitter" color="#000000" />
            </View>
          </View>

          <TouchableOpacity className="mt-6 items-center">
            <Text className="text-gray-500">¿Ya tienes cuenta? <Text className="text-[#10b981] font-bold">Iniciar sesión</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const SocialIcon = ({ name, color }: { name: string, color: string }) => (
  <TouchableOpacity className="w-12 h-12 bg-white border border-gray-100 rounded-full items-center justify-center shadow-sm">
    <FontAwesome5 name={name} size={18} color={color} />
  </TouchableOpacity>
);