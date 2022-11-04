import { useEffect, useState } from "react"
import newTodo from "../utils/newTodo"
import './notes.sass'

const Notes = (props: any): JSX.Element => {

    const [componentWasAttualized, setComponentWasAttualized] = useState(0)

    const handleColorClick = (target: any, e: any) => {
        target.color = e.target.style.backgroundColor
        target.isChangingColor = false
        props.props[1]([...props.props[0]])
        localStorage.setItem('todos', JSON.stringify(props.props[0]))
    }

    const createButton = (item: any) => {

        const colors = [
            '#f08484',
            '#8df084',
            '#8b84f0',
            '#84f0d5'
        ]

        const buttons = []

        for (let i = 0; i < 4; i++) {
            buttons.push(
                <button 
                style={{backgroundColor: colors[i]}}
                >

                </button>
            )
        }
    }

    return (
        <>
            {props.props[0]?.map((item: any) => {
                return (
                    <div className="note" style={{
                        backgroundColor: item.color
                    }}>
                        <div id="note-header">
                            <input
                                type="text"
                                max={10}
                                defaultValue={item.title}
                                name="note title"
                                onChange={(e) => item.title = e.target.value}
                            />
                            <div id="button-container">
                                {item.isChangingColor === true &&
                                    <div id="other-colors-container">
                                        <button style={{ backgroundColor: '#f08484' }} onClick={(e) => handleColorClick(item, e)}></button>
                                        <button style={{ backgroundColor: '#8df084' }} onClick={(e) => handleColorClick(item, e)}></button>
                                        <button style={{ backgroundColor: '#8b84f0' }} onClick={(e) => handleColorClick(item, e)}></button>
                                        <button style={{ backgroundColor: '#84f0d5' }} onClick={(e) => handleColorClick(item, e)}></button>
                                    </div>
                                }
                                <div id="close-and-color-buttons">
                                    <button
                                        style={{ backgroundColor: `${item.color}` }}
                                        className="button"
                                        onClick={() => {

                                            item.isChangingColor ?
                                                item.isChangingColor = false
                                                :
                                                item.isChangingColor = true

                                            setComponentWasAttualized(componentWasAttualized + 1)

                                        }}
                                    ></button>
                                    <button className="button"> X </button>
                                </div>
                            </div>
                        </div>
                        <textarea
                            defaultValue={item.content}
                            name="note content area"
                            cols={30}
                            rows={10}
                            onChange={(e) => {
                                item.content = e.target.value
                            }}
                        ></textarea>
                    </div>
                )
            })}
        </>
    )
}

export default Notes