import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthProps } from '../../../components/Navigation/Authnavigation'
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import { rootProps } from '../../../components/Navigation/NavigationIndex'

type naviprop=NativeStackNavigationProp<AuthProps>
type  Rootprop=NativeStackNavigationProp<rootProps>
const Loginindex = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  

  const width=Dimensions.get("screen").width
  const Hieght=Dimensions.get("screen").height


  const [Phone,setphonenumber]=useState("")
  const [Otp,setOtp]=useState("")
  const [showopt,setshowopt]=useState(false)
  const navigation=useNavigation<naviprop>()
    const Rnavigation=useNavigation<Rootprop>()

  
    useEffect(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(Phone)) {
    setIsEmailValid(true);
  } else {
    setIsEmailValid(false);
  }
}, [Phone]);
    useEffect(() => {
  if (Otp.length === 6) {
    if (Otp === "111111") {
      Rnavigation.navigate("tabs");
    } else {
      console.log("Invalid OTP");
    }
  }
}, [Otp]);


    
  return (
   
    <View style={{flex:1}}>
 
            <TouchableOpacity style={{    padding: 8,}} onPress={()=>navigation.goBack()}>
                    <Text style={{  fontSize: 28,
    color: '#00672b',
    fontWeight: '600',textAlign:"left",
    width:50}}>←</Text>
                  </TouchableOpacity>


   
      <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:15}}>

   
       
      
      <View style={{
        width:width*0.85,
        backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 10,}}>
        <Text style={{fontSize: 22,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 8,}}>Login with Email </Text>
        <Text style={{fontSize: 15,
    lineHeight: 22,
    color: '#595958',
    marginBottom: 32}}>Enter Your Registered Email Address</Text>

        <TextInput  
        onChangeText={(text)=>setphonenumber(text)}
        value={Phone}
        
        style={{    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16}}
    editable={!showopt}
        
        placeholder='Email'/>

        <TouchableOpacity
        
        
       activeOpacity={1}
  onPress={() => setshowopt(!showopt)}
  disabled={showopt || !isEmailValid} >
   
      <View style={{
    height: 58,
    marginTop:25,
    backgroundColor: '#008339',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#008339',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    opacity: showopt || !isEmailValid ? 0.2 : 1,
      }}>
        <Text style={{color: '#ffffff',
    fontSize: 17,
    fontWeight: '700', }}>Send Otp</Text>
           </View>
           </TouchableOpacity>
           <View style={{marginTop: 36,
    alignItems: 'center',flexDirection:"row"}}>
           <Text style={{textAlign:"center"}}>Don't have account ?   </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Stepzero")}>
            <Text style={{textAlign:"center",color: '#00672b',
    fontWeight: '700',}}>Sign up</Text>
            </TouchableOpacity>
            </View>



      

      </View>
      {
        showopt?   <View style={{
                width:width*0.85,
        backgroundColor: '#ffffff',
    borderRadius: 24,
    padding:25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 10,}}>
        <Text style={{fontSize: 22,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 8,}}>Enter OTP</Text>
        <Text style={{fontSize: 15,
    lineHeight: 22,
    color: '#595958',
    marginBottom: 32}}>Enter Otp send on email</Text>

        <TextInput  
        onChangeText={(text)=>setOtp(text)}
        value={Otp}
        maxLength={6}
        keyboardType="numeric"
        style={{    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16}}
        
        placeholder='OTP'
        />

        <TouchableOpacity activeOpacity={1} onPress={()=>{Rnavigation.navigate("tabs")}}>
   
      <View style={{
    height: 58,
    marginTop:25,
    backgroundColor: '#008339',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#008339',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
        
      }}>
        <Text style={{color: '#ffffff',
    fontSize: 17,
    fontWeight: '700', }}>Verify</Text>
           </View>

           </TouchableOpacity>


           <View style={{flexDirection:"row",width:width*0.85}}>
                
           <View style={{marginTop: 36}}>
           <Text style={{textAlign:"right"}}>Don't Recieve Otp ?   </Text>
            <TouchableOpacity >
            <Text style={{textAlign:"left",color: '#00672b',
    fontWeight: '700',}}>Resend</Text>
            </TouchableOpacity>
            </View>
                
           <View style={{marginTop: 36}}>
           <Text style={{textAlign:"right"}}>Enter Incorrect Email   </Text>
            <TouchableOpacity  onPress={()=>{setshowopt(!showopt)}}>
            <Text style={{textAlign:"left",color: '#00672b',
    fontWeight: '700',}}>Retry</Text>
            </TouchableOpacity>
            </View>
           </View>
         



      

      </View>:<View></View>
      }
         </View>
    
    </View>
  )
}

export default Loginindex