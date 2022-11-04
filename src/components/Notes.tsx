import { MouseEventHandler, useEffect, useState } from "react"
import INote from "../interfaces/INote"
import TSetState from "../interfaces/TSetState"
import newTodo from "../utils/newTodo"
import './notes.sass'

const Notes = (props: {
    props: [INote[], TSetState]
}): JSX.Element => {

    const [componentWasAttualized, setComponentWasAttualized] = useState(0)

    const handleColorClick = (target: {
        color: string;
        isChangingColor: boolean
    }, e: any) => {
        target.color = e.target.style.backgroundColor
        target.isChangingColor = false
        props.props[1]([...props.props[0]])
        localStorage.setItem('todos', JSON.stringify(props.props[0]))
    }

    const handleButtons = (func: MouseEventHandler<HTMLButtonElement> | undefined) => {

        const colors = [
            '#f08484',
            '#8df084',
            '#8b84f0',
            '#84f0d5'
        ]

        const buttons = []

        for (let i = 0; i < colors.length; i++) {
            buttons.push(<button
                style={{ backgroundColor: colors[i] }}
                onClick={func}
            ></button>)
        }

        return buttons

    }

    return (
        <>
            {props.props[0]?.map((item: INote) => {
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
                                        {handleButtons((e) => handleColorClick(item, e))}
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