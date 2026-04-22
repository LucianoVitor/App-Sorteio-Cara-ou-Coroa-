import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CoinDisplay from './components/CoinDisplay';
import StatsPanel from './components/StatsPanel';
import { styles } from './styles/styles';
 
type CoinSide = 'cara' | 'coroa';
 
const App = () => {
  const [selectedOption, setSelectedOption] = useState<CoinSide>('cara');
  const [currentResult, setCurrentResult] = useState<CoinSide | null>(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [machineWins, setMachineWins] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [lastPlayerChoice, setLastPlayerChoice] = useState<CoinSide | null>(null);
 
  const flipCoin = () => {
    if (isFlipping) return;
 
    setIsFlipping(true);
    setCurrentResult(null);
 
    // Simula o sorteio após animação
    setTimeout(() => {
      const result: CoinSide = Math.random() < 0.5 ? 'cara' : 'coroa';
      const playerWon = result === selectedOption;
 
      setCurrentResult(result);
      setLastPlayerChoice(selectedOption);
      setTotalFlips(prev => prev + 1);
 
      if (playerWon) {
        setPlayerWins(prev => prev + 1);
      } else {
        setMachineWins(prev => prev + 1);
      }
 
      setIsFlipping(false);
    }, 1200);
  };
 
  const resetGame = () => {
    setCurrentResult(null);
    setTotalFlips(0);
    setPlayerWins(0);
    setMachineWins(0);
    setLastPlayerChoice(null);
    setIsFlipping(false);
  };
 
  const getResultMessage = () => {
    if (!currentResult || !lastPlayerChoice) return '';
    if (currentResult === lastPlayerChoice) {
      return '🎉 Você acertou!';
    }
    return '😔 A máquina venceu!';
  };
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
 
      {/* Cabeçalho fixo fora do scroll */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🪙 Cara ou Coroa</Text>
        <Text style={styles.headerSubtitle}>Faça sua escolha e teste a sorte!</Text>
      </View>
 
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Exibição da moeda */}
        <CoinDisplay
          result={currentResult}
          isFlipping={isFlipping}
        />
 
        {/* Mensagem de resultado */}
        {currentResult && !isFlipping && (
          <View style={[
            styles.resultBanner,
            currentResult === lastPlayerChoice
              ? styles.resultBannerWin
              : styles.resultBannerLose,
          ]}>
            <Text style={styles.resultText}>{getResultMessage()}</Text>
            <Text style={styles.resultSubText}>
              Saiu: <Text style={styles.resultHighlight}>{currentResult.toUpperCase()}</Text>
            </Text>
          </View>
        )}
 
        {/* Picker de seleção */}
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Sua escolha:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(value) => setSelectedOption(value as CoinSide)}
              style={styles.picker}
              dropdownIconColor="#e94560"
            >
              <Picker.Item label="🙂 Cara" value="cara" />
              <Picker.Item label="👑 Coroa" value="coroa" />
            </Picker>
          </View>
        </View>
 
        {/* Botão de sortear */}
        <TouchableOpacity
          style={[styles.flipButton, isFlipping && styles.flipButtonDisabled]}
          onPress={flipCoin}
          activeOpacity={0.8}
          disabled={isFlipping}
        >
          <Text style={styles.flipButtonText}>
            {isFlipping ? '⏳ Sorteando...' : '🎲 Sortear!'}
          </Text>
        </TouchableOpacity>
 
        {/* Painel de estatísticas */}
        <StatsPanel
          totalFlips={totalFlips}
          playerWins={playerWins}
          machineWins={machineWins}
        />
 
        {/* Botão de reset */}
        {totalFlips > 0 && (
          <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
            <Text style={styles.resetButtonText}>🔄 Reiniciar Jogo</Text>
          </TouchableOpacity>
        )}
 
      </ScrollView>
    </SafeAreaView>
  );
};
 
export default App;