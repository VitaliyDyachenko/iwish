import React, { Component } from 'react'


export class Header extends Component {
    render() {
        const location = this.props.location.pathname
        const styles = {
            nav_link_act : "nav-link active",
            nav_link_not_act : "nav-link"
        }
        const endpoint = "http://localhost:8000/"
        return (
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={location == '/' ? styles.nav_link_act : styles.nav_link_not_act}
                    href={endpoint}>Main Page</a>
                </li>
                <li className="nav-item">
                    <a className={location == '/add_user' ? styles.nav_link_act : styles.nav_link_not_act}
                    href={endpoint+"add_user"}>Add a user</a>
                </li>
                <li className="nav-item">
                    <a className={location == '/edit_user' ? styles.nav_link_act : styles.nav_link_not_act}
                    href={endpoint+"edit_user"}>Edit a user</a>
                </li>
                <li className="nav-item">
                    <a className={location == '/delete_user' ? styles.nav_link_act : styles.nav_link_not_act}
                    href={endpoint+"delete_user"}>Delete a user</a>
                </li>
                <li className="nav-item">
                    <a className={location == '/about' ? styles.nav_link_act : styles.nav_link_not_act}
                    href={endpoint+"about"}>About</a>
                </li>
                </ul>
            
        )
    }
}

export default Header
