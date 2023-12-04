import { send } from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import { useEffect, useRef, useState } from "react";
// import { useRecaptcha } from "react-hook-recaptcha";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import Link from "@/components/base/Link";
import Section from "@/components/base/Section";
import TextArea from "@/components/base/TextArea";
import Title from "@/components/base/Title";
import Socials from "@/components/Socials";
import config from "@/configs/main.config";


export type FieldObj = {
    value: string;
    error: string | null | undefined;
};

export default function Contact() {
    const [name, setName] = useState<FieldObj>({ value: "", error: null });
    const [email, setEmail] = useState<FieldObj>({ value: "", error: null });
    const [message, setMessage] = useState<FieldObj>({ value: "", error: null });

    const [errorState, setErrorState] = useState(true);
    const [response, setResponse] = useState({ value: "", isAnError: false });

    const contactForm = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (name.error === undefined && email.error === undefined && message.error === undefined) {
            setErrorState(false);
        } else {
            setErrorState(true);
        }
    }, [name, email, message]);

    const sendEmail = async () => {
        if (errorState) {
            return;
        }

        setResponse({
            value: "Sending your message..",
            isAnError: false
        });

        // Verify reCAPTCHA token
        // if (token.length === 0) {
        //     setResponse({
        //         value: "Invalid reCAPTCHA. Please try again..",
        //         isAnError: true
        //     });

        //     return;
        // }

        // Form params
        const params = {
            from_name: name.value,
            from_email: `"${email.value}"`,
            to_name: "Yoratoni",
            message: message.value,
            // "g-recaptcha-response": token
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
    };

    // const { recaptchaLoaded, execute, reset } = useRecaptcha({
    //     containerId: config.contact.reCaptcha.containerId,
    //     successCallback: sendEmail,
    //     sitekey: config.contact.reCaptcha.siteKey,
    //     size: "invisible"
    // });

    // const executeCaptcha = () => {
    //     if (errorState) {
    //         return;
    //     }

    //     setResponse({
    //         value: "Sending your message..",
    //         isAnError: false
    //     });

    //     reset();
    //     execute();
    // };

    return (
        <Section>
            <Title
                top="An idea?"
                title="GET IN TOUCH"
                bottom="Let's talk about it!"
            />

            <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl pb-8 max-sm:hidden max-hlg:hidden">
                Feel free to contact me by filling the form below or by sending me an email at&nbsp;

                <Link
                    label="yoratoni.dev@gmail.com"
                    href="mailto:yoratoni.dev@gmail.com"
                />.
            </p>

            <form
                className="relative flex flex-col w-full max-w-md px-8 space-y-5 max-sm:pt-1 max-hmd:pb-7"
                ref={contactForm}
                onSubmit={(e) => {
                    e.preventDefault();
                    sendEmail();
                }}
            >
                <Input
                    label="from_name"
                    placeholder="Full Name"
                    isErrored={name.error}
                    value={name.value}
                    onChange={(value: string) => {
                        if (value.length === 0) {
                            setName({
                                value,
                                error: "Name cannot be empty."
                            });
                            setErrorState(true);
                        } else {
                            setName({
                                value,
                                error: undefined
                            });
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
                            setEmail({ value, error: "Invalid email address." });
                            setErrorState(true);
                        } else {
                            setEmail({ value, error: undefined });
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
                            setMessage({ value, error: "Message cannot be empty." });
                            setErrorState(true);
                        } else {
                            setMessage({ value, error: undefined });
                        }
                    }}
                />

                {response.value.length > 0 && (
                    <p className={`font-medium text-center leading-3 pt-2.5 max-sm:pt-1 max-sm:text-[13px] ${response.isAnError ? "text-red-500" : "text-gray-400"}`}>
                        {response.value}
                    </p>
                )}

                <div className="pt-2 max-sm:pt-1 w-[150px] mx-auto pb-4">
                    <Button
                        label="Send"
                        type="submit"
                        disabled={errorState}
                    />
                </div>

                <div id={config.contact.reCaptcha.containerId} />
            </form>

            <div className="absolute bottom-0 w-full pb-4 text-base leading-8 text-center text-gray-500 max-sm:leading-5 max-sm:text-[13px] max-md:pb-3 max-hmd:pb-3">
                <Socials />
            </div>
        </Section>
    );
}