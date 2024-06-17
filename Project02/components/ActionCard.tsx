import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(WebsitelLink: string) {
    Linking.openURL(WebsitelLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new JS 21</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1717866545967-68fdae38861b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            小鲜肉 屌丝 牛逼 吃土 宅男/宅女 泡妞 撒狗粮 逗比 二货 神马都是浮云
            躺平 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum totam nam et id debitis exercitationem accusamus quas hic,
            corporis iste.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com')}
            >
            <Text style={styles.socialLinks}>Follow Me </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:8
  },
  card: {
    width:325,
    height:360,
    borderRadius:8,
    marginVertical:12,
    marginHorizontal:16,
    // marginRight:10,
  },
  elevatedCard: {
    backgroundColor:"#e07c24",
    elevation:3,
    shadowOffset:{
        height:1,
        width:1,
    },
    shadowColor:"#333",
    shadowOpacity:0.3
  },
  headingContainer: {
    height:40,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  headerText: {
    color:"black",
    fontSize:16,
    fontWeight:"600"
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding:10,

  },
  footerContainer: {
    padding:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  socialLinks: {
    // marginHorizontal:5,
    fontSize:12,
    color:"black",
    backgroundColor:"white",
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
  },
});
