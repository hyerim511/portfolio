import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function Accordion(props: any) {
    const {devText, index, onToggle, active} = props
    return (
        <li key={index} onClick={onToggle}>
            <h5>{devText.title} 
                <span>{active ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small"/>}</span>
            </h5>
            {active ? <p>{devText.paragraph}</p> : null}
        </li>
    )
}