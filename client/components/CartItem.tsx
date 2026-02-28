import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CartItemProps } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";

export default function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  const imageUrl = item.product.images[0];

  return (
    <View className="flex-row bg-white p-4 rounded-2xl mb-4 shadow-sm border border-gray-100">
      {/* Product Image */}
      <View className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden mr-4">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Product Info */}
      <View className="flex-1 justify-between">
        {/* Top Row */}
        <View className="flex-row justify-between items-start">
          <View className="flex-1 pr-2">
            <Text
              numberOfLines={1}
              className="text-primary font-semibold text-base"
            >
              {item.product.name}
            </Text>

            <Text className="text-secondary text-sm mt-1">
              Size: {item.size}
            </Text>

            <Text className="text-primary font-bold text-base mt-2">
              ${item.product.price}
            </Text>
          </View>

          <TouchableOpacity
            onPress={onRemove}
            className="bg-red-50 p-2 rounded-full"
            activeOpacity={0.7}
          >
            <Ionicons name="trash-outline" size={18} color="#ff4c3b" />
          </TouchableOpacity>
        </View>

        {/* Quantity Controls */}
        <View className="flex-row items-center mt-3 bg-gray-100 self-start rounded-full px-3 py-1">
          <TouchableOpacity
            onPress={() =>
              item.quantity > 1 && onUpdateQuantity(item.quantity - 1)
            }
            className="px-2"
          >
            <Ionicons name="remove" size={18} color="#111" />
          </TouchableOpacity>

          <Text className="mx-3 font-semibold text-base">{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.quantity + 1)}
            className="px-2"
          >
            <Ionicons name="add" size={18} color="#111" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
