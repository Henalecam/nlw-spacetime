import { styled } from 'nativewind'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import { ImageBackground } from 'react-native'
import blurBg from '../assets/bg-blur.png'
import { StatusBar } from 'expo-status-bar'
import Stripes from '../assets/stripes.svg'
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticate] = useState<null | boolean>(
    null,
  )

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      setIsUserAuthenticate(!!token)
    })
  }, [])

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="memories" redirect={!isUserAuthenticated} />
        <Stack.Screen name="new" redirect={!isUserAuthenticated} />
      </Stack>
    </ImageBackground>
  )
}
