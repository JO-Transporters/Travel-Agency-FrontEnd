import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import MyBooks from './MyBooks';
import LoginAlert from './LoginAlert';
import './MyResrevs.css'



class MyResrevs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: true,
        }
    }

    closeAlert = () => {
        this.setState({
            alert: false,
        })
    }
    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <div className="reserve">
                {this.state.alert && <>  {isAuthenticated ? <MyBooks /> : <LoginAlert setShow = {this.closeAlert} />} </>}
              


            </div>
        )
    }
}

export default withAuth0(MyResrevs)
