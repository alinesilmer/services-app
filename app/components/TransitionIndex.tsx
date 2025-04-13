import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Login from '../(auth)/login'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

// Medidas de pantalla para deslizar el login
const { height } = Dimensions.get('window');

/**
 * Componente que maneja la transición inicial:
 * 1) Fondo azul.
 * 2) Aparece logo.
 * 3) Aparecen íconos.
 * 4) Se ocultan íconos.
 * 5) Se oculta logo.
 * 6) Se desliza la pantalla de login.
 */
export default function TransitionIndex() {
  // Valores compartidos para animaciones
  const logoOpacity = useSharedValue(0);
  const iconsOpacity = useSharedValue(0);
  const loginTranslateY = useSharedValue(+height);

  useEffect(() => {
    // Encadenamos las animaciones en orden:
    // 1) Mostrar logo (700ms)
    logoOpacity.value = withTiming(1, { duration: 700 }, () => {
      // 2) Aparecen íconos (600ms)
      iconsOpacity.value = withTiming(1, { duration: 600 }, () => {
        // 3) Esperamos 1 segundo para que se vean los íconos
        runOnJS(setTimeout)(() => {
          // 4) Ocultar íconos (500ms)
          iconsOpacity.value = withTiming(0, { duration: 500 }, () => {
            // 5) Ocultar logo (500ms)
            logoOpacity.value = withTiming(0, { duration: 500 }, () => {
              // 6) Mostrar login deslizando desde arriba (600ms)
              loginTranslateY.value = withTiming(0, { duration: 600 });
            });
          });
        }, 1000);
      });
    });
  }, []);

  // Estilos animados para logo e íconos
  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
  }));

  const iconsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: iconsOpacity.value,
  }));

  // Animación del contenedor de login
  const loginAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: loginTranslateY.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Fondo azul */}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.blueBackground} />
      </View>

      {/* Logo */}
      <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
        <Image
          source={require('../../assets/images/logo-service-app.svg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoTitle}>Mi App</Text>
      </Animated.View>

      {/* Iconos arriba/abajo */}
      <Animated.View style={[styles.iconsContainer, iconsAnimatedStyle]}>
        {/* EJEMPLO: 2 íconos arriba */}
        <Image
          source={require('../../assets/images/open-icon2.svg')}
          style={[styles.icon, { top: 50, left: 30 }]}
        />
        <Image
          source={require('../../assets/images/open-icon3.svg')}
          style={[styles.icon, { top: 80, right: 30 }]}
        />
        {/* EJEMPLO: 2 íconos abajo */}
        <Image
          source={require('../../assets/images/open-icon4.svg')}

          style={[styles.icon, { bottom: 70, left: 40 }]}
        />
        <Image
          source={require('../../assets/images/open-icon5.svg')}
          style={[styles.icon, { bottom: 50, right: 40 }]}
        />
      </Animated.View>

      {/* Contenedor del login, se desliza desde arriba */}
      <Animated.View style={[styles.loginContainer, loginAnimatedStyle]}>
        {/* <Text style={styles.loginTitle}>Aquí iría tu formulario de Login</Text> */}
        <Login/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBackground: {
    flex: 1,
    backgroundColor: '#0261A4', // azul, ajusta a tu gusto
  },
  logoContainer: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoTitle: {
    marginTop: 8,
    fontSize: 24,
    color: '#fff',
  },
  iconsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  loginContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
