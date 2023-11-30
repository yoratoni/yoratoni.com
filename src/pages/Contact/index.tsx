import { send } from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import { useCallback, useEffect, useRef, useState } from "react";

import CaptchaButton from "@/components/base/Button/CaptchaButton";
import Input from "@/components/base/Input";
import Link from "@/components/base/Link";
import Section from "@/components/base/Section";
import TextArea from "@/components/base/TextArea";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export type FieldObj = {
    value: string;
    error: string | null | undefined;
};

export default function Contact() {
    const [name, setName] = useState<FieldObj>({ value: "", error: null });
    const [email, setEmail] = useState<FieldObj>({ value: "", error: null });
    const [message, setMessage] = useState<FieldObj>({ value: "", error: null });

    const [errorState, setErrorState] = useState(false);
    const [response, setResponse] = useState({ value: "", isAnError: false });

    const contactForm = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (name.error === undefined && email.error === undefined && message.error === undefined) {
            setErrorState(false);
        } else {
            setErrorState(true);
        }
    }, [name, email, message]);

    const sendEmail = useCallback(async (token: string) => {
        // Verify reCAPTCHA token
        if (token.length === 0) {
            setResponse({
                value: "Invalid reCAPTCHA. Please try again..",
                isAnError: true
            });

            return;
        }

        // Form params
        const params = {
            from_name: name.value,
            from_email: `"${email.value}"`,
            to_name: "Yoratoni",
            message: message.value,
            "g-recaptcha-response": token
        };

        const res = await send(
            config.contact.emailJs.serviceId,
            config.contact.emailJs.templateId,
            params,
            config.contact.emailJs.publicKey
        );

        if (res.status === 200) {
            setResponse({
                value: "Your message was sent successfully!",
                isAnError: false
            });

            // Reset form
            setName({ value: "", error: null });
            setEmail({ value: "", error: null });
            setMessage({ value: "", error: null });
            setErrorState(false);
        } else {
            setResponse({
                value: "An error occurred while sending your message. Please try again..",
                isAnError: true
            });
        }
    }, [name, email, message]);

    return (
        <Section>
            <Title
                top="An idea?"
                title="GET IN TOUCH"
                bottom="Let's talk about it!"
            />

            <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl pb-8 max-sm:hidden">
                I&apos;m here to help and answer any question you might have. Any idea or project you want to discuss,
                I&apos;m open to it!
                <br />
                <br />

                Feel free to contact me by filling the form below or by sending me an email at&nbsp;

                <Link
                    label="yoratoni.dev@gmail.com"
                    href="mailto:yoratoni.dev@gmail.com"
                />.
            </p>

            <form
                className="relative flex flex-col w-full max-w-md px-8 space-y-5 max-sm:space-y-3"
                ref={contactForm}
                onSubmit={(e) => e.preventDefault()}
                noValidate
            >
                <Input
                    label="from_name"
                    placeholder="Full Name"
                    isErrored={name.error}
                    value={name.value}
                    
                    onChange={(value: string) => {
                        if (value.length === 0) {
                            setName({ ...name, value, error: "Name cannot be empty." });
                            setErrorState(true);
                        } else {
                            setName({ ...name, value, error: undefined });
                        }
                    }}
                />
                <Input
                    label="from_email"
                    placeholder="E-mail"
                    isErrored={email.error}
                    value={email.value}
                    onChange={(value: string) => {
                        if (!EmailValidator.validate(value)) {
                            setEmail({ ...email, value, error: "Invalid email address." });
                            setErrorState(true);
                        } else {
                            setEmail({ ...email, value, error: undefined });
                        }
                    }}
                    type="email"
                />
                <TextArea
                    label="message"
                    placeholder="Message"
                    isErrored={message.error}
                    value={message.value}
                    minRows={3}
                    maxRows={3}
                    onChange={(value: string) => {
                        if (value.length === 0) {
                            setMessage({ ...message, value, error: "Message cannot be empty." });
                            setErrorState(true);
                        } else {
                            setMessage({ ...message, value, error: undefined });
                        }
                    }}
                />

                {response.value.length > 0 && (
                    <p className={`font-medium text-center leading-3 pt-2.5 max-sm:pt-1 max-sm:text-[13px] ${response.isAnError ? "text-red-500" : "text-gray-400"}`}>
                        {response.value}
                    </p>
                )}

                <div className="pt-2 max-sm:pt-1 max-sm:pb-16 w-[150px] mx-auto">
                    <CaptchaButton
                        label="Send"
                        disabled={errorState}
                        onClick={(token: string) => {
                            sendEmail(token);
                        }}
                    />
                </div>
            </form>

            <div className="absolute bottom-0 w-full pb-4 text-base leading-8 text-center text-gray-500 max-sm:leading-5 max-sm:text-[13px] max-sm:pb-3">
                <p className="font-[500] tracking-widest">&gt; This site is protected by reCAPTCHA &lt;</p>
                <p className="font-[500] tracking-widest">
                    &gt; and the Google&nbsp;
                    <Link
                        label="Privacy Policy"
                        href="https://policies.google.com/privacy"
                        fontWeight="semibold"
                    />
                    &nbsp;&lt;
                </p>
                <p className="font-[500] tracking-widest">
                    &gt; and&nbsp;
                    <Link
                        label="Terms of Service"
                        href="https://policies.google.com/terms"
                        fontWeight="semibold"
                    />
                    &nbsp;apply. &lt;
                </p>
            </div>
        </Section>
    );
}