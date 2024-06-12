export default function Button({ children, isActive, ...props }) {
    return (
        <button {...props} className={isActive ? "btn active" : "btn"}>
            {children}
        </button>
    );
}
