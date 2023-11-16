import { sendForm } from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import { useRef, useState } from "react";

import CaptchaButton from "@/components/base/Button/CaptchaButton";
import Input from "@/components/base/Input";
import Section from "@/components/base/Section";
import TextArea from "@/components/base/TextArea";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export default function Contact() {
    const [name, setName] = useState({ value: "", isErrored: "" });
    const [email, setEmail] = useState({ value: "", isErrored: "" });
    const [message, setMessage] = useState({ value: "", isErrored: "" });

    const contactForm = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let areAllFieldsValid = true;

        // Sanity check
        if (name.value.length === 0) {
            setName({ ...name, isErrored: "Name is required." });
            areAllFieldsValid = false;
        }

        if (email.value.length === 0) {
            setEmail({ ...email, isErrored: "E-mail is required." });
            areAllFieldsValid = false;
        }

        if (message.value.length === 0) {
            setMessage({ ...message, isErrored: "Message is required." });
            areAllFieldsValid = false;
        }

        // Verify email
        if (email.value.length > 0 && !EmailValidator.validate(email.value)) {
            setEmail({ ...email, isErrored: "Invalid e-mail." });
            areAllFieldsValid = false;
        }

        if (!areAllFieldsValid) return;

        const res = await sendForm(
            config.contact.emailJs.serviceId,
            config.contact.emailJs.templateId,
            contactForm.current as HTMLFormElement,
            config.contact.emailJs.publicKey
        );

        if (res.status === 200) {
            setName({ value: "", isErrored: "" });
            setEmail({ value: "", isErrored: "" });
            setMessage({ value: "", isErrored: "" });
        }
    };

    return (
        <Section>
            <Title
                top="An idea?"
                title="GET IN TOUCH"
                bottom="Let's talk about it!"
            />

            <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl pb-12 max-sm:pb-5">
                <span className="max-sm:hidden">
                    I&apos;m here to help and answer any question you might have. Any idea or project you want to discuss,
                    I&apos;m open to it!
                    <br />
                    <br />

                    Feel free to contact me by filling the form below or by sending me an email at&nbsp;
                </span>
                <span className="sm:hidden">
                    You can also send me an email at&nbsp;
                </span>
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
                className="relative flex flex-col w-full max-w-md px-8 space-y-5 max-sm:space-y-3"
                ref={contactForm}
                onSubmit={sendEmail}
                noValidate
            >
                <Input
                    label="from_name"
                    placeholder="Full Name"
                    isErrored={name.isErrored}
                    value={name.value}
                    onFocus={() => {
                        setName({
                            ...name,
                            isErrored: ""
                        });
                    }}
                    onChange={(value: string) => {
                        setName({
                            ...name,
                            value
                        });
                    }}
                />
                <Input
                    label="from_email"
                    placeholder="E-mail"
                    isErrored={email.isErrored}
                    value={email.value}
                    onFocus={() => {
                        setEmail({
                            ...email,
                            isErrored: ""
                        });
                    }}
                    onChange={(value: string) => {
                        setEmail({
                            ...email,
                            value
                        });
                    }}
                    type="email"
                />
                <TextArea
                    label="message"
                    placeholder="Message"
                    isErrored={message.isErrored}
                    value={message.value}
                    minRows={3}
                    maxRows={3}
                    onFocus={() => {
                        setMessage({
                            ...message,
                            isErrored: ""
                        });
                    }}
                    onChange={(value: string) => {
                        setMessage({
                            ...message,
                            value
                        });
                    }}
                />

                <div className="w-full max-w-[200px] mx-auto pt-3 sm:pt-5">
                    <CaptchaButton
                        type="submit"
                        label="Send"
                    />
                </div>
            </form>
        </Section>
    );
}