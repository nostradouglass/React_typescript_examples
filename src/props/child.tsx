

interface ChildProps {
    color: string;
    onClick: () => void;
    children: string;
};


export const Child = ({ color, onClick, children }: ChildProps) => {
    return <div>
        Color: {color}
        <button onClick={onClick}>Click Me</button>
        {children}
    </div>
}


export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        color: {color}
        <button onClick={onClick}>Click Me</button>
        {children}
        </div>
}