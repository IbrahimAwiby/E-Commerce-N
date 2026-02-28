import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

export default function Favorites() {
  const { wishlist } = useWishlist();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <Header title="Wishlist" showMenu showCart />

      {wishlist.length > 0 ? (
        <ScrollView
          className="flex-1 px-4 mt-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row flex-wrap justify-between">
            {wishlist.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center px-6">
          {/* Icon */}
          <View className="w-28 h-28 rounded-full bg-primary/10 items-center justify-center mb-6">
            <Ionicons name="heart-outline" size={60} color="#6366F1" />
          </View>

          {/* Title */}
          <Text className="text-primary text-xl font-bold">
            Your Wishlist is Empty
          </Text>

          {/* Subtitle */}
          <Text className="text-secondary p-3 text-center mb-6">
            Save your favorite items here and shop them anytime!
          </Text>

          {/* Button */}
          <TouchableOpacity
            onPress={() => router.push("/shop")}
            className="bg-primary px-6 py-3 rounded-2xl shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white font-semibold text-base">
              Explore Products
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
