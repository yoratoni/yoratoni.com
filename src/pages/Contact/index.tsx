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
                    placeholder="Full Name"
                    value={name}
                    onChange={setName}
                />
                <Input
                    placeholder="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <TextArea
                    placeholder="Message"
                    value={message}
                    maxLength={180}
                    onChange={setMessage}
                />
            </div>

            <div className="absolute bottom-0 w-full pb-4 text-base leading-8 text-center text-gray-500 max-sm:leading-5 max-sm:text-[13px] max-sm:pb-1">
                <p className="font-[500] tracking-widest">&gt; Swipe on mobile &lt;</p>
                <p className="font-[500] tracking-widest">&gt; Scroll on desktop &lt;</p>
                <p className="font-[500] tracking-widest">&gt; yoratoni.dev@gmail.com &lt;</p>
            </div>
        </Section>
    );
}