import React from 'react'
import Champions from '../../Assets/champions.json'
import Spells from '../../Assets/summoner_spells.json'

import Style, { Form, FormHeader, FormContents }from './styles'

const Forms = () => {
    return (
        <Style>
            <Form>
                <div>
                    <FormHeader>Summoner Spells</FormHeader>
                        {Object.values(Spells.data).map((spell, i) => {
                            return (
                                <FormContents style={{display: `flex`, flexDirection: `column`}}>
                                    <label>
                                        <input type="radio" value="checked" />
                                        {spell.name}
                                    </label>
                                </FormContents>
                            )
                        })
                        }
                </div>
            </Form>
            <Form>
                <div>
                    <FormHeader>Additional Stuff &nbsp;</FormHeader>
                        <FormContents style={{display: `flex`, flexDirection: `column`}}>
                            <label>
                                <input type="radio" value="" />
                                Cosmic Insight
                            </label>
                            <label>
                                <input type="radio" value="" />
                                Ionian Boots of Lucidity
                            </label>
                        </FormContents>
                </div>
            </Form>
        </Style>
    )
}

export default Forms