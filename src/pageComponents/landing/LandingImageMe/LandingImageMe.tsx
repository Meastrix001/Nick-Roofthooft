"use client";
import { Box } from "@radix-ui/themes";

export const LandingImageMe = () => {
    return (
        <Box
            className="landing__image-me"
            position="absolute"
            top="0"
            right="0"
        >
            <img src="/static/image.webp" alt="Me" />
        </Box>
    );
};