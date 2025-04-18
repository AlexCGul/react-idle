function ItemButton (props) 
{
    return (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            <p>{props.text}</p>
        </button>
    );
}

export default ItemButton;