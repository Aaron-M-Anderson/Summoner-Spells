import React, { useState, useEffect } from 'react'

import Champions from '../../Assets//json/champions.json'
import Spells from '../../Assets/json/summoner_spells.json'

import Style, { Form, FormHeader, FormContents, Button }from './styles'


const FormComponent = props => {
    const { index, data, setData } = props

    const champions = JSON.parse(JSON.stringify(Champions))

    const [champInfo, setChampInfo] = useState({
        name: ``,
        extras: {
            rune: false,
            boots: false,
        },
        spells: [],
    })
    const [spells, setSpells] = useState([])
    const [extras, setExtras] = useState({
        rune: false,
        boots: false,
    })

    const handleSubmit = async (e) => {
        console.log(e)
        e.preventDefault()
        setData({
            ...data,
            [`Champion${index}`]: champInfo
        })
    }

    const handleChange = (e) => {
        setChampInfo({
            ...champInfo,
            name: e.target.value
            }
        )

    }

    const handleSelectSpell = (e) => {
        setChampInfo({
            ...champInfo,
            spells: spells
            }
        )
    }

    const handleAddSpells = (spell) => {
        setSpells([...spells, spell])
    }

    // const handleChangeExtras = (e) => {
    //     setChampInfo({
    //         ...champInfo,
    //         extras: e.target.value
    //     })
    // }

    // const handleAddExtras = (e) => {
    //     console.log(`shloop`, e.name)
    //     // setExtras({...extras, [e.target.name]: e.target.checked})
    // }


    useEffect(() => {
        handleSelectSpell()
        console.log(data)
    }, [data])

    return (
        <Style>
            <Form onSubmit={handleSubmit}>
                <div>
                    <FormHeader>Champion</FormHeader>
                        <FormContents>
                            <select name='Champion' id='champSelect' onChange={handleChange}>
                                <option value=''>Select</option>
                                {
                                    champions.sort((a, b) => a.id > b.id ? 1 : -1).map(
                                        (champion, i) =>
                                            <option key={i} value={champion.name}>{champion.name}</option>
                                    )
                                }
                            </select>
                        </FormContents>
                </div>
                <div>
                    <FormHeader>Summoner Spells</FormHeader>
                        {Object.values(Spells.data)
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .filter(spell => spell.name !== "Placeholder")
                        .map((spell, i) => {
                            return (
                                <FormContents key={i}>
                                    <label>
                                        <input type="radio" value={spell.name} onCheck={
                                            e => {
                                            handleAddSpells(e.target.value)
                                            handleSelectSpell()}} />
                                        {spell.name}
                                    </label>
                                </FormContents>
                            )
                        })
                        }
                </div>
                    <Button type='submit'>Update</Button>
            </Form>
        </Style>
    )
}

export default FormComponent