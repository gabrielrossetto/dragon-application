import React from 'react';
import { Link } from 'react-router-dom'
import { doLogout } from '../../redux/actions/authActions'
import { connect } from 'react-redux'
import { history } from '../../commons/utils';

const Navbar = ({ dispatch }) => {

  const handleLogout = () => {
    dispatch(doLogout())
    history.push('/login');
  }

  return (
    <nav>
      <section>
        <Link to="/">Dragons</Link>
        <div className="header-right">
          <button className="btn" onClick={handleLogout}><i className="fa fa-sign-out"></i></button>
        </div>
      </section>
    </nav>

  )
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps
)(Navbar)