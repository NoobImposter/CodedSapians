import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const colors = {
  primary: '#00672b',
  secondary: '#bc000c',
  onPrimary: '#ffffff',
  surface: '#f8f9fa',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f3f4f5',
  onSurface: '#191c1d',
  tertiary: '#595958',
};

export default function dashIndex() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />

      {/* Top App Bar */}
      <View
        style={{
          height: 64,
          backgroundColor: 'rgba(255,255,255,0.95)',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#e1e3e4',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: '900', color: colors.secondary, letterSpacing: -1 }}>My</Text>
          <Text style={{ fontSize: 22, fontWeight: '900', color: colors.primary, letterSpacing: -1 }}>TM</Text>
        </View>

        <Text style={{ fontSize: 18, fontWeight: '700', color: '#166534' }}>Welcome, Muhammad</Text>

        <TouchableOpacity>
          <View style={{ position: 'relative' }}>
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                borderWidth: 2,
                borderColor: colors.primary,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMV2z7wK4G1iFRC5w4IanyDLEw-dRvA-FzB21mfjbenUoZ1XEhgnB3yy5OiV-NP1eln97n0okPBvWxOzp0p8aYSFnU2MD5GrTfT4T4MJ3JwlOUHLpOiEj1fth8RRl0kMVQn_uYDdsb7kf1lc_iFWWr4VfUnvgdDNhXvl4XnrpDej-3MBnkM0fkP_nMhCuf9eCNKZ1VrTN1wSywtgviFMmzQmuvgWinV8QhzzOF_JpYTf1OLlJ6F72PK_0vyd0lfawlLLGjNIAvQnc',
                }}
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 14,
                height: 14,
                backgroundColor: colors.primary,
                borderRadius: 999,
                borderWidth: 2,
                borderColor: '#fff',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingTop: 80, paddingBottom: 100, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Eligibility Score Card */}
        <View
          style={{
            backgroundColor: colors.primary,
            borderRadius: 28,
            padding: 32,
            marginBottom: 32,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.25,
            shadowRadius: 30,
            elevation: 20,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Glows */}
          <View style={{ position: 'absolute', top: -80, right: -80, width: 200, height: 200, backgroundColor: '#52e07833', borderRadius: 999 }} />
          <View style={{ position: 'absolute', bottom: -80, left: -80, width: 200, height: 200, backgroundColor: '#00833944', borderRadius: 999 }} />

          <View style={{ alignItems: 'center' }}>
            {/* Badge */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.15)',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 999,
                marginBottom: 24,
              }}
            >
              {/* <Icon name="check-circle" size={18} color="#fff" style={{ marginRight: 6 }} /> */}
              <Text style={{ color: '#fff', fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' }}>
                Highly Likely
              </Text>
            </View>

            {/* Circular Progress (Static SVG simulation) */}
            <View style={{ position: 'relative', width: 180, height: 180, marginBottom: 24 }}>
              {/* Background Circle */}
              <View
                style={{
                  position: 'absolute',
                  width: 200,
                  height: 200,
                  borderRadius: 999,
                  borderWidth: 14,
                  borderColor: 'rgba(255,255,255,0.15)',
                }}
              />
              {/* Progress Circle (Approximated with border) */}
              <View
                style={{
                  position: 'absolute',
                  width: 200,
                  height: 200,
                  borderRadius: 999,
                  borderWidth: 14,
                  borderColor: '#71fe91',
                  borderRightColor: 'transparent',
                  borderBottomColor: 'transparent',
                  transform: [{ rotate: '-90deg' }],
                }}
              />
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 52, fontWeight: '900', color: '#fff', lineHeight: 52 }}>82</Text>
                <Text style={{ fontSize: 18, color: '#fff', opacity: 0.9 }}>/100</Text>
                <Text style={{ fontSize: 11, color: '#fff', opacity: 0.8, marginTop: 8, letterSpacing: 1, textTransform: 'uppercase' }}>
                  Eligibility Score
                </Text>
              </View>
            </View>

            <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 15 }}>Estimated Loan Range</Text>
            <Text style={{ color: '#fff', fontSize: 26, fontWeight: '700', marginTop: 4 }}>
              PKR 75,000 – 450,000
            </Text>
          </View>
        </View>

        {/* Portfolio Snapshot */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
            Portfolio Snapshot
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
            {/* Credit Score */}
            <View
              style={{
                width: 160,
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 10,
              }}
            >
              {/* <Icon name="credit-score" size={32} color={colors.primary} style={{ marginBottom: 12 }} /> */}
              <Text style={{ fontSize: 12, color: '#94a3b8', fontWeight: '600' }}>Credit Score</Text>
              <Text style={{ fontSize: 26, fontWeight: '700', marginTop: 4 }}>685</Text>
              <Text style={{ color: colors.primary, fontWeight: '600' }}>Good</Text>
            </View>

            {/* Debt-to-Income */}
            <View
              style={{
                width: 160,
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 10,
              }}
            >
              {/* <Icon name="account-balance" size={32} color={colors.secondary} style={{ marginBottom: 12 }} /> */}
              <Text style={{ fontSize: 12, color: '#94a3b8', fontWeight: '600' }}>Debt-to-Income</Text>
              <Text style={{ fontSize: 26, fontWeight: '700', marginTop: 4 }}>28%</Text>
              <Text style={{ color: colors.primary, fontWeight: '600' }}>Healthy</Text>
            </View>

            {/* Recommended */}
            <View
              style={{
                width: 160,
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 10,
              }}
            >
              {/* <Icon name="recommend" size={32} color="#16a34a" style={{ marginBottom: 12 }} /> */}
              <Text style={{ fontSize: 12, color: '#94a3b8', fontWeight: '600' }}>Recommended</Text>
              <Text style={{ fontSize: 15, fontWeight: '700', marginTop: 8, lineHeight: 20 }}>
                Personal / Business
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* Improve Your Portfolio */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 13, fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 }}>
              Improve Your Portfolio
            </Text>
            <TouchableOpacity>
              <Text style={{ color: colors.primary, fontWeight: '700' }}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
            {/* Tip 1 */}
            <View
              style={{
                width: 280,
                backgroundColor: colors.surfaceContainerLow,
                padding: 24,
                borderRadius: 20,
              }}
            >
              <View style={{ width: 44, height: 44, backgroundColor: '#00833922', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                {/* <Icon name="trending-up" size={28} color={colors.primary} /> */}
              </View>
              <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 22 }}>Reduce obligations by PKR 8,000</Text>
              <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
                <View style={{ backgroundColor: '#00833922', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
                  <Text style={{ color: colors.primary, fontSize: 12, fontWeight: '700' }}>+45 Score</Text>
                </View>
                <Text style={{ color: '#94a3b8', fontSize: 12, alignSelf: 'center' }}>High Impact</Text>
              </View>
            </View>

            {/* Tip 2 */}
            <View
              style={{
                width: 280,
                backgroundColor: colors.surfaceContainerLow,
                padding: 24,
                borderRadius: 20,
              }}
            >
              <View style={{ width: 44, height: 44, backgroundColor: '#bc000c22', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                {/* <Icon name="description" size={28} color={colors.secondary} /> */}
              </View>
              <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 22 }}>Add salary slip to your profile</Text>
              <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
                <View style={{ backgroundColor: '#bc000c22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
                  <Text style={{ color: colors.secondary, fontSize: 12, fontWeight: '700' }}>Unlock Range</Text>
                </View>
                <Text style={{ color: '#94a3b8', fontSize: 12, alignSelf: 'center' }}>Medium Impact</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Action Buttons */}
        <View style={{ gap: 12 }}>
          {/* <TouchableOpacity
            style={{
              height: 56,
              backgroundColor: colors.primary,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: colors.primary,
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 10,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>Apply Now with MyTM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 56,
              borderWidth: 2,
              borderColor: `${colors.primary}30`,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: colors.primary, fontSize: 17, fontWeight: '700' }}>View Full Portfolio</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}

    </SafeAreaView>
  );
}