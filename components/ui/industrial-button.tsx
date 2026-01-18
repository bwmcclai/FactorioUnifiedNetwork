import React from 'react';

interface IndustrialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'danger' | 'success';
}

export const IndustrialButton: React.FC<IndustrialButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const variantClasses = {
        primary: 'bg-gradient-to-b from-[#e08e0b] to-[#c27a06] border-t-[#ffbd4a] border-b-[#855200] hover:from-[#f0a01b] hover:to-[#d28a16]',
        danger: 'bg-gradient-to-b from-[#ff4040] to-[#e03030] border-t-[#ff7070] border-b-[#a02020] hover:from-[#ff5050] hover:to-[#f04040]',
        success: 'bg-gradient-to-b from-[#6dcc73] to-[#5dbb63] border-t-[#8ddd93] border-b-[#3d8b43] hover:from-[#7ddc83] hover:to-[#6dcb73]',
    };

    return (
        <button
            className={`
        ${variantClasses[variant]}
        border-2 border-l-[3px] border-r-[3px]
        px-6 py-3
        font-header font-bold text-yellow-beige uppercase
        shadow-button-orange
        active:shadow-button-pressed active:translate-y-[2px]
        transition-all duration-75
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
