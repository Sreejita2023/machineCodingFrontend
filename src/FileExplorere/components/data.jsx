import { Children } from "react";

const json=[
    {
        id:1,
        name:"public",
        isFolder:true,
    },
    {
        id:2,
        name:"src",
        isFolder:true,
        children:[
            {
                id:3,
                name:"index.jsx",
                isFolder:false
            },
            {
                id:4,
                name:"index.css",
                isFolder:false
            },
            {
                id:5,
                name:"components",
                isFolder:true,
                children:[
                    {
                        id:6,
                        name:"app.jsx",
                        isFolder:false
                    }
                ]
            }
        ]
    },
    {
        id:7,
        name:"package.json",
        isFolder:false
    }
]
export default json;