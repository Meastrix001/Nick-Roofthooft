"use client";
import { WorkItem } from "@/constants/works";
import { AspectRatio, Box, Card, Em, Flex, Grid, Heading, Text } from "@radix-ui/themes";

export const WorkListItem = ({ item }: { item: WorkItem }) => {
    return (
        <Card>
            <Box p={"3"}>
                <Flex direction={"column"} gap={"6"}>
                    <Flex direction={"column"} gap={"3"}>
                        <Heading onClick={() => window.open(item.link, "_blank")} className="cursor" as="h2" size={{ initial: "8", lg: "9" }}>{item.name}</Heading>
                        <Text color="gray"><Em>Date & Reason:  {item.date}</Em></Text>
                    </Flex>

                    <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: "2", lg: "5" }}>

                        <Flex align={"center"} style={{ backgroundColor: "white" }} >
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    src={item.logo}
                                    alt=""
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </AspectRatio>
                        </Flex>

                        <Flex direction={"column"} gap={"2"}>
                            {item?.descs?.map((desc: string, i: number) => (
                                <Text key={i + i} size={{ initial: "3", lg: "4" }}>{desc}</Text>

                            ))}
                        </Flex>
                    </Grid>
                    <Flex direction={"column"}>
                        <Heading as="h3" color="gray">Tech used</Heading>
                        <Text size={"5"}>{item.tags.join(", ")}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Card>
    );
};
