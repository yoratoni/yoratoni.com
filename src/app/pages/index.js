import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link,
    useColorModeValue
} from "@chakra-ui/react";

import { BioSection, BioYear } from "../components/bio";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import CLink from "../components/links";


const Page = () => (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={3}
                mb={6}
                align="center"
            >
                Hello, i&apos;m a full-stack developer based in Japan!
            </Box>

            <Box display={{md: "flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Takuya Matsuyama
                    </Heading>

                    <p>Digital Craftzman ( Artist / Developer / Designer )</p>
                </Box>
            </Box>

            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
            >
                <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/takuya.jpg"
                    alt="Profile Picture"
                />
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>

                <Paragraph>Takuya is a freelance and a full-stack developer based in Osaka with a
                passion for building digital services/stuff he wants. He has a knack
                for all things launching products, from planning and designing all the
                way to solving real-life problems with code. When not online, he loves
                hanging out with his camera. Currently, he is living off of his own
                product called{" "}

                <NextLink href="/works/inkdrop">
                    <Link>Inkdrop</Link>
                </NextLink>
                .
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioSection>
                    <BioYear>1984</BioYear>
                    Born in Osaka (XX), Japan.
                </BioSection>

                <BioSection>
                    <BioYear>2010</BioYear>
                    Completed the Master&apos;s Program in the Graduate School of Information Science
                    at Nara Institute of Science and Technology.
                </BioSection>

                <BioSection>
                    <BioYear>2010</BioYear>
                    Worked at Yahoo! Japan (XXXXXXXXXXX).
                </BioSection>

                <BioSection>
                    <BioYear>2012 to present</BioYear>
                    Works as a Freelance.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ❤
                </Heading>

                <Paragraph>
                    Art, Music, {" "}
                    <CLink href="">
                        Drawing
                    </CLink>
                </Paragraph>
            </Section>
        </Container>
);


export default Page;