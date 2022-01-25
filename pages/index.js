import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
        Hello, I&apos;m a Sofware engineer based in Buenos Aires
      </Box>

      <Box display={{md: 'flex'}} >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gustavo Valbuena
          </Heading>
          <p>Software Engineer / Sound Explorer / Digital Artist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/gavu.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page