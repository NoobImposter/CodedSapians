import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  StatusBar
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import user from "../../Assets/Home/i.png"


import { rootProps } from '../../components/Navigation/NavigationIndex';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useFinanceStore from '../Auth/Signup/Sampledata';
import { useNavigation } from '@react-navigation/native';

type Naviprop=NativeStackNavigationProp<rootProps>


const Userindex = () => {
  const handleClear = () => {
    resetForm();
    Navigation.replace("Authnavi")
    // If you have local component state for inputs, clear those too:
    // setData({ name: '', email: '', ... }); 
  };
    const Navigation=useNavigation<Naviprop>()
const formData = useFinanceStore((state) => state.formData);
  const resetForm = useFinanceStore((state) => state.resetForm);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Icon name="arrow-left" size={20} color="#064e3b" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          {/* <Icon name="cog" size={20} color="#064e3b" /> */}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Image & Name Section */}
        <View style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image
              source={user} 
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton}>
              {/* <Icon name="pen" size={12} color="#FFF" /> */}
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{formData.name}</Text>
          <View style={styles.badge}>
            {/* <Text style={styles.badgeText}>FINTECH STUDENT</Text> */}
          </View>
        </View>

        {/* Personal Information Section */}
        <Text style={styles.sectionLabel}>PERSONAL INFORMATION</Text>
        <View style={styles.card}>
          <InfoRow icon="user" label="Full Name" value= {formData.name} />
          <InfoRow icon="envelope" label="Email Address" value={formData.email} last />
        </View>

        {/* Security Section */}
        <Text style={styles.sectionLabel}>SECURITY</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.iconContainerSecondary}>
              {/* <Icon name="unlock-alt" size={16} color="#bc000c" /> */}
            </View>
            <Text style={styles.rowText}>Change Password</Text>
            {/* <Icon name="chevron-right" size={14} color="#e1e3e4" /> */}
          </TouchableOpacity>
          
          
        </View>

        {/* Help & Support Section */}
        <Text style={styles.sectionLabel}>HELP & SUPPORT</Text>
        <View style={styles.card}>
          <SupportRow icon="question-circle" label="FAQ" isExternal />
          <SupportRow icon="headset" label="Contact Us" />
          <SupportRow icon="file-contract" label="Privacy Policy" last />
        </View> 

        {/* Logout Action */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleClear}>
          {/* <Icon name="sign-out-alt" size={18} color="#bc000c" /> */}
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>APP VERSION 2.4.0 (2024)</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Components
const InfoRow = ({ icon, label, value, last }) => (
  <TouchableOpacity style={[styles.row, last && { borderBottomWidth: 0 }]}>
    <View style={styles.iconContainerPrimary}>
      {/* <Icon name={icon} size={16} color="#00672b" /> */}
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.miniLabel}>{label}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
    {/* <Icon name="chevron-right" size={14} color="#e1e3e4" /> */}
  </TouchableOpacity>
);

const SupportRow = ({ icon, label, isExternal, last }) => (
  <TouchableOpacity style={[styles.row, last && { borderBottomWidth: 0 }]}>
    <View style={styles.iconContainerTertiary}>
      {/* <Icon name={icon} size={16} color="#595958" /> */}
    </View>
    <Text style={styles.rowText}>{label}</Text>
    {/* <Icon name={isExternal ? "external-link-alt" : "chevron-right"} size={14} color="#e1e3e4" /> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#064e3b' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
  profileHeader: { alignItems: 'center', marginVertical: 32 },
  imageContainer: { width: 128, height: 128,  },
  profileImage: { width: "100%", height:"100%",borderRadius: 64, borderWidth: 4, borderColor: '#FFF' },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00672b',
    padding: 10,
    borderRadius: 20,
    elevation: 4,
  },
  userName: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginTop: 16 },
  badge: {
    backgroundColor: 'rgba(0, 103, 43, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 8,
  },
  badgeText: { color: '#00672b', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  sectionLabel: { fontSize: 12, fontWeight: '800', color: '#595958', letterSpacing: 1.5, marginBottom: 16, marginTop: 24 },
  card: { backgroundColor: '#FFF', borderRadius: 16, overflow: 'hidden', elevation: 1, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  row: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f3f4f5' },
  iconContainerPrimary: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#f3f4f5', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  iconContainerSecondary: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#f3f4f5', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  iconContainerTertiary: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#f3f4f5', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  miniLabel: { fontSize: 10, color: '#595958', fontWeight: '500' },
  valueText: { fontSize: 14, fontWeight: '600', color: '#191c1d' },
  rowText: { flex: 1, fontSize: 14, fontWeight: '600', color: '#191c1d' },
  activeStatus: { fontSize: 10, fontWeight: '800', color: '#00672b' },
  logoutButton: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(188, 0, 12, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  logoutText: { color: '#bc000c', fontWeight: '700', marginLeft: 8 },
  versionText: { textAlign: 'center', fontSize: 10, color: '#595958', marginTop: 32, letterSpacing: 2 },
});

export default Userindex;