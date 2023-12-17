export const flavour =  [
    "Chocolate",
    "Vanilla",
    "Strawberry",
    "Butterscotch",
    "Pistachio",
    "French Vanilla",
    "Cherry Vanilla",
    "Maple",
    "Black Raspberry",
    "Watermelon",
    "Banana"
];

export const filters = [
    {
        id:"flavour",
        name: "Flavour",
        options: [
            {value:"vanilla" ,label:"Vanilla"},
            {value:"chocolate" ,label:"Chocolate"},
            {value:"strawberry" ,label:"Strawberry"},
            {value:"butterscotch" ,label:"Butterscotch"},
            {value:"pistachio" ,label:"Pistachio"},
            {value:"french_vanilla" ,label:"Frech Vanilla"},
            {value:"cherry_vanilla" ,label:"Cherry Vanilla"},
            {value:"maple" ,label:"Maple"},
            {value:"black_raspberry" ,label:"Black Raspberry"},
            {value:"watermelon" ,label:"Watermelon"},
            {value:"banana" ,label:"Banana"},
        ],
    },

    {
        id: "quantity",
        name: "Quantity",
        options: [
            {value:"1piece" ,label:"1Piece"},
            {value:"1/2_kg" ,label:"1/2 kg"},
            {value:"1_kg" ,label:"1 kg"},
            {value:"2_kg" ,label:"2 kg"},
        ],
    },
    
    {
        id:"price",
        name:"Price",
        options: [
            {value:"10-300" ,label:"$10 To $300"},
            {value:"301-500" ,label:"$301 To $500"},
            {value:"501-1000" ,label:"$501 To $1000"},
            {value:"1001-2000" ,label:"$1001 To $2000"},
        ],
    },

];

export const singleFilter=[
    {
        id: "stock",
        name: "Availability",
        options: [
            {value:"currently_available" ,label:"Currently Available"},
            {value:"currently_unavailable" ,label:"Currently Unvailable"},
        ],
    },    
]
