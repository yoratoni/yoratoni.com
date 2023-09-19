import { Fragment, useState } from "react";

import Button from "@/components/base/Button";
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

            <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl pb-9">
                <span className="max-sm:hidden">
                    I&apos;m here to help and answer any question you might have. Any idea or project you want to discuss,
                    I&apos;m open to it!
                    <br />
                    <br />
                </span>
                Feel free to contact me by filling the form below or by sending me an email at&nbsp;
                <a
                    className="font-medium hover:underline"
                    href="https://alien.club/"
                    target="_blank"
                    rel="noreferrer"
                >
                    yoratoni.dev@gmail.com
                </a>.
            </p>

            <div className="relative flex flex-col w-full max-w-md px-8 space-y-4 border-l-2">
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

                <div className="w-full max-w-[200px] mx-auto pt-1">
                    <Button
                        label="Send"
                    />
                </div>
            </div>
        </Section>
    );
}