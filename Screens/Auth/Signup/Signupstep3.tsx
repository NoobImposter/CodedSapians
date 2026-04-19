import { View, Text, Platform, StyleSheet ,StatusBar, TouchableOpacity, TextInput, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthProps } from '../../../components/Navigation/Authnavigation'


import { launchCamera } from 'react-native-image-picker';
import { rootProps } from '../../../components/Navigation/NavigationIndex'
import { useNavigation } from '@react-navigation/native';


const Signupstep3 = () => {


  const [isConsentChecked, setIsConsentChecked] = useState(true);
  const [emailOtp, setEmailOtp] = useState('');
  const [bankStatement, setBankStatement] = useState(null);
  const [cnicFront, setCnicFront] = useState(null);
    const [isCnicValid, setIsCnicValid] = useState(false);
    const [cnicNumber, setCnicNumber] = useState('');
    type  Rootprop=NativeStackNavigationProp<rootProps>
    const Rnavigation=useNavigation<Rootprop>()
      const handleCnicUpload = () => {
    Alert.alert(
      'Upload CNIC',
      'Please capture both front and back of your CNIC',
      [
        {
          text: 'Capture Front',
          onPress: () => handleCnicCapture('front'),
        },
        {
          text: 'Capture Back',
          onPress: () => handleCnicCapture('back'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };
    const [cnicBack, setCnicBack] = useState(null);
    const handleCnicCapture = async (side: 'front' | 'back') => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        cameraType: 'back',
        quality: 0.8,
        saveToPhotos: false,
      });

      if (result.assets && result.assets[0]) {
        if (side === 'front') {
          setCnicFront(result.assets[0]);
          Alert.alert('Success', 'CNIC front captured successfully');
        } else {
          setCnicBack(result.assets[0]);
          Alert.alert('Success', 'CNIC back captured successfully');
        }
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to capture CNIC photo');
    }
  };
   // Handle OTP input - only allow 6 digits
  const handleOtpChange = (text: string) => {
    const numbersOnly = text.replace(/[^0-9]/g, '');
    if (numbersOnly.length <= 6) {
      setEmailOtp(numbersOnly);
    }
  };
    useEffect(() => {
    // Remove dashes from CNIC number to count only digits
    const digitsOnly = cnicNumber.replace(/[^0-9]/g, '');
    
    // Check if both CNIC photos are captured AND CNIC number has exactly 13 digits
    if (cnicFront && cnicBack && digitsOnly.length === 13) {
      setIsCnicValid(true);
      console.log('CNIC validation passed ✓');
    } else {
      setIsCnicValid(false);
      console.log('CNIC validation failed:', {
        hasFront: !!cnicFront,
        hasBack: !!cnicBack,
        digitCount: digitsOnly.length
      });
    }
  }, [cnicFront,cnicBack , cnicNumber]);

  // Handle bank statement file selection
  // const handleBankStatementUpload = async () => {
  //   try {
  //     const result = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.pdf],
  //       allowMultiSelection: false,
  //     });
      
  //     if (result && result[0]) {
  //       setBankStatement(result[0]);
  //       Alert.alert('Success', 'Bank statement uploaded successfully');
  //     }
  //   } catch (err) {
  //     if (!DocumentPicker.isCancel(err)) {
  //       Alert.alert('Error', 'Failed to upload bank statement');
  //     }
  //   }
  // };
  return(
        <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <Text style={styles.headerTitle}>STEP 3 OF 3</Text>
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
                value={cnicNumber}
                onChangeText={(text)=>setCnicNumber(text)}

              />
            </View>
            <TouchableOpacity 
              style={styles.uploadButton} 
              onPress={handleCnicUpload}
            >
              <Text style={styles.uploadIcon}>📤</Text>
              <Text style={styles.uploadText}>
                {cnicFront && cnicBack 
                  ? 'CNIC Photos Captured ✓' 
                  : 'Upload CNIC Front & Back'}
              </Text>
            </TouchableOpacity>
            {(cnicFront || cnicBack) && (
              <View style={styles.uploadStatus}>
                <Text style={styles.uploadStatusText}>
                  Front: {cnicFront ? '✓' : '✗'} | Back: {cnicBack ? '✓' : '✗'}
                </Text>
              </View>
            )}
          </View>
        </View>
{/* 
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Prove your income</Text>
          <View style={styles.cardContent}>
            <TouchableOpacity 
              style={styles.bankLinkRow} 
              onPress={handleBankStatementUpload}
            >
              <View style={styles.bankIconContainer}>
                <Text style={styles.bankIcon}>🏦</Text>
              </View>
              <Text style={styles.bankLinkText}>
                {bankStatement ? bankStatement.name : 'Attach Bank Statement'}
              </Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
            {bankStatement && (
              <Text style={styles.fileAttachedText}>
                ✓ File attached: {bankStatement.name}
              </Text>
            )}
          </View>
        </View> */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Security Confirmation</Text>
          <View style={styles.cardContent}>
            <View style={styles.otpContainer}>
              <Text style={styles.otpLabel}>Verify Email Address</Text>
              <TextInput
                style={styles.otpInput}
                placeholder=""
                keyboardType="number-pad"
                maxLength={6}
                value={emailOtp}
                onChangeText={handleOtpChange}
              />
            </View>

            <View style={{ flexDirection: "row", gap: 15, alignItems: "center", marginTop: 16 }}>
              <TouchableOpacity 
                style={styles.consentRow}
                onPress={() => setIsConsentChecked(!isConsentChecked)}
              >
                <View style={[styles.checkbox, isConsentChecked && styles.checkboxChecked]}>

                </View>
              </TouchableOpacity>
              <Text style={styles.consentText}>
                I allow MyTM to verify my data {"\n"}f
                 only for this loan pre-check
              </Text>
            </View>
          </View>
        </View> 
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={styles.completeButton} 
          onPress={() => Rnavigation.navigate("tabs")}
        >
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
    otpContainer: {
    marginBottom: 8,
  },
  otpLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    letterSpacing: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  uploadStatus: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
  },
  uploadStatusText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  fileAttachedText: {
    marginTop: 8,
    fontSize: 12,
    color: '#22c55e',
    fontWeight: '500',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
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