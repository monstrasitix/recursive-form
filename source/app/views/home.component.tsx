// Core
import * as React from 'react';
import * as Yup from 'yup';

// Components
import Input from '../components/input.component';
import Field from '../components/field.component';
import Form from '../components/form.component';
import Label from '../components/label.component';
import Button from '../components/button.component';
import Message from '../components/message.component';
import Renderer from '../components/renderer.component';


export interface IProps {};

const Column = ({ children }) => (
    <div children={children} />
);

const FormRenderer = Renderer({
    input: Input,
    field: Field,
    form: Form,
    label: Label,
    button: Button,
    message: Message,
    column: Column,
});


const LIST: [any] = [
    {
        type: 'form',
        attributes: {
            onSubmit: values => console.log(values),
            validationSchema: Yup.object().shape({
                firstname: Yup.string(),
                lastname: Yup.string().required('Lastname is required'),
                password: Yup.string().required('Password is required'),
            }),
            defaultValues: {},
        },
        children: [
            {
                type: 'field',
                attributes: { flex: true },
                children: [
                    {
                        type: 'column',
                        children: [
                            { type: 'label', attributes: { name: 'firstname' }, children: 'First Name' },
                            { type: 'input', attributes: { type: 'text', placeholder: 'John', name: 'firstname' } },
                            { type: 'message', attributes: { name: 'firstname' } },
                        ],
                    },
                    {
                        type: 'column',
                        children: [
                            { type: 'label', attributes: { name: 'lastname' }, children: 'Last Name' },
                            { type: 'input', attributes: { type: 'text', placeholder: 'Doe', name: 'lastname' } },
                            { type: 'message', attributes: { name: 'lastname' } },
                        ],
                    }
                ]
            },
            {
                type: 'field',
                children: [
                    { type: 'label', attributes: { name: 'password' }, children: 'Password' },
                    { type: 'input', attributes: { type: 'password', placeholder: 'Input Field', name: 'password' } },
                    { type: 'message', attributes: { name: 'password' } },
                ]
            },
            {
                type: 'field',
                children: [
                    {
                        type: 'button',
                        attributes: { type: 'submit', block: true },
                        children: 'Login',
                    },
                ]
            },
        ],
    }
];

const Home: React.FC<IProps> = () => (
    <div className="container">
        <FormRenderer list={LIST} />
    </div>
);



export default Home;