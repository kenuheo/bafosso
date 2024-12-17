import React, { useEffect, useState } from 'react'
import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

// Sample data array
const sampleUserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  picture: "https://via.placeholder.com/150",
  interests: ["Programming", "Reading", "Travel"],
  joinDate: "2024-01-01"
}

const Profile = () => {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // In a real app, we would fetch user data from the backend
    // For now, we'll use sample data
    setUserData(sampleUserData)
  }, [])

  const handleLogout = () => {
    // Clear user data and redirect to login
    setUserData(null)
    navigate('/login')
  }

  if (!userData) {
    return <Text>Loading...</Text>
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading>Profile</Heading>
        <Box p={6} borderRadius="md" boxShadow="lg">
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl">Name: {userData.name}</Text>
            <Text>Email: {userData.email}</Text>
            <Text>Join Date: {userData.joinDate}</Text>
            <Text>Interests: {userData.interests.join(", ")}</Text>
          </VStack>
        </Box>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </VStack>
    </Container>
  )
}

export default Profile
