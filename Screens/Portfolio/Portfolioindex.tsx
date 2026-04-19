import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { HomenaviProp } from '../../components/Navigation/Homenavigation';
import { rootProps } from '../../components/Navigation/NavigationIndex';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Naviprop=NativeStackNavigationProp<rootProps>


import useFinanceStore from '../Auth/Signup/Sampledata';


const Portfolioindex = () => {
    const navigation=useNavigation<Naviprop>()
    const formData = useFinanceStore((state) => state.formData);
    const getResults = useFinanceStore((state) => state.getResults);
    const { creditScore, maxLoan, eligibilityStatus, dtiRatio } = getResults();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Icon name="arrow-left" size={20} color="#1A1A1A" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Financial Portfolio</Text>
        <TouchableOpacity>
          {/* <Icon name="sync-alt" size={18} color="#1A1A1A" /> */}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Credit Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreRow}>
            <View>
              <Text style={styles.label}>Credit Score</Text>
              <View style={styles.inlineRow}>
                <Text style={styles.scoreValue}>{creditScore}</Text>
                <Text style={[styles.statusBadge, styles.goodStatus]}></Text>
              </View>
            </View>
            <View style={styles.alignRight}>
              <Text style={styles.label}>Eligibility Score</Text>
              <Text style={styles.scoreValue}>{eligibilityStatus}</Text>
            </View>
          </View>

          <View style={styles.fundingSection}>
            <Text style={styles.fundingLabel}>Maximum Funding Available</Text>
  <Text style={styles.fundingAmount}>
  {new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  }).format(Number(maxLoan))}
</Text>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.riskLevel}>Low Risk Level</Text>
            <Text style={styles.updatedText}>Updated 2 days ago</Text>
          </View>
        </View>

        {/* Financial Health Profile */}
        <Text style={styles.sectionTitle}>Financial Health Profile</Text>
        <View style={styles.profileGrid}>
          <ProfileItem icon="money-bill-wave" label="Monthly Income" value={formData.income} />
          <ProfileItem icon="university" label="Obligations" value={formData.obligations} />
          <ProfileItem icon="percentage" label="Debt-to-Income" value={dtiRatio} />
          <ProfileItem icon="users" label="Dependents" value={formData.dependents} />
          <ProfileItem icon="briefcase" label="Employment" value={formData.employmentType} />
          <ProfileItem icon="map-marker-alt" label="City" value={formData.city} />
        </View>

        {/* Lending Scenarios */}
        <View style={styles.scenarioHeader}>
          <Text style={styles.sectionTitle}>Lending Scenarios</Text>
          <Text style={styles.swipeText}>Swipe to compare</Text>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
         <ScenarioCard 
            type="Best Case" 
            icon="trending-up" 
            color="#2ecc71"
            reqText="Required Credit" 
            reqVal="650+" 
            amount="1M" 
            emi="28,500" // Adjusted for higher principal
          />
          <ScenarioCard 
            type="Current" 
            icon="check-circle" 
            color="#3498db"
            reqText="Your Credit" 
            reqVal={creditScore}
            amount={maxLoan === 0 ? "0" : `${maxLoan / 1000}k`} 
            emi={maxLoan === 0 ? "N/A" : "---"}
            isHighlight={true}
          />
          <ScenarioCard 
            type="Worst Case" 
            icon="exclamation-triangle" 
            color="#e67e22"
            reqText="Risk Credit" 
            reqVal="< 550" 
            amount="100k" 
            emi="42,000" 
          />
        </ScrollView>

        {/* Action Items */}


        {/* Tenure Info */}
        <View style={styles.infoBox}>
          {/* <Icon name="info-circle" size={16} color="#2980b9" /> */}
          <Text style={styles.infoText}>Suggested tenure for your profile: 12-24 months</Text>
        </View>

        {/* Bottom Buttons */}
  

      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <View style={styles.profileItem}>
    {/* <Icon name={icon} size={16} color="#34495e" /> */}
    <View style={{ marginLeft: 10 }}>
      <Text style={styles.profileLabel}>{label}</Text>
      <Text style={styles.profileValue}>{value}</Text>
    </View>
  </View>
);

const ScenarioCard = ({ type, icon, color, reqText, reqVal, amount, emi, isHighlight }) => (
  <View style={[styles.scenarioCard, isHighlight && styles.highlightedCard]}>
    <View style={styles.inlineRow}>
      {/* <Icon name={icon} size={14} color={color} /> */}
      <Text style={[styles.scenarioType, { color }]}>{type}</Text>
    </View>
    <Text style={styles.miniLabel}>{reqText}</Text>
    <Text style={styles.scenarioBold}>{reqVal}</Text>
    <View style={styles.divider} />
    <Text style={styles.miniLabel}>Loan Amount</Text>
    <Text style={styles.scenarioVal}>PKR {amount}</Text>
    <Text style={styles.miniLabel}>Monthly EMI</Text>
    <Text style={styles.scenarioVal}>PKR {emi}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContent: { padding: 20 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15,
    backgroundColor: '#FFF'
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },
  scoreCard: { 
    backgroundColor: '#002D62', 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 25 
  },
  scoreRow: { flexDirection: 'row', justifyContent: 'space-between' },
  inlineRow: { flexDirection: 'row', alignItems: 'center' },
  label: { color: '#BDC3C7', fontSize: 12, marginBottom: 4 },
  scoreValue: { color: '#FFF', fontSize: 24, fontWeight: '800' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, marginLeft: 8, fontSize: 12, fontWeight: '600' },
  goodStatus: { backgroundColor: '#2ecc71', color: '#FFF' },
  alignRight: { alignItems: 'flex-end' },
  fundingSection: { marginTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 15 },
  fundingLabel: { color: '#BDC3C7', fontSize: 13 },
  fundingAmount: { color: '#FFF', fontSize: 28, fontWeight: '800', marginTop: 5 },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  riskLevel: { color: '#2ecc71', fontWeight: '600', fontSize: 12 },
  updatedText: { color: '#BDC3C7', fontSize: 11 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#2C3E50', marginBottom: 15 },
  profileGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  profileItem: { width: '48%', backgroundColor: '#FFF', padding: 12, borderRadius: 12, marginBottom: 12, flexDirection: 'row', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1 },
  profileLabel: { fontSize: 10, color: '#7F8C8D' },
  profileValue: { fontSize: 13, fontWeight: '700', color: '#2C3E50' },
  scenarioHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  swipeText: { fontSize: 11, color: '#95A5A6' },
  horizontalScroll: { marginBottom: 25 },
  scenarioCard: { backgroundColor: '#FFF', width: 160, padding: 15, borderRadius: 14, marginRight: 12, borderWidth: 1, borderColor: '#ECF0F1' },
  highlightedCard: { borderColor: '#3498db', borderWidth: 2 },
  scenarioType: { fontSize: 12, fontWeight: '700', marginLeft: 6 },
  miniLabel: { fontSize: 10, color: '#95A5A6', marginTop: 8 },
  scenarioBold: { fontSize: 18, fontWeight: '800', color: '#2C3E50' },
  scenarioVal: { fontSize: 14, fontWeight: '700', color: '#2C3E50' },
  divider: { height: 1, backgroundColor: '#F2F2F2', marginVertical: 10 },
  actionCard: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 20 },
  actionRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  actionText: { flex: 1, marginLeft: 15, fontSize: 14, color: '#2C3E50' },
  actionBtn: { backgroundColor: '#F0F3F4', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  btnText: { fontSize: 12, fontWeight: '700', color: '#34495E' },
  infoBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EBF5FB', padding: 12, borderRadius: 8, marginBottom: 25 },
  infoText: { marginLeft: 10, fontSize: 12, color: '#2980b9' },
  primaryBtn: { backgroundColor: '#002D62', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  primaryBtnText: { color: '#FFF', fontWeight: '700', fontSize: 15 },
  secondaryBtn: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#BDC3C7', alignItems: 'center', marginBottom: 30 },
  secondaryBtnText: { color: '#7F8C8D', fontWeight: '600' }
});

export default Portfolioindex;