import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useFinanceStore } from '../Auth/Signup/Sampledata';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomenaviProp } from '../../components/Navigation/Homenavigation';
import { useNavigation } from '@react-navigation/native';

type Naviprop=NativeStackNavigationProp<HomenaviProp>

const RefreshInputScreen = () => {
    const Navigation=useNavigation<Naviprop>()
  // Pull state and update function from Zustand
  const formData = useFinanceStore((state) => state.formData);
  const updateFields = useFinanceStore((state) => state.updateFields);

  // Helper to handle numeric inputs safely
  const handleNumericChange = (key, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    updateFields({ [key]: Number(numericValue) });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.header}>Update Information</Text>
      <Text style={styles.subHeader}>Adjust your details to see updated eligibility.</Text>

      {/* Monthly Income Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Monthly Income (PKR)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.income.toString()}
          onChangeText={(val) => handleNumericChange('income', val)}
          placeholder="e.g. 100000"
        />
      </View>

      {/* Current Obligations Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Current Monthly Obligations</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.obligations.toString()}
          onChangeText={(val) => handleNumericChange('obligations', val)}
          placeholder="e.g. 20000"
        />
      </View>

      <View style={styles.row}>
        {/* Age Input */}
        <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={formData.age.toString()}
            onChangeText={(val) => handleNumericChange('age', val)}
          />
        </View>

        {/* Dependents Input */}
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <Text style={styles.label}>Dependents</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={formData.dependents.toString()}
            onChangeText={(val) => handleNumericChange('dependents', val)}
          />
        </View>
      </View>

      {/* City Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={formData.city}
          onChangeText={(val) => updateFields({ city: val })}
          placeholder="e.g. Lahore"
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => alert('Data Refreshed!')}
      >
        <Text style={styles.buttonText}>Recalculate Eligibility</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#003366', marginTop: 20 },
  subHeader: { fontSize: 14, color: '#666', marginBottom: 30 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, color: '#333', marginBottom: 8, fontWeight: '500' },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FAFAFA'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: '#003366',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '600' }
});

export default RefreshInputScreen;