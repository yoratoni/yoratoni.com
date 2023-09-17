import { useState } from "react";

import Input from "@/components/base/Input";
import Section from "@/components/base/Section";
import TextArea from "@/components/base/TextArea";
import Title from "@/components/base/Title";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Section>
            <Title
                top="An idea?"
                title="GET IN TOUCH"
            />

            <div className="flex flex-col w-full max-w-sm px-8 space-y-6">
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={setName}
                />
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <TextArea
                    placeholder="Message"
                    value={message}
                    onChange={setMessage}
                />
            </div>
        </Section>
    );
}