import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Login.css';

const Register = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('https://reqres.in/api/register', values);
            Swal.fire('Success', 'Registered successfully', 'success');
        } catch (error) {
            Swal.fire('Error', 'Registration failed', 'error');
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <div className="login-container">
                    <div className="login-box">
                    <h2>Register</h2>
                        <Form>
                            <div>
                                <Field type="email" name="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder="Password" />
                                <ErrorMessage name="password" component="div" />
                            </div>
                            <button type="submit" disabled={formik.isSubmitting}>
                                Register
                            </button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    );
};

export default Register;
