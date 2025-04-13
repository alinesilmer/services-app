import { Stack } from 'expo-router';
// import React from 'react';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
      <Stack.Screen name="register" options={{ title: "Registrar Usuario" }} />
    </Stack>
  );
}

