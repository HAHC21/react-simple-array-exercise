import './CellItem.css'

const CellItem = (props) => {
    return (
        <div 
            className="cell-item"
            style={{
                paddingLeft: ((1 / props.length) * 50) + 'dvh',
                paddingRight: ((1 / props.length) * 50) + 'dvh'
            }}
            >
            {props.cell}
        </div>
    )
}

export default CellItem