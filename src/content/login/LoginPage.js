import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../../redux/actions/authActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

const Login = ({ dispatch, auth }) => {
      useEffect(() => {
            setLoginForm()
      }, [dispatch])

      const [form, setForm] = useState({});

      const setLoginForm = () => {
            setForm({
                  ...form,
                  username: '',
                  password: '',
                  submitted: false
            });
      }

      const updateForm = useCallback((fieldName, event, parameterKey) => {
            setForm({
                  ...form,
                  [fieldName]: event.currentTarget[parameterKey]
            });
      }, [form]);

      const handleSubmit = () => {
            dispatch(doLogin(form.username, form.password));
      }

      return (
            <div className="col-md-6 col-md-offset-3 loginForm">
                  <FontAwesomeIcon icon={faDragon} className="loginLogo" size="7x" />
                  <div class="line"></div>
                  <form name="form" onSubmit={handleSubmit}>
                        <div>
                              <label>Username</label>
                              <input type="text" value={form.username} onChange={event => updateForm('username', event, 'value')} />
                        </div>
                        <div>
                              <label>Password</label>
                              <input type="password" value={form.password} onChange={event => updateForm('password', event, 'value')} />
                        </div>
                        <div>
                              <button className="formSubmit">Login</button>
                        </div>
                  </form>
            </div>
      );
}

const mapStateToProps = state => ({
      auth: state.auth
})

export default connect(mapStateToProps)(Login)
