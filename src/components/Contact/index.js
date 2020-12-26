import React from 'react';
import emailjs from 'emailjs-com';
import 'semantic-ui-css/semantic.min.css'
import './contact.scss';
import './contactRes.scss';
import { Form, Button, Message } from 'semantic-ui-react';
import { useState } from 'react';

const Contact = () => {

    const [ message, setMessage ] = useState('');
    const [ messageIsSuccess, setMessageIsSuccess ] = useState(false);
    const [ messageIsError, setMessageIsError ] = useState(false);
    const [ messageLoading, setMessageLoading ] = useState(false);

    const handdleSubmit = async (e) => {
        e.preventDefault();
        setMessageLoading(true);

        await emailjs.sendForm('gmail', 'portfolio', e.target, 'user_pLxu78uJ7NA6wgVMdS2pT')
        .then((response) => {
            setMessageIsSuccess(true)
            setMessage('Votre message a bien été envoyé');
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((error) => {
            setMessageIsError(true)
            setMessage('Erreur');
            console.log('FAILED...', error);
        });

        setMessageLoading(false);
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-form">
                <h3>Contactez moi :</h3>
                <Form  onSubmit={handdleSubmit} error={messageIsError} success={messageIsSuccess}>
                    <Form.Group >
                        <Form.Input
                        type="text"
                        name="user_name"
                        placeholder="Nom"
                        icon='user'
                        iconPosition='left'
                        disabled={messageLoading}
                        required
                        />
                        <Form.Input
                        width={10}
                        type="email"
                        name="user_email"
                        placeholder="votremail@example.com"
                        icon='at'
                        iconPosition='left'
                        disabled={messageLoading}
                        required
                        />
                    </Form.Group>
                        <Form.TextArea
                        type="text"
                        name="message"
                        placeholder="Écrivez votre message"
                        rows={12}
                        disabled={messageLoading}
                        required
                        />
                        <Message
                        success
                        header="Merci de m'avoir contacté"
                        list={[
                            message,
                        ]}
                        />
                        <Message
                        error
                        header='Une erreur est survenue'
                        list={[
                            message,
                        ]}
                        />
                        <Button
                        type="submit"
                        content="Envoyer"
                        floated="right"
                        color="green"
                        loading={messageLoading}
                        />
                </Form>
            </div>
        </div>
    );
};

export default Contact;