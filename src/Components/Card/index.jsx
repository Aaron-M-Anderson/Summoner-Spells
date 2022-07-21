import React from 'react'
import Champions from '../../Assets/champions.json'
import Spells from '../../Assets/summoner_spells.json'

import Forms from '../Forms/index.jsx'

import Style, { Champion, Spell, Extra } from './styles'

const Card = props => {
    const { index } = props
    return (
        <Style>
            <Champion src={Champions[140 + index].icon} />
            <div>
                <Spell src={Spells.data.Flash.image.full} />
                <Spell src={Spells.data.Ignite.image.full} />
            </div>
            <div>
                <Extra src='https://raw.communitydragon.org/12.13/game/assets/perks/styles/inspiration/cosmicinsight/cosmicinsight.png' />
                <Extra src='https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/3158.png' />
            </div>
            <Forms />
        </Style>
    )
}

export default Card