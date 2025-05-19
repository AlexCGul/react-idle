"use client";

// @ignore
function ItemButton (props: { onClick: () => void; text: string; value: number; }) 
{
    return (
        <button onClick={() => { props.onClick()}} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            <p>{props.text + " " + props.value}</p>
        </button>
    );
}



 export {ItemButton};