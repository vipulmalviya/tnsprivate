

const Tagebutton = ({ tag, isSelected, onSelect }) => {
    return (
        <button
            onClick={() => onSelect(tag)}
            className={`Categorybtns d-flex align-items-center justify-content-center ${isSelected ? 'Active' : ''}`}
        >
            <p>{tag}</p>
        </button>
    );
};

export default Tagebutton
