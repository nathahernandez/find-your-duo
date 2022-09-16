import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BG } from "../../components/Background"
import { useRoute, useNavigation } from '@react-navigation/native'
import { GameParams } from '../../@types/navigation'
import { View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import LogoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme'
import { Heading } from '../../components/Heading'
import { AdCards } from '../../components/AdCards'
import { api } from '../../services/api'
import { useState, useEffect } from 'react';

export interface AdsProps {
    createdAt: string
    hourEnd: string
    hourStart: string
    id: string
    name: string
    useVoice: boolean
    weekDays: string[]
    yearsPlaying: number
}

export function GameAds () {

    const route = useRoute()
    const params = route.params as GameParams;
    const navigation = useNavigation();

    const [ Ads, setAds ] = useState<AdsProps[]>()

    function handleGoBack () {
        navigation.goBack()
    }

    useEffect(()=>{
        api.get(`/games/${params.id}/ads`)
        .then(response => {
            setAds(response.data)
        })
    }, [])
    

    return (
        <BG>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleGoBack}
                    >
                        <Entypo 
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image 
                        source={LogoImg}
                        style={styles.logo}
                    />
                    <View style={styles.right} />
                </View>
                <Image
                    source={{
                        uri: params.bannerURL
                    }}
                    style={styles.gameImg}
                    resizeMode='cover'
                />

                <Heading 
                    title={params.title}
                    subtitle='Conecte-se e comece a jogar!'
                />
                <FlatList 
                    horizontal
                    data={Ads}
                    keyExtractor={item => item.id}
                    renderItem={ ({ item }) => <AdCards onConect={() => {}} data={item} /> }
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerList}
                />
            </SafeAreaView>
        </BG>
    )
}
