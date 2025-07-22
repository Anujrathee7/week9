import React,{useState} from "react";
import MyList from "./MyList";
type TItem = {
    id: string,
    text: string,
    clicked: boolean
}

const MyContainer: React.FC = ()=>{

    const [items,setItems] = useState<TItem[]>([
    ])
    const [itemText,setItemText] = useState<string>('')

    const updateList = (id: string) =>{
        const updatedItems: TItem[] = items.map((item)=>(
            item.id === id ? {...item, clicked: !item.clicked} : item
        ))

        setItems([...updatedItems])
    } 

    const addItem = () =>{
        const newItem: TItem = {
            id: String((Math.floor(Math.random()*1000 + 100))),
            text: itemText,
            clicked: false
        }
        setItems([newItem,...items])
    }
    
    const header = 'this is a string header'    
    return(
        <div>
            <MyList header={header} items={items} updateList={updateList}/>

            <textarea value={itemText} onChange={(e)=>{setItemText(e.target.value)}}></textarea>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default MyContainer