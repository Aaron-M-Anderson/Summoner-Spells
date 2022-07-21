import Card from '../Card/index.jsx'

import Style from './styles'

// const DisplayData = () => Champions.map((champion, i) => {
//     return (
//         <div>
//             <img key={i} src={champion.icon} />
//         </div>
//     )
// })

const Cards = () => {
    return (
        <Style>
            {
                [...Array(5)].map((e, i) => {
                return <Card key={i} index={i}/>
                })
            }
        </Style>
    )
}

export default Cards