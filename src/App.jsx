import { useState } from 'react'
import './inedx.css'
import category from './category';
import retrospectiveItem from './retrospectiveItem';

const categories =["What Went Well", "To Improve", "Action Items"];

function App() {
  const [items, setItems] = useState({well:[], improve:[], action:[]});
  const [layout, setLayout] = useState('horizontal');

  const addItem = (category) => {
    const newItem = {id:Date.now(), text:"", likes:0, dislikes:0};
    setItems(prevItems => ({
      ...prevItems, [category]: [...prevItems[category], newItem]
    }));
  };

  const updateItemText = (category, id, text) => {
    setItems(prevItems => ({
      ...prevItems,[category]:prevItems [category].map(item => item.id === id ? {...item, text} : item)
    }));
  };

  const deleteItem = (cetgory, id) => {
    setItems(prevItems => ({
      ...prevItems, [category] : prevItems[category].filter(item => item.id !== id)
    }));
  };

  const moveItem = (category, id, direction) => {
    const categoryIndex = categories.indexOf(category);
    const newIndex = categoryIndex + direction;

    if (newIndex < 0 || newIndex >= categories.length)return;

    const newCategory = categories[newIndex].toLowerCase().replace("");
    const item = items[category].find(item => item.id !== id);

    setItems(prevItems => ({
      ...prevItems,[category]: prevItems[category].filter(item => item.id !== id),
      [newCategory] : [...prevItems[newCategory], item]
    }));
  };
  const toggleLayout = () => {
    setLayout(prevLayout => prevLayout === `horizontal`);
  };

  return(
    <div className = {`App${layout}`}>
      <button onClick = {toggleLayout}>Toggle Layout</button>
      {categories.map((category, index) =>(
        <category
        key = {index}
        name = {category}
        items = {items[category.toLowerCase().replace("")]}
        updateItemText = {updateItemText}
        deleteItem = {deleteItem}
        moveItem = {moveItem}
        />
      ))}
    </div>
  );
}

export default App;