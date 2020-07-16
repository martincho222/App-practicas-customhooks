import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




const GifExpertApp = () => {
    // const categories = ;

const [categories, setCategories] = useState(['One Punch Man'])

//  const handleAdd = () => {
//      setCategories([
//          ...categories,
//             "caballeros del zodiaco"
//      ]);
//  };


    return ( 
        <>
            <h2>GifExpertApp</h2>
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
