"use client"

function Plant (props: {className?: string})  // props: {className?: string} = {}  // className = "bg-amber-950"
{

    const style = "h-25 w-25 bg-accent m-4 " + props.className; // "h-25 w-25 bg-amber-400 m-4 " + props.className;
    return (

        <div className={style} ></div>
    )
}

export default Plant;