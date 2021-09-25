import { memo } from 'react'

export const RandomImage = memo( () => {

    console.log("se llama imagen");

    return (
        <img style={{ width : 200, height : 200 }} alt={"Random_Image"} src={"https://picsum.photos/200/300"}></img>
    )
}
)