import React from 'react';
import { Button } from 'native-base';

interface ButtonBaseProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    variant?: 'solid' | 'outline' | 'ghost' | 'link';
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
    title,
    onPress,
    isLoading = false,
    variant = 'solid',
}) => {
    return (
        <Button
            onPress={onPress}
            isLoading={isLoading}
            variant={variant}
            size="lg"
            borderRadius="md"
            _text={{
                fontSize: 'md',
                fontWeight: 'bold',
            }}
            _pressed={{
                opacity: 0.8,
            }}
        >
            {title}
        </Button>
    );
};

export default ButtonBase;