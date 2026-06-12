import { techIcons } from "@/constants/shared";
import { Badge, Box, Flex } from "@radix-ui/themes"
import Image from "next/image";

export const LandingTech = () => {
    return <Box width={"100%"} className="landing__tech">
        <Flex gap={"4"} align={"center"} justify={"center"} wrap={"wrap"}>
            {techIcons.map(({ src, name }) => (
                <Badge key={src} size={{ initial: "1", lg: "3" }} style={{ backgroundColor: "gray" }}>
                    {/* width/height 0 + CSS: fix the height, let the natural aspect ratio drive the width */}
                    <Image
                        src={src}
                        alt={name}
                        width={0}
                        height={0}
                        sizes="160px"
                        style={{ height: 36, width: "auto" }}
                    />
                </Badge>
            ))}
        </Flex>
    </Box>
}
