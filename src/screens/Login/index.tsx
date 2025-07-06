import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Box,
    Text,
    Heading,
    Link,
    VStack,
    HStack,
    useToast,
    Pressable,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import BaseButton from '../../components/BaseButtom';
import BaseInput from '../../components/BaseInput';

const Login = () => {
    const navigation = useNavigation();
    const toast = useToast();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            toast.show({
                description: "Please fill all fields",
                status: "warning",
            });
            return;
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('MainApp');
        }, 1500);
    };

    return (
        <Box flex={1} bg="white" safeAreaTop>
            <VStack space={5} alignItems="center" w="100%" px="4" py="8">
                <Box alignItems="center" w="100%">
                    <Heading size="xl" color="primary.500" mb="2">
                        Login
                    </Heading>
                    <Text fontSize="md" color="muted.500">
                        Sign in to continue
                    </Text>
                </Box>

                <VStack space={4} w="100%">
                    {/* <BaseInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="your@email.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        iconName="email"
                    />

                    <BaseInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Your password"
                        type={showPassword ? "text" : "password"}
                        iconName="lock"
                    /> */}

                    <Link
                        _text={{ fontSize: 'xs', color: 'primary.500' }}
                        alignSelf="flex-end"
                        mt="1"
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        Forgot Password?
                    </Link>

                    <BaseButton
                        mt="4"
                        onPress={handleLogin}
                        isLoading={isLoading}
                        iconName="login"
                    >
                        Sign In
                    </BaseButton>
                </VStack>

                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="muted.500">
                        Don't have an account?{" "}
                    </Text>
                    <Link
                        _text={{ color: "primary.500", fontWeight: "medium", fontSize: "sm" }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Login;