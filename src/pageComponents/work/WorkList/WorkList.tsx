
"use client"
import { casesData } from "@/constants/works";
import { Flex } from "@radix-ui/themes";
import { WorkListItem } from "../WorkListItem/WorkListItem";
import { InViewWrapper } from "@/hooks/InViewWrapper";

export const WorkList = () => {
    return (
        <Flex direction="column" gap="6">
            {casesData.map((item, i) => (
                <InViewWrapper key={i} delay={0.25}>
                    <WorkListItem item={item} />
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