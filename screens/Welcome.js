import React from "react";
import { View, Text, Dimensions, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import { Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <Image
            source={require("../assets/img/fashion-little-boy.jpg")}
            style={{
              width: "25%",
              height: "25%",
              borderRadius: 20,
              top: 30,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/img/fashion-boy-with-yellow-jacket-blue-pants.jpg")}
            style={{
              width: "25%",
              height: "25%",
              borderRadius: 20,
              top: -100,
              left: 90,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/img/soldier-boy-character-videogame.jpg")}
            style={{
              width: "25%",
              height: "25%",
              borderRadius: 20,
              top: 140,
              position: "absolute",
              left: -50,
              transform: [
                { translateX: 55 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/img/soldier-boy-character-videogame.jpg")}
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              top: 120,
              position: "absolute",
              left: 80,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        {/* Content part */}
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 420,
            width: Dimensions.get("screen").width,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Let's get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Connet with each other with chatting
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Calling, Enjoy safe and private texting
            </Text>
          </View>
          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
            style={{ marginTop: 22, width: "100%" }}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.white }}>
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
