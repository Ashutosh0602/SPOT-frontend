import { StyleSheet, Text, View, Button } from "react-native";
import React, { useRef } from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

const BottomSlider = () => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = useRef<HTMLDivElement | any>(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "papayawhip",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef?.current?.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};

export default BottomSlider;

const styles = StyleSheet.create({});
