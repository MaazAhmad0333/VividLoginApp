import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import COLORS from "../constants/colors";
const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
      }}
    >
      <View
        style={{
          flex: 1,
          marginHorizontal: 22,
        }}
      >
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: COLORS.black,
              marginVertical: 12,
            }}
          >
            Create Account
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Connect with your friend's today!
          </Text>
        </View>

        {/* Email Address lable and input field part */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,

              marginVertical: 8,
            }}
          >
            Email Address
          </Text>

          <View
            style={{
              // backgroundColor: "red",
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              KeyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>
        {/* ENd */}

        {/* Mobile Number lable and input field part */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,

              marginVertical: 8,
            }}
          >
            Mobile Number
          </Text>

          <View
            style={{
              // backgroundColor: "red",
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22,
            }}
          >
            {/* +92 part */}
            <TextInput
              placeholder="+92"
              placeholderTextColor={COLORS.black}
              KeyboardType="numeric"
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
                height: "100%",
              }}
            />

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={COLORS.black}
              KeyboardType="numeric"
              style={{
                width: "80%",
              }}
            />
          </View>
        </View>
        {/* ENd */}

        {/* Password lable and input field part */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,

              marginVertical: 8,
            }}
          >
            Password
          </Text>

          <View
            style={{
              // backgroundColor: "red",
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
            />

            <TouchableOpacity
              style={{ position: "absolute", right: 12 }}
              onPress={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* ENd */}

        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>I agree to the terms and conditions </Text>
        </View>

        <Button
          title="Sign Up"
          // filled
          color={COLORS.primary}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14 }}>or Signup with</Text>

          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {/* Facebook part  */}
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/img/logo-facebook.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>

          {/* Google part  */}
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/img/google-logo.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Already have an account
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
