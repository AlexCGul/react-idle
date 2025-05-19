"use client";

// @ignore
function ItemButton (props: { onClick: () => void; text: string; value: number; }) 
{
    return (
        <button onClick={() => { props.onClick()}} className="bg-accent m-5 border-4 border-blue-900 text-white font-bold py-2 px-4 rounded">
            <p>{props.text + " " + props.value}</p>
        </button>
    );
}



 export {ItemButton};