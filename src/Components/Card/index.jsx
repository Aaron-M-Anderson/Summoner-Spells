import React, { useState, useEffect } from 'react'
import Champions from '../../Assets/json/champions.json'
import Spells from '../../Assets/json/summoner_spells.json'
import BlackSquare from '../../Assets/images/black-square-shape.svg'

import FormComponent from '../FormComponent/index.jsx'

import Style, { Champion, Spell, Extra } from './styles'

const Card = props => {
    
    const { index, data, setData } = props

    const [runeActive, setRuneActive] = useState(false)
    const [bootsActive, setBootsActive] = useState(false)

    const champions = JSON.parse(JSON.stringify(Champions))
    const spells = JSON.parse(JSON.stringify(Spells.data))

    const chosenChamp = 
    data[`Champion${index}`].name !== `` ? 
    champions.find(champion => champion.name === data[`Champion${index}`].name) 
    : null

    const firstChosenSpell =
    data[`Champion${index}`].spells[0] !== undefined ?
    Object.values(spells).find(spell => spell.name === data[`Champion${index}`].spells[0])
    : null

    const secondChosenSpell =
    data[`Champion${index}`].spells[1] !== undefined ?
    Object.values(spells).find(spell => spell.name === data[`Champion${index}`].spells[1])
    : null

    const toggleRuneActive = () => {
        setRuneActive(!runeActive)
    }

    const toggleBootsActive = () => {
        setBootsActive(!bootsActive)
    }

    useEffect(() => {
        console.log(bootsActive, runeActive)
    }, [bootsActive, runeActive])

    return (
        <Style>
            <Champion 
                src={chosenChamp !== null ? chosenChamp.icon : BlackSquare} 
            />
            <div>
                <Spell src={firstChosenSpell !== null ? firstChosenSpell.image.full : Spells.data.Summoner_UltBookPlaceholder.image.full} />
                <Spell src={secondChosenSpell !== null ? secondChosenSpell.image.full : Spells.data.Summoner_UltBookPlaceholder.image.full} />
            </div>
            <div>
                <Extra style={{opacity: runeActive === true ? `100%` : `40%`}} onClick={toggleRuneActive} src='https://raw.communitydragon.org/12.13/game/assets/perks/styles/inspiration/cosmicinsight/cosmicinsight.png' />
                <Extra style={{opacity: bootsActive === true ? `100%` : `40%`}} className="boots" onClick={toggleBootsActive} src='https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/3158.png' />
            </div>
            <FormComponent data={data} setData={setData} index={index} />
        </Style>
    )
}

export default Card