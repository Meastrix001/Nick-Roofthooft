
import { PageLang } from "@/models/pageLang.model";
import {
    Container,
} from "@radix-ui/themes";
import { AboutHeader } from "./AboutHeader/AboutHeader";
import { AboutBio } from "./AboutBio/AboutBio";
import { AboutExperience } from "./AboutExperience/AboutExperience";
import { AboutEducation } from "./AboutEducation/AboutEducation";
import { AboutTechstack } from "./AboutTechstack/AboutTechstack";
import { AboutSpecialized } from "./AboutSpecialized/AboutSpecialized";

export default function AboutPage({ lang }: { lang: PageLang }) {

    return (
        <Container px={"4"} mt={"0"} width={{ lg: "100vw" }} className="about-page">
            <AboutHeader lang={lang} />

            <AboutBio lang={lang} />

            <AboutExperience lang={lang} />

            <AboutEducation lang={lang} />

            <AboutTechstack lang={lang} />

            <AboutSpecialized lang={lang} />
        </Container>
    );
}