import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchBar({ query, setQuery }: any) {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});
