import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
 
type CoinSide = 'cara' | 'coroa';
 
interface CoinDisplayProps {
  result: CoinSide | null;
  isFlipping: boolean;
}
 
/**
 * CoinDisplay
 *
 * Exibe a moeda animada durante o sorteio.
 * Usa Animated.Value para rotação no eixo Y (efeito flip).
 *
 * NOTA: As imagens devem estar em:
 *   assets/cara.png
 *   assets/coroa.png
 *
 * Enquanto as imagens não estiverem disponíveis, exibe um
 * placeholder com emoji/texto.
 */
const CoinDisplay: React.FC<CoinDisplayProps> = ({ result, isFlipping }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
 
  useEffect(() => {
    if (isFlipping) {
      // Animação de flip contínua durante o sorteio
      Animated.loop(
        Animated.sequence([
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(spinValue, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 3 },
      ).start();
 
      // Pulsa a moeda
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.15,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 0.9,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 4 },
      ).start();
    } else {
      // Reset suave ao terminar
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        tension: 80,
        friction: 6,
      }).start();
      spinValue.setValue(0);
    }
  }, [isFlipping]);
 
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
 
  const getCoinEmoji = () => {
    if (isFlipping) return '🪙';
    if (result === 'cara') return '🙂';
    if (result === 'coroa') return '👑';
    return '🪙';
  };
 
  const getCoinLabel = () => {
    if (isFlipping) return 'Sorteando...';
    if (result === 'cara') return 'CARA';
    if (result === 'coroa') return 'COROA';
    return 'Aguardando';
  };
 
  return (
    <View style={coinStyles.wrapper}>
      <Animated.View
        style={[
          coinStyles.coinCircle,
          result === 'cara' && coinStyles.coinCara,
          result === 'coroa' && coinStyles.coinCoroa,
          isFlipping && coinStyles.coinFlipping,
          {
            transform: [
              { rotateY: spin },
              { scale: scaleValue },
            ],
          },
        ]}
      >
        {/* 
          Substitua por <Image> quando tiver os assets:
          
          <Image
            source={
              result === 'coroa'
                ? require('../assets/coroa.png')
                : require('../assets/cara.png')
            }
            style={coinStyles.coinImage}
            resizeMode="contain"
          />
        */}
        <Text style={coinStyles.coinEmoji}>{getCoinEmoji()}</Text>
      </Animated.View>
 
      <Text style={coinStyles.coinLabel}>{getCoinLabel()}</Text>
    </View>
  );
};
 
const coinStyles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: 24,
  },
  coinCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#2a2a4a',
    borderWidth: 4,
    borderColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 18,
    elevation: 12,
  },
  coinCara: {
    backgroundColor: '#1a3a5c',
    borderColor: '#4fc3f7',
    shadowColor: '#4fc3f7',
  },
  coinCoroa: {
    backgroundColor: '#3a2a0a',
    borderColor: '#ffd54f',
    shadowColor: '#ffd54f',
  },
  coinFlipping: {
    borderColor: '#e94560',
    backgroundColor: '#2a2a4a',
  },
  coinImage: {
    width: 90,
    height: 90,
  },
  coinEmoji: {
    fontSize: 56,
  },
  coinLabel: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#a0a0c0',
    textTransform: 'uppercase',
  },
});
 
export default CoinDisplay;