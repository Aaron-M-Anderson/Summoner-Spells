import React from 'react'
import { useState } from 'react'

import Card from '../Card/index.jsx'

import Style from './styles'

const Cards = () => {

    const [data, setData] = useState({
        Champion0 : {
            name: ``,
            extras: {
                rune: false,
                boots: false,
            },
            spells: [],
        },
        Champion1 : {
            name: ``,
            extras: {
                rune: false,
                boots: false,
            },
            spells: [],
        },
        Champion2 : {
            name: ``,
            extras: {
                rune: false,
                boots: false,
            },
            spells: [],
        },
        Champion3 : {
            name: ``,
            extras: {
                rune: false,
                boots: false,
            },
            spells: [],
        },
        Champion4 : {
            name: ``,
            extras: {
                rune: false,
                boots: false,
            },
            spells: [],
        }
    })
    const [champions, setChampions] = useState([])
    const [spells, setSpells] = useState([])
    const [extras, setExtras] = useState([])

    return (
        <Style>
            {
                [...Array(5)].map((e, i) => {
                    return (
                        <Card 
                            data={data}
                            setData={setData}
                            key={i} 
                            index={i}
                        />
                    )
                })
            }
        </Style>
    )
}

export default Cards