import { useState } from "react"

import './AddCell.css'

const AddCell = (props) => {

    const [input, setInput] = useState(false)
    const [elementData, setElementData] = useState('')
    const [classes, setClasses] = useState('new-cell-prompt')

    function UpdateElementData(event) {
        setElementData(event.target.value)
    }

    function SaveElementData(event) {
        event.preventDefault()
        props.onAddNewCell(elementData, props.position)
        EnableElementForm()
    }

    function EnableElementForm() {
        if (!input) {
            setInput(true)
            setClasses('new-cell-prompt-active')
        }
        else {
            setInput(false)
            setClasses('new-cell-prompt')
        }
    }

    return (
        <div 
            className={classes}
            style={input ? {
                paddingLeft: ((1 / props.length) * 50) + 'dvh',
                paddingRight: ((1 / props.length) * 50) + 'dvh'
            }: {}}
            >
            {
                input ?
                <form onSubmit={SaveElementData}>
                    <input type="text" placeholder="Element name" onChange={UpdateElementData}/>
                    <button
                        type="submit"
                    >Save</button>
                    <button
                        type="button"
                        onClick={EnableElementForm}
                    >Cancel</button>
                </form>
                :
                <div className="new-cell-prompt-add" onClick={EnableElementForm}>Add</div>
            }
        </div>
    )
}

export default AddCell