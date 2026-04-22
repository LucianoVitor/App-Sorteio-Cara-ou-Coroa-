import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
 
  // ── ScrollView ─────────────────────────────────────────────
  scrollView: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
 
  // ── Cabeçalho (fixo, fora do scroll) ──────────────────────
  header: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4a',
    backgroundColor: '#1a1a2e',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#e0e0f0',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6060a0',
    marginTop: 4,
    letterSpacing: 0.5,
  },
 
  // ── Banner de resultado ────────────────────────────────────
  resultBanner: {
    width: '100%',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
  },
  resultBannerWin: {
    backgroundColor: '#0d2137',
    borderColor: '#4fc3f7',
  },
  resultBannerLose: {
    backgroundColor: '#2a0d14',
    borderColor: '#e94560',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#e0e0f0',
    marginBottom: 2,
  },
  resultSubText: {
    fontSize: 13,
    color: '#a0a0c0',
  },
  resultHighlight: {
    fontWeight: '800',
    color: '#ffd54f',
  },
 
  // ── Picker ─────────────────────────────────────────────────
  pickerWrapper: {
    width: '100%',
    marginTop: 8,
    marginBottom: 12,
  },
  pickerLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8080b0',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  pickerContainer: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a2a5a',
    overflow: 'hidden',
  },
  picker: {
    height: 52,
    width: '100%',
    color: '#e0e0f0',
  },
 
  // ── Botão principal ────────────────────────────────────────
  flipButton: {
    width: '100%',
    backgroundColor: '#e94560',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 4,
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  flipButtonDisabled: {
    backgroundColor: '#5a2035',
    shadowOpacity: 0.1,
    elevation: 2,
  },
  flipButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
 
  // ── Botão de reset ─────────────────────────────────────────
  resetButton: {
    marginTop: 14,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3a3a6a',
    backgroundColor: 'transparent',
  },
  resetButtonText: {
    fontSize: 13,
    color: '#6060a0',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});