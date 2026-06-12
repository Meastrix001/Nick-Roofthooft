
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
        </Flex>
    );
};