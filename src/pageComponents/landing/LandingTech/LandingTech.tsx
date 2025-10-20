import { techIcons } from "@/constants/shared";
import { Badge, Box, Flex } from "@radix-ui/themes"

export const LandingTech = () => {
    console.log(techIcons);

    return <Box width={"100%"} className="landing__tech">
        <Flex gap={"4"} align={"center"} justify={"center"}>
            {techIcons.map((img) => {
                return <Badge size={"3"} style={{ backgroundColor: "gray", filter: "grayscale(100%)" }} key=""> <img height={36} key={img} src={img} /></Badge>
            })}
        </Flex>
    </Box>
}