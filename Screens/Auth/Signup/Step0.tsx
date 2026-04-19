import { View, Text,StyleSheet ,StatusBar,TouchableOpacity,ScrollView,TextInput, Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { pakistanCities } from './Sampledata'
import { loanPurposes } from './Sampledata'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthProps } from '../../../components/Navigation/Authnavigation'
import {  useNavigation } from '@react-navigation/native'
import useFinanceStore from './Sampledata'

  
const Stepzero = () => {

  type naviProp=NativeStackNavigationProp<AuthProps>
  const Navihgation=useNavigation<naviProp>()
  const updateFields = useFinanceStore((state) => state.updateFields);

  const[opacity,setopacity]=useState(1)

      const [data,setdata]=useState({
        name:"",
        email:""
      })


 useEffect(() => {
    const { name, email } = data;

    // 3. Pre-checks: Name must be a string, letters only, min 2 chars
    const isNameValid = typeof name === 'string' && 
                        /^[a-zA-Z\s]+$/.test(name) && 
                        name.trim().length >= 2;

    // 4. Pre-checks: Standard Email Regex
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isNameValid && isEmailValid) {
      // 5. Update Zustand Store
      updateFields({ 
        name: name.trim(), 
        email: email.toLowerCase().trim() 
      });
      
      setopacity(1);
    } else {
      setopacity(0.5);
      console.log("Validation pending...");
    }

  }, [data, updateFields]);

//   const nextpage=()=>{
//     const setdata={
//       amount:[data.Amount],
//       Age:[data.age],
//       city:Bs,
//       Loanp:LoanPurpose
//     }
//     const  checkzero=Object.values(setdata).some(valeu=>valeu=="")
//     if (checkzero){

//     }




// }


  return (

    
  
  
  
  <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Top App Bar */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={()=>Navihgation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          {/* Progress */}
          <View style={styles.progressContainer}>
        
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
                <Text style={styles.stepText}>STEP 0 OF 3</Text>
          </View>

          {/* More Button */}
          {/* <TouchableOpacity>
            <Text style={styles.moreIcon}>⋮</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      > */}
        <View style={styles.main}>
          {/* Headline */}
          <View style={styles.headline}>
            <Text style={styles.title}>
              Lets get{'\n'}
              <Text style={styles.titleRed}>started</Text>
            </Text>
            <Text style={styles.subtitle}>
              Provide your email and name
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Monthly Income */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.incomeInputContainer}>
                
                <TextInput
                  style={styles.incomeInput}
                  onChangeText={(text)=>setdata(prev=>({...data,name:text}))}
                  placeholder="Name...."
                  value={data.name}
                />
              </View>
            </View>

            {/* Age */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email </Text>
              <View style={styles.incomeInputContainer}>
                <TextInput
                  style={styles.incomeInput}
                  onChangeText={(text)=>setdata(prev=>({...data,email:text}))}
                  placeholder="Enter your email"
                  value={data.email}
                />
              </View>
            </View>

            {/* City & Loan Purpose */}
          

        
          </View>


        </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={[styles.nextButton,{opacity:opacity}]}  onPress={()=>{opacity>=1?Navihgation.navigate("Tellus"):""}}  >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f3f4f6',
    alignItems:"center"
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
    paddingVertical:5,
    flex:1
  },

  stepText: {
    marginTop:5,
    fontSize: 10,
    fontWeight: '700',
    color: '#008339',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 6,
  },

  progressBar: {
    width: 128,
    height: 4,
    backgroundColor: '#f3f4f6',
    borderRadius: 9999,
    overflow: 'hidden',
  },

  progressFill: {
    width: '0%',
    height: '100%',
    backgroundColor: '#008339',
    borderRadius: 9999,
  },

  moreIcon: {
    fontSize: 28,
    color: '#6B7280',
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 100,
    paddingBottom: 180,
  },

  main: {
    maxWidth: 428,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },

  headline: {
    marginBottom:5
  },

  title: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -1,
  },

  titleRed: {
    color: '#008339',
  },

  subtitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#6B7280',
  },

  form: {
    gap:40,
  },

  inputGroup: {
    gap: 8,
    marginTop:15,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    paddingHorizontal: 4,
  },

  incomeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16,
  },

  currency: {
    fontSize: 20,
    fontWeight: '700',
    color: '#008339',
    marginRight: 8,
  },

  incomeInput: {
    flex: 1,
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    padding: 0,
  },

  checkIcon: {
    fontSize: 24,
    color: '#00B14F',
    fontWeight: 'bold',
  },

  inputContainer: {
    backgroundColor: '#f9fafb',
    height: 56,
    borderRadius: 16,

    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  selectContainer: {
    backgroundColor: '#f9fafb',
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    padding: 0,
  },

  dropdownIcon: {
    fontSize: 20,
    color: '#6B7280',
  },

  // Privacy Card
  privacyCard: {
    marginTop: 64,
    backgroundColor: '#00B14F10', // primary/5
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },

  privacyIcon: {
    fontSize: 28,
    color: '#00B14F',
  },

  privacyTextContainer: {
    flex: 1,
  },

  privacyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#00B14F',
    lineHeight: 20,
  },

  privacyDesc: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 18,
    marginTop: 6,
  },

  // Bottom Button
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    padding: 32,
    paddingBottom: Platform.OS === 'ios' ? 40 : 32,
    zIndex: 50,
  },

  nextButton: {
    height: 56,
    backgroundColor: '#008339',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00B14F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  nextButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 48,
  },

  footerCopyright: {
    fontSize: 10,
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 16,
  },

  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },

  footerLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
export default Stepzero