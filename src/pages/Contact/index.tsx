import { sendForm } from "@emailjs/browser";
import { useRef, useState } from "react";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import Section from "@/components/base/Section";
import TextArea from "@/components/base/TextArea";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactForm = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await sendForm(
            config.contact.emailJs.serviceId,
            config.contact.emailJs.templateId,
            contactForm.current as HTMLFormElement,
            config.contact.emailJs.publicKey
        );

        if (res.status === 200) {
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <Section>
            <Title
                top="An idea?"
                title="GET IN TOUCH"
                bottom="Let's talk about it!"
            />

            <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl pb-12 max-sm:pb-7">
                <span className="max-sm:hidden">
                    I&apos;m here to help and answer any question you might have. Any idea or project you want to discuss,
                    I&apos;m open to it!
                    <br />
                    <br />
                </span>
                Feel free to contact me by filling the form below or by sending me an email at&nbsp;
                <a
                    className="font-medium hover:underline"
                    href="mailto:yoratoni.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    yoratoni.dev@gmail.com
                </a>.
            </p>

            <form
                className="relative flex flex-col w-full max-w-md px-8 space-y-5 max-sm:space-y-4"
                ref={contactForm}
                onSubmit={sendEmail}
            >
                <Input
                    name="from_name"
                    placeholder="Full Name"
                    value={name}
                    onChange={setName}
                />
                <Input
                    name="from_email"
                    placeholder="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <TextArea
                    name="message"
                    placeholder="Message"
                    value={message}
                    maxLength={10}
                    onChange={setMessage}
                />

                <div className="w-full max-w-[200px] mx-auto pt-5 max-sm:pt-4">
                    <Button
                        type="submit"
                        label="Send"
                    />
                </div>
            </form>
        </Section>
    );
}