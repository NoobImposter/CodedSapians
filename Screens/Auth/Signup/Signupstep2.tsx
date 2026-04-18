import { View, Text, Platform, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthProps } from '../../../components/Navigation/Authnavigation';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

type Naviprop=NativeStackNavigationProp<AuthProps>


const Signupstep2 = () => {

    const navigator=useNavigation<Naviprop>()
    
  
const [selectedEmployment, setSelectedEmployment] = useState('Salaried');
  const [obligations, setObligations] = useState('0.00');
  const [dependents, setDependents] = useState(2);
  const [hasMyTMAccount, setHasMyTMAccount] = useState(false);

  const employmentOptions = [
    'Salaried',
    'Self-employed / Business owner',
    'Freelancer',
    'Student',
    'Retired / Pensioner',
  ];




  const increaseDependents = () => {
    if (dependents < 10) setDependents(dependents + 1);
  };

  const decreaseDependents = () => {
    if (dependents > 0) setDependents(dependents - 1);
  };

  return (
    <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#rgba(248, 249, 250, 0.95)" />
        
        <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton}  onPress={()=>navigator.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.stepText}>STEP 2 OF 3</Text>
          </View>

          <View style={styles.spacer} />
        </View>
      </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f8f9fa',
  },

  header: {
    backgroundColor: 'rgba(248, 249, 250, 0.95)',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e7e8e9',
  },

  headerContent: {
   flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingVertical: 5,
    width: '100%',
  },

  backButton: {
    padding: 8,
  },

  backIcon: {
    fontSize: 28,
    color: '#00672b',
    fontWeight: '600',
    width:50
  },

  progressContainer: {
    alignItems:"center",
    justifyContent:"center",
    width:100,
    right:25,
    flex:1
    
  },

  progressBar: {
    width: 96,
    height: 6,
    backgroundColor: '#e1e3e4',
    borderRadius: 9999,
    overflow: 'hidden',
    alignSelf:"center"
  },

  progressFill: {
    width: '70%',
    height: '100%',
    backgroundColor: '#008339',
  },

  stepText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#00672b',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 4,
  },

  spacer: {
    width: 24,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 90,
    paddingBottom: 140,
    paddingHorizontal: 24,
  },

  main: {
    maxWidth: 428,
    alignSelf: 'center',
    width: '100%',
    gap: 32,
  },

  headline: {
    fontSize: 24,
    fontWeight: '700',
    color: '#191c1d',
    letterSpacing: -0.5,
    lineHeight: 30,
  },

  section: {
    gap: 12,
  },

  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#595958',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  // Segmented Control
  segmentedGrid: {
    gap: 12,
  },

  segmentSelected: {
    height: 56,
    backgroundColor: '#008339',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#008339',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },

  segmentSelectedText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  segmentOption: {
    height: 56,
    backgroundColor: '#f3f4f5',
    borderWidth: 1,
    borderColor: '#e9bcb6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  segmentOptionText: {
    color: '#5e3f3b',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  // Obligations
  obligationsInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e8e9',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16,
  },

  currencyLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5e3f3b',
    marginRight: 8,
  },

  obligationsInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#191c1d',
    padding: 0,
  },

  // Bento Grid
  bentoGrid: {
    gap: 16,
  },

  dependentsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  dependentsInfo: {
    flex: 1,
  },

  dependentsSubtitle: {
    fontSize: 13,
    color: '#5e3f3b',
    marginTop: 4,
  },

  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f5',
    borderRadius: 12,
    padding: 4,
    gap: 8,
  },

  stepperButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  stepperIcon: {
    fontSize: 22,
    color: '#00672b',
    fontWeight: '600',
  },

  stepperValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#191c1d',
    width: 24,
    textAlign: 'center',
  },

  stepperAddButton: {
    width: 40,
    height: 40,
    backgroundColor: '#008339',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#008339',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  stepperAddIcon: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600',
  },

  toggleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f4f5',
    padding: 20,
    borderRadius: 20,
  },

  toggleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  walletIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: '#ffdad5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  walletIcon: {
    fontSize: 22,
    color: '#bc000c',
  },

  toggleLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#191c1d',
  },

  toggleSwitch: {
    width: 48,
    height: 24,
    backgroundColor: '#d9dadb',
    borderRadius: 9999,
    padding: 3,
  },

  toggleSwitchActive: {
    backgroundColor: '#008339',
  },

  toggleKnob: {
    width: 18,
    height: 18,
    backgroundColor: '#ffffff',
    borderRadius: 9999,
  },

  toggleKnobActive: {
    transform: [{ translateX: 24 }],
  },

  // Info Card
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#e1ffdf',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#71fe91',
  },

  infoIcon: {
    fontSize: 32,
    color: '#008339',
  },

  infoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: '#00672b',
    fontWeight: '500',
  },

  // Bottom Button
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f9fa',
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    zIndex: 50,
  },

  continueButton: {
    height: 56,
    backgroundColor: '#008339',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#008339',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },

  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  arrowIcon: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default Signupstep2