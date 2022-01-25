import { 
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
        Hello, I&apos;m a Software engineer based in Buenos Aires
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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
        My name is Gustavo but everyone call me Gavu. I&apos;m a Software Engineer with +6 years of experience working with Startups, NGOs, and governments. 
        I&apos;m really passionate about usability, UX, performance, and shipping fast but useful features to the users. 
        Since the beginning of my career, I have been working closely with clients and the product team and be responsible for the research, estimation, and management of several projects.
        I also enjoy sound design and create art with code.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Venezuela 🇻🇪
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Moved To Argentina 🇦🇷
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Freelance Frontend Developer
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Software Engineer At {' '} <Link href="https://www.winguweb.org/en" target="_blank">
            Wingu 
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Internship at {' '} <Link href="https://www.engineeringforchange.org/" target="_blank">
            Engineering For Change 
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          First Hired of {' '} <Link href="https://palabra.io/" target="_blank">
            Palabra
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://open.spotify.com/artist/24bDzC2WU7oRMTv9xKmBiU?si=ulKLTUiWRP6sb8OE1mvsrA" target="_blank">
            Music
          </Link>
          , Podcasts, Philosophy and Nature
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/gustavo-valbuena-328a33159/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @gustavo-valbuena
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/gxvu_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @gxvu_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/ValbuenaG" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @ValbuenaG
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  )
}

export default Page