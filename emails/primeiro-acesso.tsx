import { Button, Font, Text, Heading, Html, Section, Container } from "@react-email/components";
import * as React from "react";

export default function Email({ name, link }) {
    return (
        <Html lang="pt">
            <Container>

                <Section style={{ background: "#004385" }}>
                    <Font
                        fontFamily="Roboto"
                        fallbackFontFamily="Verdana"
                        webFont={{
                            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                            format: "woff2",
                        }}
                        fontWeight={400}
                        fontStyle="normal"
                    />
                    <Heading style={{ color: "#fefefe", textAlign: 'center' }}>
                        Bem vindo a Jamiroquai
                    </Heading>
                </Section>
                <Section >
                    <Text >
                        {name} seja bem vindo a nossa plataforma , estamos muito felizes com a sua presença.
                    </Text>
                    <Text style={{ fontSize: '18px' }}>
                        Como esse é o seu primeiro acesso estamos enviando o seu link de login via e-mail. Ao clicar no botão abaixo você será redirecionado ao site e terá acesso as suas aulas.
                    </Text>
                </Section>
                <Section style={{ textAlign: "center" }}>

                    <Button
                        href={link}
                        style={{ background: "#F06543", color: "#fff", padding: "15px 30px", borderRadius: 10, margin: '40px auto' }}
                    >
                        Entrar no site
                    </Button>
                </Section>
            </Container>
        </Html>
    );
}