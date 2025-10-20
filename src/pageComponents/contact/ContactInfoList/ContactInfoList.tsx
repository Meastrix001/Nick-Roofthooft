"use client"
import { contactData } from "@/constants/contact"
import { InViewWrapper } from "@/hooks/InViewWrapper"
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"

export const ContactInfoList = () => {
    return <Flex direction={"column"} gap={"5"}>
        <Heading as="h2" size={{ initial: "8", lg: "9" }}>Contact me</Heading>
        <Card>
            <Flex direction={"column"}>
                {contactData.map((contact, i) => {
                    return <InViewWrapper key={i} delay={(0.25 + i) / 7}>
                        <Flex onClick={() => {
                            if (contact.value) {
                                window.open(contact.value, "_blank")
                            }
                        }} className={contact.value && "cursor"} key={i} align={"center"} gap={"3"} >
                            <Box>{contact.icon}</Box>
                            <Text size={"5"}>{contact.key}</Text>
                        </Flex>


                    </InViewWrapper>
                })}
            </Flex>
        </Card >
    </Flex >
}