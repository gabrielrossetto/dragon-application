import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../../redux/actions/authActions'

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
            <div className="col-md-6 col-md-offset-3">
                  <h2>Login</h2>
                  <form name="form" onSubmit={handleSubmit}>
                        <div className={'form-group' + (form.submitted && !form.username ? ' has-error' : '')}>
                              <label htmlFor="username">Username</label>
                              <input type="text" className="form-control" name="username" value={form.username} onChange={event => updateForm('username', event, 'value')} />
                              {form.submitted && !form.username &&
                                    <div className="help-block">Username is required</div>
                              }
                        </div>
                        <div className={'form-group' + (form.submitted && !form.password ? ' has-error' : '')}>
                              <label htmlFor="password">Password</label>
                              <input type="password" className="form-control" name="password" value={form.password} onChange={event => updateForm('password', event, 'value')} />
                              {form.submitted && !form.password &&
                                    <div className="help-block">Password is required</div>
                              }
                        </div>
                        <div className="form-group">
                              <button className="btn btn-primary">Login</button>
                        </div>
                  </form>
            </div>
      );
}

const mapStateToProps = state => ({
      auth: state.auth
})

export default connect(mapStateToProps)(Login)
