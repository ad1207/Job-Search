import { useReducer, useState } from "react";
import {View, ScrollView, SafeAreaView,TouchableOpacity,Image} from 'react-native' 
import {Stack,useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerRight: () => (
                    <TouchableOpacity style={{width: 55,
                        height: 55,
                        borderColor: "#F37453",
                        borderRadius: SIZES.medium,
                        justifyContent: "flex-end",
                        alignItems: "flex-end",}}
                        onPress={()=>router.push('/liked-job')}
                        >
        <Image 
          source={icons.heartOutline}
          resizeMode='contain'
          style={{width: "50%",
          height: "50%",
          tintColor: "#F37453",}}
        />
      </TouchableOpacity>
                ),
                headerTitle: ""
        }}/>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                flex:1,
                padding: SIZES.medium
            }}
            >
                <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                />
                <Popularjobs/>
                <Nearbyjobs/>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Home;


