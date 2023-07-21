import React, {ReactNode} from 'react';
import './Button.css';

interface IButtonProps {
    children: ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: Record<string, string>;
}

const Button: React.FC<IButtonProps> = ({children, onClick, style = {}}) => {
    return (
        <button style={style} className={'button'} onClick={onClick}>{
            children
        }</button>
    );
};

export default Button;
