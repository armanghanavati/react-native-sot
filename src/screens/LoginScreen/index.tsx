import React, { useState } from 'react';
import { Box, VStack, Heading, Center, useToast } from 'native-base';
import InputBase from '../../components/InputBase';
import ButtonBase from '../../components/ButtonBase';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast: any = useToast();

    const handleLogin = () => {
        setIsLoading(true);

        // شبیه‌سازی یک درخواست لاگین
        setTimeout(() => {
            setIsLoading(false);

            if (username === 'test' && password === '1234') {
                toast.show({
                    title: 'Login Successful',
                    status: 'success',
                    placement: 'top',
                });
            } else {
                toast.show({
                    title: 'Invalid Credentials',
                    status: 'error',
                    placement: 'top',
                });
            }
        }, 2000);
    };

    return (
        <Center flex={1} bg="white">
            <Box safeArea p="4" py="8" w="90%" maxW="400" bg="white" shadow="2" borderRadius="md">
                <Heading size="lg" fontWeight="600" color="coolGray.800" textAlign="center" mb="6">
                    Welcome Back
                </Heading>

                <VStack space={4}>
                    <InputBase
                        label="Username"
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <InputBase
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        isPassword
                    />
                    <ButtonBase title="Login" onPress={handleLogin} isLoading={isLoading} />
                </VStack>
            </Box>
        </Center>
    );
}