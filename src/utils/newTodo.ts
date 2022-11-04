import INote from "../interfaces/INote";

const newTodo = (
    array: INote[],
    setState: React.Dispatch<React.SetStateAction<INote[]>>
) => {

    if (array) {
        const newTodo = [...array, { title: "", content: "", isChangingColor: false, color: "#F0EC84" }]
        setState(newTodo)
        localStorage.setItem('todos', JSON.stringify(newTodo))
    }

}

export default newTodo
