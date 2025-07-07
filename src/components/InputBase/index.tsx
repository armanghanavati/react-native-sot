import React from 'react';
import { Input, FormControl } from 'native-base';

interface InputBaseProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    isPassword?: boolean;
}

const InputBase: React.FC<InputBaseProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    isPassword = false,
}) => {
    return (
        <FormControl mb="4">
            <FormControl.Label>{label}</FormControl.Label>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                size="lg"
                borderRadius="md"
                type={isPassword ? 'password' : 'text'}
                _focus={{
                    borderColor: 'primary.500',
                    backgroundColor: 'gray.100',
                }}
            />
        </FormControl>
    );
};

export default InputBase;