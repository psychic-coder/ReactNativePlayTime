import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>TrendingPlaces</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1717167172109-d4c95ddfa5c0?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Chinese BC</Text>
          <Text style={styles.cardLabel}>CHi chA chu chu</Text>
          <Text style={styles.cardDescription}>
            对中国的批评之一是其政府对言论自由的限制非常严格，许多媒体和社交平台都受到审查。其次，少数民族如维吾尔族和藏族在文化和宗教方面受到压制。最后，环境污染问题严重，许多城市的空气质量不佳，影响居民健康。
          </Text>
          <Text style={styles.cardFooter}>mkc</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    // backgroundColor: '#fff',
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color: 'black',
    fontSize:22,
    fontWeight:"bold",
    marginBottom:6,

  },
  cardLabel: {
    color: 'black',
    fontSize:16,
    marginBottom:6,
  },
  cardDescription: {
    color: '#242b2e',
    marginTop:4,
    fontSize:12,
    marginBottom:12,
    flexShrink:1,
  },
  cardFooter: {
    color: 'black',
  },
});
