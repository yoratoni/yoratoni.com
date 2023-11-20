import { send } from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import { useCallback, useRef, useState } from "react";
import Reaptcha from "reaptcha";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import Section from "@/components/base/Section";
import TextArea from "@/components/base/TextArea";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export default function Contact() {
    const [token, setToken] = useState<string>("");

    const [name, setName] = useState({ value: "", isErrored: "" });
    const [email, setEmail] = useState({ value: "", isErrored: "" });
    const [message, setMessage] = useState({ value: "", isErrored: "" });
    const [response, setResponse] = useState({ value: "", isAnError: false });

    const contactForm = useRef<HTMLFormElement>(null);
    const recaptchaRef = useRef<Reaptcha>(null);

    const sendEmail = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
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

        // Verify reCAPTCHA
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
            setName({ value: "", isErrored: "" });
            setEmail({ value: "", isErrored: "" });
            setMessage({ value: "", isErrored: "" });
            setResponse({
                value: "Your message was sent successfully!",
                isAnError: false
            });
        }

        // Reset reCAPTCHA
        setToken("");
        recaptchaRef.current?.reset();
    }, [name, email, message]);

    return (
        <Section>
            <Title
                top="An idea?"
                title="GET IN TOUCH"
                bottom="Let's talk about it!"
            />

            <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl pb-8 max-sm:pb-5">
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
                className="relative flex flex-col w-full max-w-md px-8 space-y-5 max-sm:space-y-2"
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

                <div>
                    <p className={`font-medium text-center leading-[16px] pb-1 max-sm:text-[13px] ${response.isAnError ? "text-red-500" : "text-gray-400"}`}>
                        {response.value}
                    </p>
                </div>

                <div className="w-full max-w-[200px] mx-auto sm:pt-1 max-sm:pb-16">
                    <Button
                        type="submit"
                        label="Send"
                    />
                </div>

                <Reaptcha
                    id={`recaptcha-${config.contact.captchaKey}`}
                    ref={recaptchaRef}
                    sitekey={config.contact.captchaKey}
                    onVerify={(token) => console.log(token)}
                    onExpire={() => {
                        setToken("");
                        recaptchaRef.current?.reset();
                    }}
                    size="invisible"
                />
            </form>

            <div className="absolute bottom-0 w-full pb-4 text-base leading-8 text-center text-gray-500 max-sm:leading-5 max-sm:text-[13px] max-sm:pb-3">
                <p className="font-[500] tracking-widest">&gt; This site is protected by reCAPTCHA &lt;</p>
                <p className="font-[500] tracking-widest">
                    &gt; and the Google&nbsp;
                    <a
                        className="font-semibold hover:underline"
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy Policy
                    </a>
                    &nbsp;&lt;
                </p>
                <p className="font-[500] tracking-widest">
                    &gt; and&nbsp;
                    <a
                        className="font-semibold hover:underline"
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms of Service
                    </a>
                    &nbsp;apply. &lt;
                </p>
            </div>
        </Section>
    );
}