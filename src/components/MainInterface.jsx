import { useState } from "react"

import './MainInterface.css'

import AddCell from './AddCell'
import CellItem from "./CellItem"

const MainInterface = () => {

    const [cells, setCells] = useState(['A', 'B', 'C'])

    function updateCellData(data, index) {
        let temporary_cells = [...cells]
        temporary_cells.splice(index, 0, data)
        console.log(temporary_cells)
        setCells(temporary_cells)
    }

    return (
        <>
        <div className="cells-container">
        {
            < AddCell 
                length={cells.length}
                position={0}
                onAddNewCell={updateCellData} 
            />
        }
        {
            cells.map((cell, index) => (
                <>
                < CellItem cell={cell} length={cells.length} />
                < AddCell 
                    length={cells.length}
                    position={index + 1}
                    onAddNewCell={updateCellData} 
                />
                </>
            ))
        }
        </div>
        </>
    )
}

export default MainInterface