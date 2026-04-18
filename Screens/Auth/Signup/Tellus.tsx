import { View, Text,StyleSheet ,StatusBar,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const Tellus = () => {
  const [data,setdata]=useState({
    Inocme:"",
    Age:"",
    City:"",
    LoanPurpose:""
  })
    const [Bs,setbs]=useState("")
      const [Selection, Setselection] = useState([
      {label: 'Buy', value: 'buy'},
      {label: 'Sell', value: 'sell'}
    ]);
      const [BsOpen, SetBsopen] = useState(false)


  return (

    
  
  
  
  <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Top App Bar */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          {/* Progress */}
          <View style={styles.progressContainer}>
            <Text style={styles.stepText}>STEP 1 OF 2</Text>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* More Button */}
          <TouchableOpacity>
            <Text style={styles.moreIcon}>⋮</Text>
          </TouchableOpacity>
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
              Tell us about{'\n'}
              <Text style={styles.titleRed}>yourself</Text>
            </Text>
            <Text style={styles.subtitle}>
              Provide your basic information to help us customize your financial journey.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Monthly Income */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>MONTHLY INCOME (PKR)</Text>
              <View style={styles.incomeInputContainer}>
                <Text style={styles.currency}>Rs.</Text>
                <TextInput
                  style={styles.incomeInput}
                  placeholder="0"
                  keyboardType="numeric"
                  defaultValue="85000"
                />
              </View>
            </View>

            {/* Age */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>AGE</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your age (18–65)"
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* City & Loan Purpose */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CITY</Text>
              <View style={styles.selectContainer}>
                {/* <TextInput
                  style={styles.input}
                  placeholder="Lahore"
                  editable={false}
                  value="Lahore"
                /> */}
                {/* <Text style={styles.dropdownIcon}>▼</Text> */}
                <DropDownPicker
       style={{borderRadius:30,borderWidth:0}}
       stickyHeader={true}
       placeholder='Buy / sell'
         textStyle={{fontFamily:"oRegular"}}
      open={BsOpen}
      listMode="MODAL"
          modalAnimationType="slide"
      value={Bs}

      items={Selection}
      setOpen={SetBsopen}
setValue={setbs}
      setItems={Setselection}

    />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>LOAN PURPOSE</Text>
              <View style={styles.selectContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Select purpose"
                  editable={false}
                  value="Select purpose"
                />
                <Text style={styles.dropdownIcon}>▼</Text>
              </View>
            </View>
          </View>

          {/* Privacy Note */}
          {/* <View style={styles.privacyCard}>
            <Text style={styles.privacyIcon}>🛡️</Text>
            <View style={styles.privacyTextContainer}>
              <Text style={styles.privacyTitle}>
                Your privacy is our priority.
              </Text>
              <Text style={styles.privacyDesc}>
                We use 256-bit SSL encryption to ensure your data remains secure and private.
              </Text>
            </View>
          </View> */}
        </View>
      {/* </ScrollView> */}

      {/* Fixed Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.nextButton} activeOpacity={0.9}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      {/* <View style={styles.footer}>
        <Text style={styles.footerCopyright}>© 2024 MyTM FinTech</Text>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Privacy</Text>
          <Text style={styles.footerLink}>Terms</Text>
          <Text style={styles.footerLink}>Security</Text>
        </View>
      </View> */}
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
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 5,
    maxWidth: 428,
    alignSelf: 'center',
    width: '100%',
  },

  backButton: {
    padding: 8,
  },

  backIcon: {
    fontSize: 28,
    color: '#E30613',
    fontWeight: 'bold',
  },

  progressContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 16,
  },

  stepText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#E30613',
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
    width: '50%',
    height: '100%',
    backgroundColor: '#00B14F',
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
    color: '#E30613',
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
    color: '#E30613',
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
    paddingHorizontal: 16,
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
    backgroundColor: '#00B14F',
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
export default Tellus