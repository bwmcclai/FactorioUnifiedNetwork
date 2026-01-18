import React from 'react';

interface FactorioPanelProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'raised' | 'sunken';
    innerWell?: boolean;
}

export const FactorioPanel: React.FC<FactorioPanelProps> = ({
    children,
    className = '',
    variant = 'raised',
    innerWell = false
}) => {
    const borderClasses = variant === 'raised'
        ? 'border-t-bevel-light border-l-bevel-light border-b-bevel-dark border-r-bevel-dark'
        : 'border-t-bevel-dark border-l-bevel-dark border-b-bevel-light border-r-bevel-light';

    return (
        <div className={`bg-panel-grey border-2 ${borderClasses} p-4 ${className}`}>
            {innerWell ? (
                <div className="bg-inset-grey shadow-sunken p-4">
                    {children}
                </div>
            ) : (
                children
            )}
        </div>
    );
};
