import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons'; // Para los logos de redes

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#f0f4f1]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        
        {/* Logo y Nombre */}
        <View className="items-center mb-8">
          <View className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-sm mb-4">
            <FontAwesome5 name="leaf" size={30} color="#10b981" />
          </View>
          <Text className="text-2xl font-bold text-[#064e3b]">EcoRuteando</Text>
        </View>

        {/* Tarjeta de Formulario */}
        <View className="bg-white p-8 rounded-[32px] shadow-xl">
          <Text className="text-2xl font-bold text-[#064e3b] mb-2">Iniciar sesión</Text>
          <Text className="text-gray-500 mb-6">Bienvenido de vuelta a EcoRuteando.</Text>

          <View className="mb-4">
            <Text className="text-[#064e3b] font-semibold mb-2 ml-1">Correo electrónico</Text>
            <TextInput 
              placeholder="tucorreo@email.com"
              className="bg-[#eef2ef] p-4 rounded-2xl text-gray-700"
              keyboardType="email-address"
            />
          </View>

          <View className="mb-2">
            <Text className="text-[#064e3b] font-semibold mb-2 ml-1">Contraseña</Text>
            <View className="flex-row items-center bg-[#eef2ef] rounded-2xl pr-4">
              <TextInput 
                placeholder="Mín. 8 caracteres"
                className="flex-1 p-4 text-gray-700"
                secureTextEntry
              />
              <FontAwesome5 name="eye-slash" size={18} color="#9ca3af" />
            </View>
          </View>

          <TouchableOpacity className="items-end mb-6">
            <Text className="text-[#10b981] font-bold">¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#a3bfae] py-4 rounded-2xl items-center shadow-md mb-8">
            <Text className="text-white text-lg font-bold">Iniciar sesión</Text>
          </TouchableOpacity>

          {/* Redes Sociales (Solo iconos) */}
          <View className="items-center">
            <Text className="text-gray-400 text-xs mb-4">CONTINUAR CON</Text>
            <View className="flex-row justify-center space-x-6">
              <SocialIcon name="google" color="#DB4437" />
              <SocialIcon name="facebook" color="#4267B2" />
              <SocialIcon name="twitter" color="#000000" />
            </View>
          </View>
        </View>

        <TouchableOpacity className="mt-8 items-center">
          <Text className="text-gray-600">¿No tienes cuenta? <Text className="text-[#10b981] font-bold">Regístrate aquí.</Text></Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// Subcomponente para iconos sociales
const SocialIcon = ({ name, color }: { name: string, color: string }) => (
  <TouchableOpacity className="w-14 h-12 bg-white border border-gray-100 rounded-xl items-center justify-center shadow-sm">
    <FontAwesome5 name={name} size={20} color={color} />
  </TouchableOpacity>
);