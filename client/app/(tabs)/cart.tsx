import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import CartItem from "@/components/CartItem";

export default function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();
  const shipping = 2.0;
  const total = cartTotal + shipping;
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <Header title="My Cart" showBack />

      {cartItems.length > 0 ? (
        <>
          <ScrollView
            className="flex-1 px-4 mt-4"
            showsVerticalScrollIndicator={false}
          >
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemove={() => removeFromCart(item.id, item.size)}
                onUpdateQuantity={(q) => updateQuantity(item.id, q, item.size)}
              />
            ))}
          </ScrollView>

          {/* total */}
          <View className="p-4 bg-white rounded-t-3xl shadow-sm">
            {/* subtotal */}
            <View className="flex-row justify-between mb-2">
              <Text className="text-secondary">Subtotal</Text>
              <Text className="text-primary font-bold">
                ${cartTotal.toFixed(2)}
              </Text>
            </View>
            {/* shipping */}
            <View className="flex-row justify-between mb-2">
              <Text className="text-secondary">Shipping</Text>
              <Text className="text-primary font-bold">
                ${shipping.toFixed(2)}
              </Text>
            </View>
            {/* border */}
            <View className="h-[1px] bg-border mb-4" />
            {/* total */}
            <View className="flex-row justify-between mb-6">
              <Text className="text-primary font-bold text-lg">Total</Text>
              <Text className="text-primary font-bold text-lg">
                ${total.toFixed(2)}
              </Text>
            </View>
            {/* checkout button */}
            <TouchableOpacity
              onPress={() => router.push("/checkout")}
              className="bg-primary py-3 rounded-full items-center"
            >
              <Text className="text-white font-bold text-base">Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View className="flex-1 items-center justify-center px-6">
          {/* Icon */}
          <View className="w-28 h-28 rounded-full bg-primary/10 items-center justify-center mb-6">
            <Ionicons name="cart-outline" size={60} color="#6366F1" />
          </View>

          {/* Title */}
          <Text className="text-primary text-xl font-bold">
            Your Cart is Empty
          </Text>

          {/* Subtitle */}
          <Text className="text-secondary p-3 text-center mb-6">
            Looks like you haven't added anything yet. Start exploring products
            now!
          </Text>

          {/* Button */}
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="bg-primary px-4 py-3 rounded-2xl shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white font-semibold text-base">
              Start Shopping
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
