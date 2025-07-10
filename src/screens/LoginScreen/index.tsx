import { useState } from "react";
import { Box, VStack, Heading, Center, useToast, Image } from "native-base";
import InputBase from "../../components/InputBase";
import ButtonBase from "../../components/ButtonBase";
import { login } from "../../services/dotNet";
import * as Keychain from "react-native-keychain";

const LoginScreen: React.FC<any> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast: any = useToast();

  const handleLogin = async () => {
    const postData = {
      userName: username,
      password: password,
    };

    try {
      setIsLoading(true);
      const res = await login(postData);
      const { status, data } = res?.data;

      if (status === 0) {
        await Keychain.setGenericPassword("authToken", data?.token, {
          service: "com.yourapp.jwt",
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
        });

        toast.show({
          title: "Login Successful",
          status: "success",
          placement: "bottom",
        });
        setIsAuthenticated(true);
      } else {
        toast.show({
          title: "Invalid Credentials",
          status: "error",
          placement: "bottom",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.show({
        title: "Login Failed",
        description: "An error occurred",
        status: "error",
        placement: "bottom",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center flex={1} bg="white">
      <Box
        safeArea
        p="4"
        py="8"
        w="90%"
        maxW="400"
        bg="white"
        borderRadius="md"
      >
        <Image
          source={require("../../../assets/image/1724181984017.jpg")}
          alt="App Logo"
          size="xl"
          resizeMode="contain"
          alignSelf="center"
          mb="4"
        />

        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
          mb="6"
        ></Heading>

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
          <ButtonBase
            title="Login"
            onPress={handleLogin}
            isLoading={isLoading}
          />
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
