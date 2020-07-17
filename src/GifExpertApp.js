import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




const GifExpertApp = ({ defaultCategories = [] }) => {
    // const categories = ;

// const [categories, setCategories] = useState(['One Punch Man'])
const [categories, setCategories] = useState(defaultCategories)

//  const handleAdd = () => {
//      setCategories([
//          ...categories,
//             "caballeros del zodiaco"
//      ]);
//  };


    return ( 
        <>
            <h2>Gif Search App</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
            
        </>
     );
}
 
export default GifExpertApp;
