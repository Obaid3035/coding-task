import React, {ReactNode} from 'react';
import './Button.css';

interface IButtonProps {
    children: ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: Record<string, string>;
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({children, onClick, style = {}, disabled = false}) => {
    return (
        <button style={style} className={'button'} onClick={onClick} disabled={disabled}>{
            children
        }</button>
    );
};

export default Button;
