import React, { useState, useEffect } from "react"

function ToDo() {
    const [toDo, setToDo] = useState<string>("")
    const [toDos, setToDos] = useState<Array<string>>([])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setToDo(event.currentTarget.value);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo === "")
            return;
        console.log(toDo);
        setToDos(currentArray => [toDo, ...toDos])
        setToDo("");
    }

    //map으로 컴포넌트 만들때 ()로 한줄감싸기 해야에러가 안나네 작동도하고
    return (
        <div>
            <h1>To Do List~ ({toDos.length})</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
            <ul>
                {toDos.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export {
    ToDo,
}