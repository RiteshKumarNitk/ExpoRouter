import { View, Text, Button, StatusBar } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, gap:4, justifyContent: "center", alignItems: "center" }}>
      {/* <StatusBar style="auto" /> */}
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Home Page</Text>
      <Link href="/register" asChild>
        <Button title="Open Register page" />
      </Link>
      <Link href="/one" asChild>
        <Button title="Open tab one" />
      </Link>
      <Link href="/two" asChild>
        <Button title="Open tab two" />
      </Link>
    </View>
  );
}
