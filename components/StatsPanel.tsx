import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
interface StatsPanelProps {
  totalFlips: number;
  playerWins: number;
  machineWins: number;
}
 
/**
 * StatsPanel
 *
 * Exibe as estatísticas do jogo:
 * - Total de sorteios realizados
 * - Vitórias do jogador
 * - Vitórias da máquina
 * - Percentual de acerto do jogador
 */
const StatsPanel: React.FC<StatsPanelProps> = ({
  totalFlips,
  playerWins,
  machineWins,
}) => {
  const playerPercent =
    totalFlips > 0 ? Math.round((playerWins / totalFlips) * 100) : 0;
  const machinePercent =
    totalFlips > 0 ? Math.round((machineWins / totalFlips) * 100) : 0;
 
  // Largura da barra de progresso do jogador (0–100%)
  const playerBarWidth = totalFlips > 0 ? `${playerPercent}%` : '0%';
  const machineBarWidth = totalFlips > 0 ? `${machinePercent}%` : '0%';
 
  return (
    <View style={statsStyles.container}>
      <Text style={statsStyles.panelTitle}>📊 Estatísticas</Text>
 
      {/* Total de sorteios */}
      <View style={statsStyles.totalRow}>
        <Text style={statsStyles.totalLabel}>Total de sorteios:</Text>
        <View style={statsStyles.totalBadge}>
          <Text style={statsStyles.totalValue}>{totalFlips}</Text>
        </View>
      </View>
 
      {/* Linha divisória */}
      <View style={statsStyles.divider} />
 
      {/* Vitórias do jogador */}
      <View style={statsStyles.statRow}>
        <View style={statsStyles.statInfo}>
          <Text style={statsStyles.statIcon}>🧑</Text>
          <View>
            <Text style={statsStyles.statLabel}>Você</Text>
            <Text style={statsStyles.statCount}>
              {playerWins} vitória{playerWins !== 1 ? 's' : ''}
            </Text>
          </View>
        </View>
        <Text style={[statsStyles.statPercent, statsStyles.playerColor]}>
          {playerPercent}%
        </Text>
      </View>
 
      {/* Barra de progresso do jogador */}
      <View style={statsStyles.barBackground}>
        <View
          style={[
            statsStyles.barFill,
            statsStyles.playerBarFill,
            { width: playerBarWidth as any },
          ]}
        />
      </View>
 
      {/* Vitórias da máquina */}
      <View style={[statsStyles.statRow, { marginTop: 14 }]}>
        <View style={statsStyles.statInfo}>
          <Text style={statsStyles.statIcon}>🤖</Text>
          <View>
            <Text style={statsStyles.statLabel}>Máquina</Text>
            <Text style={statsStyles.statCount}>
              {machineWins} vitória{machineWins !== 1 ? 's' : ''}
            </Text>
          </View>
        </View>
        <Text style={[statsStyles.statPercent, statsStyles.machineColor]}>
          {machinePercent}%
        </Text>
      </View>
 
      {/* Barra de progresso da máquina */}
      <View style={statsStyles.barBackground}>
        <View
          style={[
            statsStyles.barFill,
            statsStyles.machineBarFill,
            { width: machineBarWidth as any },
          ]}
        />
      </View>
 
      {/* Mensagem de liderança */}
      {totalFlips > 0 && (
        <Text style={statsStyles.leadMessage}>
          {playerWins > machineWins
            ? '🏆 Você está na frente!'
            : playerWins < machineWins
            ? '🤖 A máquina está ganhando!'
            : '🤝 Empate técnico!'}
        </Text>
      )}
    </View>
  );
};
 
const statsStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2a2a4a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e0e0f0',
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 14,
    color: '#a0a0c0',
  },
  totalBadge: {
    backgroundColor: '#e94560',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  totalValue: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#2a2a4a',
    marginBottom: 14,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  statInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e0e0f0',
  },
  statCount: {
    fontSize: 12,
    color: '#808099',
    marginTop: 1,
  },
  statPercent: {
    fontSize: 18,
    fontWeight: '800',
  },
  playerColor: {
    color: '#4fc3f7',
  },
  machineColor: {
    color: '#e94560',
  },
  barBackground: {
    height: 8,
    backgroundColor: '#2a2a4a',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
  playerBarFill: {
    backgroundColor: '#4fc3f7',
  },
  machineBarFill: {
    backgroundColor: '#e94560',
  },
  leadMessage: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#ffd54f',
    letterSpacing: 0.5,
  },
});
 
export default StatsPanel;