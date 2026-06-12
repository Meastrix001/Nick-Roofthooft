import { WorkItem } from "@/constants/works";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { AspectRatio, Box, Card, Em, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const WorkListItem = ({ lang, item }: { lang: PageLang, item: WorkItem }) => {
    return (
        <Card>
            <Box p={"3"}>
                <Flex direction={"column"} gap={"6"}>
                    <Flex direction={"column"} gap={"3"}>
                        <Heading color="gold" as="h2" size={{ initial: "8", lg: "9" }}>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor"
                                    style={{ color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                                >
                                    {item.name} <ExternalLinkIcon color="gray" />
                                </a>
                            ) : (
                                item.name
                            )}
                        </Heading>
                        <Text color="gray"><Em>{LanguageKeys[lang].work.labels.dateReason}  {item.date}</Em></Text>
                    </Flex>

                    <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: "2", lg: "5" }}>
                        <Flex align={"center"} style={{ backgroundColor: item.bg }}>
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={item.logo}
                                    alt={`${item.name} preview`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    style={{ objectFit: "contain" }}
                                />
                            </AspectRatio>
                        </Flex>

                        <Flex direction={"column"} gap={"2"}>
                            {item?.descs?.map((desc: string, i: number) => (
                                <Text key={i} size={{ initial: "3", lg: "4" }}>{desc}</Text>
                            ))}
                        </Flex>
                    </Grid>
                    <Flex direction={"column"}>
                        <Heading as="h3" color="gray">{LanguageKeys[lang].work.labels.techUsed}</Heading>
                        <Text size={"5"}>{item.tags.join(", ")}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Card>
    );
};
