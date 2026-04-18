import { View, Text, Platform, StyleSheet ,StatusBar, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthProps } from '../../../components/Navigation/Authnavigation'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal';

type Naviprop=NativeStackNavigationProp<AuthProps>
const Signupstep3 = () => {
    const [phoneverified,setverified]=useState(false)
    const [modalvisible,setmodalvisible]=useState(false)
    const navigation=useNavigation<Naviprop>()
    const [isConsentChecked, setIsConsentChecked] = useState(true);
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          <View style={styles.progressContainer}>
            <Text style={styles.headerTitle}>STEP 2 OF 3</Text>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.spacer} />
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Verify your CNIC</Text>
            </View>
            <View style={styles.cardContent}>
                <View style={styles.cnicInputContainer}>
                <Text style={styles.inputLabel}>CNIC Number</Text>
                <TextInput
                  style={styles.cnicInput}
                  placeholder="35201-1234567-8"
                  keyboardType="decimal-pad"
                />
              </View>
                <TouchableOpacity style={styles.uploadButton} onPress={()=>setmodalvisible(!modalvisible)}>
                <Text style={styles.uploadIcon}>📤</Text>
                <Text style={styles.uploadText}>Upload CNIC Front & Back</Text>
              </TouchableOpacity>

            </View>


        </View>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Prove your income</Text>
        <View style={styles.cardContent}>
            <TouchableOpacity style={styles.bankLinkRow} >
                <View style={styles.bankIconContainer}>
                  <Text style={styles.bankIcon}>🏦</Text>
                </View>
                <Text style={styles.bankLinkText}>Attach Bank Statement</Text>
                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>

        </View>

        </View>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Security Confirmation</Text>
               <View style={styles.cardContent}>
    <TouchableOpacity>
                <View style={styles.otpRow}>
                    
                <Text style={styles.otpText}>Verify Email Address</Text>
              </View>
               </TouchableOpacity>
               <View style={{flexDirection:"row" ,gap:15,alignItems:"center"}}>
                 <TouchableOpacity 
                style={styles.consentRow}
                onPress={() => setIsConsentChecked(!isConsentChecked)}
              >
                <View style={[styles.checkbox, isConsentChecked && styles.checkboxChecked]}>
                    
                </View>
                 </TouchableOpacity>
                <Text style={[styles.consentText,]}>
                  I allow MyTM to verify my data  only for this loan pre-check
                </Text>


               </View>
              
             
 
    </View>
        
</View> 
 


      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.completeButton} >
          <Text style={styles.completeButtonText}>
            Complete Verification
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: '100%',
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


 

  headerTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00672b',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  spacer: {
    width: 40,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 100,
    paddingBottom: 100,
    paddingHorizontal: 24,
  },

  main: {
    gap: 24,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginHorizontal:15,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 30,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e9bcb630',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#191c1d',
    letterSpacing: -0.3,
  },

  verifiedIcon: {
    fontSize: 28,
    color: '#008339',
  },

  cardContent: {
    gap: 20,
    marginTop:15
  },

  // CNIC Section
  cnicInputContainer: {
    position: 'relative',
  },

  inputLabel: {
    position: 'absolute',
    top: -10,
    left: 16,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    fontSize: 11,
    fontWeight: '600',
    color: '#00672b',
    zIndex: 1,
  },

  cnicInput: {
    height: 56,
    borderWidth: 1,
    borderColor: '#00672b30',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#191c1d',
    backgroundColor: '#ffffff',
  },

  uploadButton: {
    height: 56,
    borderWidth: 1,
    borderColor: '#00672b30',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  uploadIcon: {
    fontSize: 22,
  },

  uploadText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#00672b',
  },

  successBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1ffdf',
    padding: 16,
    borderRadius: 16,
    gap: 16,
  },

  successImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    overflow: 'hidden',
  },

  successImage: {
    width: '100%',
    height: '100%',
  },

  successTextContainer: {
    flex: 1,
  },

  successTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#00672b',
  },

  successName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5e3f3b',
    marginTop: 2,
  },

  // Income Section
  bankLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f4f5',
    padding: 16,
    borderRadius: 16,
  },

  bankIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 9999,
    backgroundColor: '#e7e8e9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bankIcon: {
    fontSize: 20,
  },

  bankLinkText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#191c1d',
  },

  chevron: {
    fontSize: 24,
    color: '#5e3f3b',
  },

  incomeSuccessBanner: {
    backgroundColor: '#e1ffdf',
    padding: 16,
    borderRadius: 16,
  },

  incomeSuccessText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#00672b',
  },

  incomeVerifiedText: {
    fontSize: 12,
    color: '#5e3f3b',
    marginTop: 4,
  },

  // Security Section
  otpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f3f4f5',
    padding: 14,
    borderRadius: 12,
  },

  checkIcon: {
    fontSize: 22,
    color: '#008339',
  },

  otpText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#5e3f3b',
  },

  consentRow: {
    flexDirection: 'row',
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#00672b50',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#008339',
    borderColor: '#008339',
  },

  checkmark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  consentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#5e3f3b',
    fontWeight: '500',
  },

  deviceInfo: {
    marginTop: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e7e8e9',
    gap: 12,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  locationIcon: {
    fontSize: 18,
  },

  infoText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5e3f3b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  securityIcon: {
    fontSize: 18,
    color: '#00672b',
  },

  fraudText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00672b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Bottom Button
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    zIndex: 50,
  },

  completeButton: {
    height: 56,
    backgroundColor: '#008339',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#008339',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  completeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default Signupstep3