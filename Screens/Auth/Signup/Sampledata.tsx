export const pakistanCities = [
  { label: 'Karachi', value: 'karachi' },
  { label: 'Lahore', value: 'lahore' },
  { label: 'Islamabad', value: 'islamabad' },
  { label: 'Rawalpindi', value: 'rawalpindi' },
  { label: 'Faisalabad', value: 'faisalabad' },
  { label: 'Multan', value: 'multan' },
  { label: 'Peshawar', value: 'peshawar' },
  { label: 'Quetta', value: 'quetta' },
  { label: 'Sialkot', value: 'sialkot' },
  { label: 'Gujranwala', value: 'gujranwala' },
];

export const loanPurposes = [
  { label: 'Business Start-up', value: 'business_startup' },
  { label: 'Business Expansion', value: 'business_expansion' },
  { label: 'Education Fees', value: 'education_fees' },
  { label: 'Home Construction', value: 'home_construction' },
  { label: 'Home Renovation', value: 'home_renovation' },
  { label: 'Car Purchase', value: 'car_purchase' },
  { label: 'Medical Expenses', value: 'medical_expenses' },
  { label: 'Wedding Expenses', value: 'wedding_expenses' },
  { label: 'Debt Consolidation', value: 'debt_consolidation' },
  { label: 'Agriculture/Farming', value: 'agriculture_farming' },
  { label: 'Emergency Expenses', value: 'emergency_expenses' },
  { label: 'Travel/Tourism', value: 'travel_tourism' },
  { label: 'Equipment Purchase', value: 'equipment_purchase' },
  { label: 'Stock Purchase', value: 'stock_purchase' },
  { label: 'Other Personal Needs', value: 'personal_needs' },
];



import { create } from 'zustand';

const useFinanceStore = create((set,get) => ({
  // Initial State
  formData: {
    name: "",
    email: "",
    age: "",
    city: "",
    loanType: "",
    income: 0,
    employmentType: "",
    dependents: 0,
    obligations: 0,
  },

  // Action: Merge new data into formData
  updateFields: (newData) => 
    set((state) => ({
      formData: { ...state.formData, ...newData }
    })),

  // Action: Reset form
  resetForm: () => set({ 
    formData: { name: "", email: "", amount: 0 /* ...rest */ } 
  }),
  getResults: () => {
    const { monthlyIncome, obligations, age, employmentType } = get().formData;

    // 1. Calculate DTI Ratio
    // Formula: (Total Monthly Debt / Gross Monthly Income) * 100
    const dtiRatio = monthlyIncome > 0 ? (obligations / monthlyIncome) * 100 : 0;

    // 2. Base Credit Score Logic
    let creditScore = 300;
    if (age > 25) creditScore += 100;
    if (employmentType === "Salaried") creditScore += 200;

    // 3. Determine Loan Limit & DTI Hard Stop
    let maxLoan = 0;
    let eligibilityStatus = "";

    if (dtiRatio > 40) {
      maxLoan = 0;
      eligibilityStatus = "Ineligible: Debt-to-Income ratio too high (>40%)";
    } else {
      // Standard Tier Logic if DTI is safe
      if (creditScore > 650) {
        maxLoan = 1000000;
        eligibilityStatus = "High Approval";
      } else if (creditScore >= 550) {
        maxLoan = 450000;
        eligibilityStatus = "Moderate Approval";
      } else {
        maxLoan = 100000;
        eligibilityStatus = "Low Approval";
      }
    }

    return { 
      creditScore, 
      maxLoan, 
      eligibilityStatus, 
      dtiRatio: dtiRatio.toFixed(2) 
    };}
}));

export default useFinanceStore;