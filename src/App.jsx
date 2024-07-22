import { useState } from 'react'
import './index.css'
import category from './category';


const categories =["What Went Well", "To Improve", "Action Items"];

function App() {
  const [items, setItems] = useState({well:[], improve:[], action:[]});
  const [layout, setLayout] = useState('horizontal');

  const addItem = (category) =>{
  const newItem = {
    id:Date.now(), 
    text:"", 
    likes:0, 
    dislikes:0};
    setItems(prevItems => ({
            ...prevItems, 
            [category]: [...prevItems[category], newItem]
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
  return (
    <main class="content row">
    <h1>Retro Board</h1>
   
    <div>
      Layout &nbsp;<button class="button button-default">Column</button>
    </div>

    
    <div class="RetroApp row">
     
      <div class="RetroCategory RetroCategory-1">
        <h2>Went Well</h2>
      
        <button
          type="button"
          class="ButtonAdd button button-default"
          aria-label="Add new card"
          title="Add new card"
        >
          +
        </button>

      
        <div class="RetroCard" aria-label="Retro card">
          
          <textarea
            class="textbox"
            placeholder="Enter text here"
            aria-label="Enter text here"
            rows="1"
            value="Here is an example card"
          >
          </textarea>

          <div class="button-group">
            <button
              type="button"
              class="button button-left"
              title="Move left"
            >
              <img
                src="angleLeft.svg"
                alt="Move left"
                width="12"
                height="12"
              />
            </button>
            <button
              type="button"
              class="button button-delete"
              title="Delete"
            >
              <img
                src="timesCircle.svg"
                alt="Delete"
                width="12"
                height="12"
              />
            </button>
            <div>
              <button type="button" class="button button-left" title="Like">
                <img src="thumbsUp.svg" alt="Like" width="12" height="12" />
                5
              </button>
              <button
                type="button"
                class="button button-left"
                title="Dislike"
              >
                <img
                  src="thumbsDown.svg"
                  alt="Dislike"
                  width="12"
                  height="12"
                />
                0
              </button>
              <button
                type="button"
                class="button button-right"
                title="Move right"
              >
                <img
                  src="angleRight.svg"
                  alt="Move right"
                  width="12"
                  height="12"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

   
      <div class="RetroCategory RetroCategory-2">
        <h2>To Improve</h2>
        <button
          type="button"
          class="ButtonAdd button button-default"
          aria-label="Add to new card"
          title="Add to new card"
        >
          +
        </button>
      </div>

      
      <div class="RetroCategory RetroCategory-3">
        <h2>Action Items</h2>
        <button
          type="button"
          class="ButtonAdd button button-default"
          aria-label="Add to new card"
          title="Add to new card"
        >
          +
        </button>
      </div>
    </div>
  </main>

  )

 /* return(
    <div className = {`App${layout}`}>
      <button onClick = {toggleLayout}>Toggle Layout</button>
      {categories.map((category, index) =>(
        <category
        key = {index}
        name = {category}
        items = {items [category.toLowerCase().replace("")]}
        addItem ={() => addItem(category.toLowerCase().replace(""))}
        updateItemText = {updateItemText}
        deleteItem = {deleteItem}
        moveItem = {moveItem}
        />
      ))}
    </div>
  );*/
}

export default App;