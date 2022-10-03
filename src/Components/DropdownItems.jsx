import MentalHealth from "./Issues/MentalHealth";

export const DropdownItems = [

    {
        id: 1,
        title: "Mental Health",
        cName: "mental-health",
        path:"/mental-health",
        header:"Mental Health", //h1
        headercName: "mental-health-text", //h1 className
        body: <MentalHealth />
         
    },

    {
        id: 2,
        title: "Immigration",
        cName: "immigration",
        path:"/immigration",
        header:"Immigration", //h1
        headercName: "immigration-text", //h1 className
        body: ""
         
    }
]