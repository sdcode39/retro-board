import React from "react";
import retrospectiveItem from "./retrospectiveItem.jsx";

const category = ({name, items, addItem, updateItemText, deleteItem, moveItem }) => {
    const category = name.toLowerCase().replace('');

    return (
        <div className = "category">
            <h2>{name}</h2>
            <button onClick={addItem}>Add Item</button>
            {items.map(item => (
                <retrospectiveItem
                key ={item.id}
                item ={item}
                category ={category}
                updateItemText ={updateItemText}
                deleteItem ={deleteItem}
                moveItem ={moveItem}
                />
            ))}
            
        </div>
    );
};

export default category;