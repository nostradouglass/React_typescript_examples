import React from "react"


const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }


    return <div>
        <h1>Event Component</h1>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart} >Drag me</div>
    </div>
}


export default EventComponent