import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface DataObj {
  text: string;
}

const DATA: DataObj[] = [
  {
    text: "Hello! My name is Jaenn Poumian, I am a React.js / React Native / TypeScript full-stack developer with two years experience mainly focused on mobile development for IOS and Android.",
  },
  {
    text: "I consider myself a great match because I love the idea behind goodbag, helping the planet with technology, is simply awesome and inspiring. And I would love to part of that, therefore, to work closely with like-minded people and to be part of a life changing startup is one of the main goals in my career. ",
  },
  {
    text: "That being the case, I am very motivated to share my skills, to never stop learning and most importantly, to be a part of this great company and start working together towards making a chance in the world!",
  },
];

const App: React.FC = () => {
  function renderTextItemHandler(itemData: ListRenderItemInfo<DataObj>) {
    const item = itemData.item;

    return <Text style={styles.paragraph}>{item.text}</Text>;
  }

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <FlatList
            data={DATA}
            renderItem={renderTextItemHandler}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    padding: 30,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 30,
    borderRadius: 30,
    shadowColor: "#1d1d1d",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: Platform.OS === "android" ? 3 : 0,
  },
  paragraph: {
    fontSize: 17,
    color: "#000",
  },
});
