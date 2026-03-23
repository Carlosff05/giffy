
import register from '../../services/register'
import './styles.css'
import { Formik } from 'formik'

export default function Register() {
    return <>
        <h2>Formulario de registro</h2>
        <Formik 
        initialValues={{
            username:'',
            password:''
        }}
        validate={values => {
            const errors = {}

            if (!values.username) {
                errors.username = 'Required username'
            }
            if (!values.password) {
                errors.password = 'Required password'
            } else if (values.password.length < 3) {
                errors.password = 'Length must be greater than 3'
            }
        }}
        onSubmit={(values, {setFieldError}) => {
            return register(values)
                .catch(() => {
                    setFieldError('username', 'This username is not valid')
                })
        }}>
            {
                ({errors, handleSubmit, handleChange, isSubmitting}) => 
                <form className='form' onSubmit={handleSubmit}>
                    <label>
                        Username:<input name='username' onChange={handleChange} placeholder='Put here the username'/>
                    </label>
                    <label>
                        Password:<input name='password' onChange={handleChange} placeholder='Put here the password'/>
                    </label>
                    <button className='btn' disabled={isSubmitting}>
                        Registrarse
                    </button>
                    <span style={{color: 'red'}}>
                        {errors.username ? <p>{errors.username}</p> : '' }
                        {errors.password ? <p>{errors.password}</p> : '' }
                    </span>
                </form>
            }
        </Formik>
    </> 
}