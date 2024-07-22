import React from "react";
import category from "./category";


const retrospectiveItem = ({ item, Category, updateItemText, deleteItem, moveItem }) => {
    constHandleTextChange = (e) => {
        updateItemText(Category, item.id, e.target.value);
    };

    return (
        <div className="retrospective-item">
            <textarea value ={item.text} onChange ={handleTextChange}/>
            <button onClick ={() => moveItem(category, item.id, -1)}>Left</button>
            <button onClick ={() => moveItem(category, item.id, 1)}>Right</button>
            <button onClick ={() => deleteItem(category, item.id)}>Delete</button>
            <div>
                <button onClick ={() => updateItemText(category, item.id, 
                {...item, likes:item.likes + 1})}>Like {item.likes}</button>
                <button onClick ={() => updateItemText(category, item.id, 
                {...item, dislikes:item.dislikes =1 })}>Dislike {item.dislikes}</button>
            </div>
        </div>
    );
};

export default retrospectiveItem;