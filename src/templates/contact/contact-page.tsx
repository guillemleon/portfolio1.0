import * as React from "react"
import Layout from "../../components/layout/layout";
import * as styles from './contact-page.module.scss';
import {graphql} from "gatsby";
import {ContactQuery} from "../../../graphql-types";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useState} from "react";

type RenderProps = {
    data: ContactQuery,
    pageContext
}

const ContactPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    const [emailSended, setEmailSended] = useState(false);
    const [apiCallLoading, setApiCallLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data)=> {
        setApiCallLoading(true);
        await axios.post('http://localhost:3000/api/contact', data, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setEmailSended(true)
            console.log(emailSended)
        }).catch(err => {
            console.log(`Error: ${err}`)
        }).finally(() => {
            setApiCallLoading(false)
        })
    };

    return (
        <Layout
            header={data.datoCmsHeader}
            footer={data.datoCmsFooter}
            lang={{
                defaultLocale: pageContext.defaultLocale,
                locale: pageContext.locale
            }}
        >
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>CONTACT</h1>
                    </div>
                    {!emailSended ? (
                        <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.left}>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        {...register("name", {required: true})}
                                        placeholder={data.datoCmsContactPage.namePlaceholder}
                                    />
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        {...register("subject", {required: true})}
                                        placeholder={data.datoCmsContactPage.subjectPlaceholder}
                                    />
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="tel"
                                        {...register("phone", {required: true})}
                                        placeholder={data.datoCmsContactPage.phonePlaceholder}
                                    />
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        {...register("email", {required: true})}
                                        placeholder={data.datoCmsContactPage.emailPlaceholder}
                                    />
                                </div>
                            </div>
                            <div className={styles.right}>
                                <textarea
                                    className={styles.textarea}
                                    {...register("message", {required: true})}
                                    placeholder={data.datoCmsContactPage.messagePlaceholder}
                                />
                                {apiCallLoading ? (
                                    <div className={styles.submit}>
                                        <div className={styles.spinner} />
                                    </div>
                                ) : (
                                    <input className={styles.submit} type="submit" value={"SEND"} />
                                )}
                            </div>
                        </form>
                    ) : (
                        <div className={styles.successMessageContainer}>
                            The EMAIL WAS SENDED SUCCESFULLY
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    )


}

export const fragment = graphql`
    fragment ContactPageFields on DatoCmsContactPage {
        namePlaceholder
        subjectPlaceholder
        phonePlaceholder
        emailPlaceholder
        messagePlaceholder
        submitButtonTitle
    }
`

export const pageQuery = graphql`
    query Contact($locale: String!) {
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
        datoCmsFooter(locale: { eq: $locale }) {
            ...FooterFields
        }
        datoCmsContactPage(locale: { eq: $locale }) {
            ...ContactPageFields
        }
    }
`


export default ContactPage
