import React from 'react'
import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react'

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'
  }

  return (
    <Center h="100vh">
      <VStack spacing={8}>
        <Heading>Welcome</Heading>
        <Box p={6} borderRadius="md" boxShadow="lg">
          <Button
            colorScheme="blue"
            onClick={handleGoogleLogin}
            size="lg"
          >
            Sign in with Google
          </Button>
        </Box>
      </VStack>
    </Center>
  )
}

export default Login
