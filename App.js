import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { RefreshControl, SafeAreaView, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image, ScrollView, StyleSheet, Text, TextInput, Switch, DrawerLayoutAndroid, Button, FlatList, Animated } from 'react-native';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function App() {

  const [salary, setSalary] = useState("");
  const [selectedId, setSelectedId] = useState("1");
  const [refreshing, setRefreshing] = useState(false);
  const [abled, setAbled] = useState("down");
  const [oldOffset, setOffset] = useState("");
  const [layoutDetails, setLayoutDetails] = useState({});
  const drawer = useRef(null);

  const onPressButton = () => {
    alert('You tapped the button!')
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onLongPressButton = () => {
    alert('You long-pressed the button!')
  }
  const DATA = [
    {
      id: "1",
      title: "Shopping",
      icon: "home"
    },
    {
      id: "3",
      title: "Order",
      icon: "shoppingcart"
    },
    {
      id: "4",
      title: "Ratings",
      icon: "staro"
    },
    {
      id: "5",
      title: "Settings",
      icon: "setting"
    },
    {
      id: "2",
      title: "Customer Support",
      icon: "customerservice"
    },
    {
      id: "6",
      title: "Tell a friend",
      icon: "sharealt"
    },
  ];

  const dataCaosal = [{
    id: 1,
    title: "Birinyani Festival !",
    description: "Free shipping to every one",
    image: "https://img.freepik.com/free-photo/food-frame-with-copy-space-flat-lay_23-2148723504.jpg?w=2000&t=st=1664038682~exp=1664039282~hmac=8884686df814e46e9d4b917a6afd53cfa89608f65ad8047274c68d1b9d1c6c64",
    percenatge: "60",
    date: "Sept 02 - Oct 02, 2022"
  },
  {
    id: 2,
    title: "Sweet for a good one !",
    description: "Using slice and paytm.",
    image: "https://media.istockphoto.com/photos/spicy-grilled-jerk-chicken-on-a-plate-picture-id1166171010?s=612x612",
    percenatge: "10",
    date: "Sept 29 - Oct 10, 2022"
  },
  {
    id: 2,
    title: "For a better bond !",
    description: "Get choclates with in 20 min.",
    image: "https://www.bu.edu/files/2020/10/National-Chocolate-day.png",
    percenatge: "12",
    date: "Till we're live !"
  }];

  const catData = [{
    id: 0, 
    color: "#ffd7e1",
    title: "Offers",
    icons: "gift"
  },{
    id: 1, 
    color: "#d7ffe1",
    title: "Veg",
    icons: "leaf"
  },{
    id:2,
    color: "#bdfffe",
    title: "Non Veg",
    icons: "bug"
  },{
    id: 3, 
    color: "#fff5d7",
    title: "Desert",
    icons: "ice-cream-sharp"
  },{
    id: 4, 
    color: "#d7e1ff",
    title: "Fast Food",
    icons: "fast-food"
  },{
    id: 5, 
    color: "#ffe1d7",
    title: "Italian",
    icons: "ios-pizza"
  }];

  const hotData = [{
    id: 1,
    image: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?size=626&ext=jpg",
    distance: "13.1",
    time: "12",
    title: "Fish Curry with sallon",
    heading: "Baby Fish",
    rating: "4.8",
    queue: 266
  },
  {
    id: 2,
    image: "https://img.freepik.com/premium-photo/dum-handi-muttona-biryania-gosht-pilaf-is-prepared-earthen-clay-pot-called-haandi-1-kilo-size-popular-indian-non-vegetarian-fooda_466689-52328.jpg?size=626&ext=jpg",
    distance: "10.1",
    time: "5",
    title: "Dum Handi Biriyani",
    heading: "Paradise Biriyani",
    rating: "5.0",
    queue: 26
  },{
    id: 3,
    image: "https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74237.jpg?size=626&ext=jpg",
    distance: "20.1",
    time: "16",
    title: "Misal pav is popular maharashtrian",
    heading: "Misal Wala",
    rating: "4.5",
    queue: 12
  },{
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  },{
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  },{
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  },{
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  },
  {
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  },{
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  },{
    id: 4,
    image: "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78687.jpg?size=338&ext=jpg",
    distance: "100.1",
    time: "20",
    title: "Mendu-Idle vada with sambar",
    heading: "South king",
    rating: "4.2",
    queue: 2
  }]

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "rgba(136,196,255,.2)" : "white";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)} style={[styles.item, { backgroundColor: backgroundColor }]}>
        <AntDesign name={item.icon} size={24} color={"black"} />
        <Text style={[styles.titles, color]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const navigationView = () => (
    <View style={[styles.containerDrawer]}>
      <View style={styles.topnavDr}>
        <View style={{ marginTop: 20 }}>
          <Image
            source={{ uri: "https://instagram.flko7-1.fna.fbcdn.net/v/t51.2885-19/302289886_100735812768491_8064898382319249514_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.flko7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=jpueNZby5isAX_GIGO-&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT83hhOJCTrpgcEThqUNhvaa1WwuXUwMe0Q7BB9e-w_4KA&oe=6335D5CA&_nc_sid=8fd12b" }}
            style={styles.image_drawer}
          />
          <Text style={styles.username}> Nitesh Singh !</Text>
          <View style={styles.titleFle}>
            <Text style={styles.title}> Prime Customer </Text>
            <MaterialIcons name="verified" size={14} color="white" />
          </View>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <View style={styles.bottomSheetDrawer}>
        <Text style={[styles.titlesB, { color: "gray" }]}> Version 1.0.0 </Text>
        <Text style={styles.titlesB}> Made with ❤️ by Nitesh </Text>
      </View>
    </View>
  );
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 secons
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onLayout=(event)=> {
    const {x, y, height, width} = event.nativeEvent.layout;
    setLayoutDetails({
      x, y,height, width
    })
  }
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <View style={[styles.topnav, { alignItems: "center", width: layoutDetails?.width }]}>
        <AntDesign name={"bars"} size={30} color={"white"} onPress={() => drawer.current.openDrawer()}/>
        <View style={styles.top_icons}>
          <Ionicons name="notifications-outline" size={24} color="white" />
          <Image
            style={styles.image_header}
            source={{ uri: "https://instagram.flko7-1.fna.fbcdn.net/v/t51.2885-19/302289886_100735812768491_8064898382319249514_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.flko7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=jpueNZby5isAX_GIGO-&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT83hhOJCTrpgcEThqUNhvaa1WwuXUwMe0Q7BB9e-w_4KA&oe=6335D5CA&_nc_sid=8fd12b" }}
          />
        </View>
      </View>
        <ScrollView contentContainerStyle={[styles.scrollView]} onLayout={onLayout}
        nestedScrollEnabled = {true}
        bounces={false}
        alwaysBounceVertical={false}
        // fadingEdgeLength={90}
        stickyHeaderIndices={[0]}
        onScroll={event => {
          const currentOffset = event.nativeEvent.contentOffset.y;
          setOffset(currentOffset);
          if (!(currentOffset < 0) && currentOffset !== 0) {
            if (currentOffset > oldOffset) {
              setAbled('up');
              fadeOut();
            } else {
              setAbled('down');
              fadeIn();
            }
          }
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            progressViewOffset={-40}
            colors={['#88c4ff']}
            onRefresh={onRefresh}
          />
        }
        scrollEnabled={true}
        disableScrollViewPanResponder={true}
          >
          <View style={styles.top_home_curvs}>
            { <View>
              <Text style={styles.home_page_head}>Where do you want to eat today ?</Text>
              <View style={styles.home_page_search}>
                <Ionicons name="search-outline" style={styles.iconsSearc} size={24} color="gray" />
                <TextInput placeholder="Search what's in your mind" style={styles.search_input}/>
              </View>
            </View>}
          </View>
          
          <View style={[styles.home_content]} >
            <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: "row", marginRight: 10}} horizontal>
              {dataCaosal?.map((d, id) => 
               <View style={styles.carsol} key={id}>
               <View style={styles.carsol_text}>
               </View>
               <View  style={styles.ctx_carsol}>
                <Text style={styles.username_carsol}> {d?.title}</Text>
                 <Text style={styles.title_carsol}> {d.description} </Text>
                 <Text style={styles.carsol_off}>{d.percenatge}<Text style={{fontSize: 30}}>%</Text></Text>
                 <Text style={styles.carsol_date}>{d.date}</Text>
               </View>
               <View style={styles.carsol_img}>
               <Image
                 source={{ uri: d.image }}
                 style={{ height: 180,width: 210, borderTopRightRadius: 50,  borderBottomRightRadius: 50,  }}
               />
               </View>
             </View>
            )}
            </ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: "row" }} horizontal>
            {catData?.map((data, item) => 
              <TouchableWithoutFeedback onPress={onPressButton} key={item}>
                <View>
                  <View style={[styles.button, {backgroundColor: data?.color}]}>
                     <Ionicons name={data?.icons} size={32} color="rgba(0,0,0,0.7)" />
                  </View>
                  <Text style={styles.buttonText}>{data?.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            </ScrollView>
            <ScrollView style={{width: "100%", padding: 15}}>
               <View style={[styles.titleFle, {justifyContent: "space-between"}]}>
                 <Text style={{ fontWeight: "bold", fontSize: 18}}> Hottest Queue</Text>
                 <Text style={{ fontWeight: "bold", fontSize: 16, color: "#88c4ff"}}> See all</Text>
               </View>
               {hotData?.map((data, id) => 
               <View style={styles.list_items} key={id}>
                <Image
                  source={{ uri: data?.image}}
                  style={{ height: 90, width: "43%", borderRadius: 10 }}
                />
                <View style={{ marginLeft: 8}}>
                  <Text style={{ color: "grey", fontSize: 14}}>{data?.distance}mi . {data?.time} min</Text>
                  <Text style={{ color: "black", fontSize: 18, fontWeight: "bold", marginTop: 5}}>{data?.title}</Text>
                  <Text style={{ color: "black", fontSize: 18, fontWeight: "bold"}}>{data?.heading}</Text>
                  <View style={{flexDirection: "row", marginTop: 5 }}>     
                    <Ionicons name="star" size={14} color="gold" />
                    <Text style={{ color: "grey", fontSize: 16}}> {data?.rating} . {data?.queue} Queue</Text>
                  </View>
                </View>
               </View>
               )}
            </ScrollView>
            <View style={{backgroundColor: "rgba(0,0,0,0.2)", paddingTop: 5, borderRadius: 10,marginBottom: 10, width: 100}}></View>
            <StatusBar style="auto" backgroundColor="rgb(136,196,255)" />
          </View>
        </ScrollView>

        <Animated.View collapsable style={[styles.bottom_nav,{ opacity: fadeAnim}]}>
           <TouchableOpacity style={styles.bottom_nav_button}>
            <AntDesign name={"home"} size={24} color={"white"} />
            <Text style={[styles.text_bottom,{color: "white", fontSize: 16}]}>Home</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.bottom_nav_button}>
            <AntDesign name={"qrcode"} size={24} color={"rgba(255,255,255,0.5)"} />
            <Text style={styles.text_bottom}>Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottom_nav_button}>
            <AntDesign name={"hourglass"} size={24} color={"rgba(255,255,255,0.5)"} />
            <Text style={styles.text_bottom}>Queue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottom_nav_button}>
            <AntDesign name={"filetext1"} size={24} color={"rgba(255,255,255,0.5)"} />
            <Text style={styles.text_bottom}>History</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  bottom_nav: {
    flexDirection: "row",
    width: "96%",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 50,
    backgroundColor: "#88c4ff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    position: "absolute",
    bottom: 15,
    shadowOpacity: 0.56,
    shadowRadius: 8.00,
    elevation: 4,
    paddingEnd: 20,
    paddingStart: 20,
    marginLeft: "2%",
    alignItems:"center",
    justifyContent: "space-between"
  },
  text_bottom: {
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold"
  },
  bottom_nav_button: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#88c4ff',
    padding: 0,
  },
  containerDrawer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
  },
  carsol: {
    flexDirection: "row",
    zIndex: 1,
    height: 180,
    // backgroundColor: "#88c4ff",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 15,
    marginRight : 15,
    justifyContent: "space-between",
  },
  titleFle: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ctx_carsol: {
    position: 'absolute',
    zIndex: 2,
    padding: 20,
    color: "red"
  },
  username_carsol: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: -1,
  },
  title_carsol: {
    fontSize: 15,
    color: "rgba(255,255,255, 0.7)",
  },
  carsol_off: {
    fontSize: 60,
    marginTop: 5,
    marginBottom: 2,
    fontWeight: "bold",
    color: "#ffcd3c"
  },
  carsol_date: {
    fontSize: 15,
    marginLeft: 5,
    color: "rgba(255,255,255, 0.9)",
  },
  carsol_text: {
    borderBottomColor: "#88c4ff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 20,
    width: 250,
    height: 0,
    borderBottomWidth: 180,
    borderLeftWidth: 0,
    borderLeftColor: "#88c4ff",
    borderRightWidth: 70,
    borderRightColor: "transparent",
    borderStyle: "solid",
  },
  carsol_img: {
    width: 200,
    position: 'relative',
    zIndex: -2,
    marginLeft: -100
  },
  top_home_curvs_ables: {
    flex: 1,
    zIndex: 10,
    flexDirection: "column", 
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 45,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#88c4ff",
  },
  top_home_curvs: {
    flex: 1,
    zIndex: 10,
    flexDirection: "column", 
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 2,
    paddingBottom: 70,
    backgroundColor: "#88c4ff",
  },
  home_content_abled: {
    flex: 1, 
    width: "100%", 
    zIndex: 1,
    marginTop: -40,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    alignItems: "center",
    // backgroundColor: "#88c4ff33" 
    backgroundColor: "white" 
  },
  home_content: { 
    flex: 1, 
    width: "100%", 
    zIndex: 1000,
    marginTop: -40,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    alignItems: "center",
    // backgroundColor: "#88c4ff33" 
    backgroundColor: "white" 
  },
  top_icons: { 
    flexDirection: "row", 
    alignContent: "center", 
    alignItems: "center" 
  },
  username: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "white"
  },
  item: {
    width: "94%",
    marginTop: 12,
    marginLeft: "3%",
    paddingTop: 13,
    paddingLeft: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderRadius: 50
  },
  topnav: {
    // flex: 1,
    backgroundColor: "#88c4ff",
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "normal",
    color: "white",
    marginRight: 10
  },
  titles: {
    paddingLeft: 10,
    color: "black",
    fontSize: 20,
    letterSpacing: 0.8
    // fontWeight: "bold",
  },
  titlesB: {
    color: "black",
    fontSize: 16,
    letterSpacing: 0.8
  },
  topnavDr: {
    // flex: 1,
    paddingTop: 45,
    paddingBottom: 20,
    paddingLeft: 15,
    backgroundColor: "#88c4ff"
  },
  paragraph: {
    marginTop: 80,
    color: "white"
  },
  text: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#88c4ff"
  },
  input: {
    width: "70%",
    padding: 10,
    height: 40,
    backgroundColor: "white",
    margin: "auto",
    marginTop: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  button: {
    margin: 15,
    marginBottom: 8,
    width: 80,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    alignItems: 'center',
    backgroundColor: '#88c4ff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 8.00,
    elevation: 4
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16
  },
  image_drawer: { 
    width: 80, 
    height: 80, 
    backgroundColor: "white", 
    borderRadius: 500 ,
    borderWidth: 2,
    borderColor: "white"
  },
  bottomSheetDrawer: { 
    borderTopWidth: 1, 
    borderColor: "rgb(209,209,209)", 
    padding: 20, 
    alignItems: "center", 
    width: "90%", 
    marginLeft: "5%" 
  },
  image_header: {
    width: 40, 
    height: 40, 
    marginLeft: 8, 
    borderRadius: 50, 
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.78,
    shadowRadius: 8.00,
    elevation: 4,
    borderWidth: 2,
    borderColor: "white"
  },
  home_page_head: {
    color: "white",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 20
  },
  home_page_search: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderRadius: 50,
    paddingLeft: 10,
    backgroundColor: "white"
  },
  search_input: {
    flex: 1,
    padding: 10,
    width: "80%",
    fontSize: 18
  },
  list_items: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  }
});
