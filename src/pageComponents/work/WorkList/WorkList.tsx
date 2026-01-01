
"use client"
import { Flex } from "@radix-ui/themes";
import { WorkListItem } from "../WorkListItem/WorkListItem";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

export const WorkList = ({ lang }: { lang: PageLang }) => {
    return (
        <Flex direction="column" gap="6">
            {LanguageKeys[lang].workItems.map((item, i) => (
                <InViewWrapper key={i} delay={0.25}>
                    <WorkListItem lang={lang} item={item} />
                </InViewWrapper>
            ))}
            {/* <Flex direction={"column"} gap={"2"}> */}
            {/* <Text color="gray" /size={"3"}>To see my everything I made during university, please visit my legacy website.</Text> */}
            {/* <Box>
                    <Button className="cursor" color="gray" size={"1"} onClick={() => window.open("https://main.dcqjxor194gtz.amplifyapp.com/Work/", "_blank")}>See all older cases</Button>

                </Box> */}
            {/* </Flex> */}
        </Flex>
    );
};