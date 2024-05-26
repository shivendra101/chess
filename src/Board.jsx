import { useState } from "react"

function Board() {

    const [selected, setSelected] = useState([-1, -1]);
   
    const arr = [...Array(8).keys()].map(i => i + 1);

    return (
        <div className="grid">

            {
                arr.map((a, row) => {
                    return (
                        <div className="row">
                            {
                                arr.map((b, col) => {
                                    return <div className={`cell 
                                        ${((row + col) & 1 ? "white" : "black")} 
                                        ${(selected[0] === row && selected[1] === col) ? "selected" : ""}
                                        ${(selected[0] != -1 && selected[1] != -1 && Math.abs(selected[0] - row) === Math.abs(selected[1] - col)) ? "highlight" : ""} 
                                    `}
                                    onMouseOver={() => setSelected([row, col])}
                                    onMouseLeave={() => setSelected([-1, -1])}
                                    >
                                    </div>
                                })
                            }                       
                        </div>
                    )  
                })
            }

        </div>
    )
}

export default Board;