import React from 'react';
import emailjs from 'emailjs-com';
import 'semantic-ui-css/semantic.min.css'
import './contact.scss';
import { Form, Button, Message } from 'semantic-ui-react';
import { useState } from 'react';

const Contact = () => {

    const [ message, setMessage ] = useState('');
    const [ messageIsSuccess, setMessageIsSuccess ] = useState(false);
    const [ messageIsError, setMessageIsError ] = useState(false);

    const handdleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio', e.target, 'user_pLxu78uJ7NA6wgVMdS2pT')
        .then((response) => {
            setMessageIsSuccess(true)
            setMessage('Votre message a bien été envoyé');
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((error) => {
            setMessageIsError(true)
            setMessage('Error');
            console.log('FAILED...', error);
        });
    };

    return (
        <div className="contact">
            <div className="contact-form">
                <h3>Si vous souhaitez me contacter </h3>
                <Form fluid onSubmit={handdleSubmit} error={messageIsError} success={messageIsSuccess}>
                    <Form.Group >
                        <Form.Input
                        type="text"
                        name="user_name"
                        placeholder="Nom"
                        //value={"Nom prenom"}
                        />
                        <Form.Input
                        width={10}
                        type="email"
                        name="user_email"
                        placeholder="votremail@example.com"
                        //value={"gezfgg@gmail.com"}
                        />
                    </Form.Group>
                        <Form.TextArea
                        type="text"
                        name="message"
                        placeholder="Écrivez votre message"
                        //value={"kzren,gepior ner,gpienrpgierpgn erpgn r"}
                        rows={10}
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
                        />
                </Form>
            </div>
        </div>
    );
};

export default Contact;