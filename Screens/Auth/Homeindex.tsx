import { View, Text, StatusBar,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

import Pastedimage from "../../Assets/Home/Pasted image.png"
import { rootProps } from '../../components/Navigation/NavigationIndex';

import  {NativeStackNavigationProp}  from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';

type NavigationProp = NativeStackNavigationProp<
rootProps>


const Homeindex = () => {
  const Navigator=useNavigation<NavigationProp>()
  return (





    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Top App Bar */}
      {/* <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>
              <Text style={styles.brandMy}>My</Text>
              <Text style={styles.brandTm}>TM</Text>
            </Text>
            <View style={styles.divider} />
            <Text style={styles.fintechLabel}>FINTECH CHALLENGE</Text>
          </View>

          <View style={styles.headerIcons}>
            <Text style={styles.icon}>🛎️</Text>
            <Text style={styles.icon}>💳</Text>
          </View>
        </View>
      </View> */}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Main Content */}
        <View style={styles.main}>
          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationWrapper}>
              <View style={styles.illustrationBg} />
              <Image
              source={Pastedimage}

                
                style={styles.illustrationImage}
              />
            </View>
          </View>

          {/* Hero Section */}
          <View style={styles.hero}>
            <Text style={styles.title}>
              Check Loan Eligibility{' '}
              <Text style={styles.titleBold}>in 30 Seconds</Text>
            </Text>
            <Text style={styles.subtitle}>
              No paperwork. Instant result.{'\n'}100% private.
            </Text>
          </View>

          {/* Action Buttons */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9} onPress={()=>{Navigator.navigate("Authnavi",{screen:"Tellus" })
            }}>
              <Text style={styles.primaryButtonText}>New User? Start Pre-Check</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.9}  onPress={()=>{Navigator.navigate("Authnavi",{screen:"Loginindex" })
            }}>
              <Text style={styles.secondaryButtonText}>
                Already have account? Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* Trust Bar
          <View style={styles.trustBar}>
            <View style={styles.trustItems}>
              <View style={styles.trustItem}>
                <Text style={styles.trustIcon}>✅</Text>
                <Text style={styles.trustLabel}>SECURE</Text>
              </View>
              <View style={styles.trustItem}>
                <Text style={styles.trustIcon}>⚡</Text>
                <Text style={styles.trustLabel}>FAST</Text>
              </View>
              <View style={styles.trustItem}>
                <Text style={styles.trustIcon}>🔒</Text>
                <Text style={styles.trustLabel}>PRIVATE</Text>
              </View>
            </View>
          </View>
        </View> */}

        {/* Footer */}
        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>
            Your data is end-to-end encrypted • Powered by MyTM
          </Text>

          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Privacy</Text>
            <Text style={styles.footerLink}>Terms</Text>
            <Text style={styles.footerLink}>Contact</Text>
          </View>

          <Text style={styles.copyright}>
            © 2024 MyTM FinTech. Securely encrypted.
          </Text>

*/}
</View> 
      </ScrollView>
    </View>
  );
};


/* ====================== STYLESHEET ====================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    paddingTop: StatusBar.currentHeight || 0,
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  logo: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.5,
  },

  brandMy: {
    color: '#bc000c',
  },

  brandTm: {
    color: '#00672b',
  },

  divider: {
    height: 16,
    width: 1,
    backgroundColor: '#e2e8f0',
  },

  fintechLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 24,
  },

  icon: {
    fontSize: 24,
    color: '#94a3b8',
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 110, // Space for header
  },

  main: {
    flex: 1,
    paddingHorizontal: 32,
    maxWidth: 428,
    alignSelf: 'center',
    width: '100%',
  },

  // Illustration
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 64,
  },

  illustrationWrapper: {
    width: 256,
    height: 256,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },

  illustrationBg: {
    position: 'absolute',
    width: 256,
    height: 256,
    backgroundColor: "white",
    borderRadius: 50,
    transform: [{ scale: 1.1 }],
  },

  illustrationImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  // Hero
  hero: {
    marginBottom: 60,
    alignItems: 'center',
  },

  title: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '300',
    textAlign: 'center',
    letterSpacing: -0.8,
    color: '#1a1c1e',
  },

  titleBold: {
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '300',
    color: '#52525b',
    textAlign: 'center',
    maxWidth: 280,
    marginTop: 16,
  },

  // Buttons
  buttonContainer: {
    gap: 16,
  },

  primaryButton: {
    height: 60,
    backgroundColor: '#00672b',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },

  secondaryButton: {
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: '#1a1c1e',
    fontSize: 16,
    fontWeight: '500',
  },

  // Trust Bar
  trustBar: {
    marginTop: 80,
    paddingTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },

  trustItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  trustItem: {
    alignItems: 'center',
    gap: 8,
  },

  trustIcon: {
    fontSize: 28,
    color: '#cbd5e1',
  },

  trustLabel: {
    fontSize: 9,
    fontWeight: '500',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  // Footer
  footer: {
    paddingHorizontal: 32,
    paddingVertical: 40,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 24,
  },

  footerLinks: {
    flexDirection: 'row',
    gap: 32,
    marginBottom: 16,
  },

  footerLink: {
    fontSize: 10,
    fontWeight: '500',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },

  copyright: {
    fontSize: 10,
    color: '#cbd5e1',
    fontWeight: '300',
  },
});

export default Homeindex