import { Text, TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { THEME } from '../../theme'
import { styles } from './styles'

export interface GameCardProps {
    id: string,
    name: string,
    ads: string,
    card: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard ( { data } : Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground 
                style={styles.card}
                source={data.card}
            >
                <LinearGradient 
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <Text style={styles.ads}>
                        {data.ads} anúncios
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}