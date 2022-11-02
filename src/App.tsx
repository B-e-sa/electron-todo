import './App.css'

const App = (): JSX.Element => {
  const todos: {
    title: string,
    content: string,
    color: string
  }[] = [{
    title: "TITULO",
    content: "CONTEUDO",
    color: "yellow"
  },
  {
    title: "titulo",
    content: "conteudo",
    color: "blue"
  }]

  return (
    <div>
      <div id="notes">
        {todos.map((item) => {
          return (
            <div className="note">
              <input
                type="text"
                max={10}
                defaultValue={item.title}
                name="note title"
                onChange={(e) => {
                  item.title = e.target.value
                }}
              />
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
      </div>
    </div>
  )
}

export default App
