import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  // products:[
  //   {
  //     "imageCredit": {
  //       "artist": "Martin Wessely",
  //       "link": "http://www.resplashed.com/photographer/martin_wessely/"
  //     },
  //     "tags": [
  //       "Trees"
  //     ],
  //     "imageUrl": "http://www.resplashed.com/img/400_002e1ecb8bd2.jpg",
  //     "filename": "400_002e1ecb8bd2.jpg",
  //     "imageHash": "2b1d5b5ef4b37b4f5d0dccade1b69987",
  //     "price": 10.99,
  //     "name": "Handcrafted Trees Mug",
  //     "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
  //     "slug": "Handcrafted-Trees-Mug",
  //     "added": 1485723766805,
  //     "manufacturer": "OHara-Group",
  //     "itemType": "mug",
  //     "productImg": "mug-400_002e1ecb8bd2.jpg"
  //   },
  //   {
  //     "imageCredit": {
  //       "artist": "Patrick Fore",
  //       "link": "http://www.resplashed.com/photographer/patrick_fore/"
  //     },
  //     "tags": [
  //       "Beach",
  //       "Ocean",
  //       "Water"
  //     ],
  //     "imageUrl": "http://www.resplashed.com/img/400_00b425ea69e0.jpg",
  //     "filename": "400_00b425ea69e0.jpg",
  //     "imageHash": "9197d084a8309c5cc1c1860063bc4dda",
  //     "price": 19.99,
  //     "name": "Rustic Beach Mug",
  //     "description": "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
  //     "slug": "Rustic-Beach-Mug",
  //     "added": 1481573896833,
  //     "manufacturer": "Sipes-Inc",
  //     "itemType": "mug",
  //     "productImg": "mug-400_00b425ea69e0.jpg"
  //   },
  // ],
  products:[
    {
      id: 1,
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kudyauz8dq1ircashfbg", 
      name: "Puri-bhaji",
      category: "breakfast",
      price: "40",
      description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. " },
  
    {
      id: 2,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l4h50obbhvtdmp2lnrud",
      name: "Dasa",
      category: "evening",
      price: "60",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
       },
    {
      id: 3,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gp7q0zffgrjqyqdcx3wn",
      name: "Tea-snacks",
      category: "breakfast",
      price: "50",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
          },
    {
      id: 4,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uah0oggwiqdyq0q3zilp",
      name: "Veg-thali",
      category: "lunch",
      price: "200",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
       },
    {
      id: 5,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b5ynvmueaquq60rzrbyf",
      name: "Pizza",
      category: "evening",
      price: "120",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
        },
    {
      id: 6,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ime81lssy8ozalrontlq",
       name: "Non-Veg Thali",
      category: "dinner",
      price: "250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . "
      },
    {
      id: 7,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/flfqio0uxpsfsdvaaejb",
      name: "Dessert-combo",
      category: "dinner",
      price: "150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrvme8yjgt6h1l9wzo0k",
      name: "McDonald's",
      category: "lunch",
      price: "200",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
         },
    {
      id: 9,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cqgea0y4rve8l6d70dvn",
      name: "Chole-samaso",
      category: "evening",
      price: "40",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer