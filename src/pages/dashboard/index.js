import React from 'react'
import { Row, Col, Button } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'

import UserCard from '../../components/UserCard.js'

const Dashboard = () => {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        axios
            .get(`http://localhost:3000/users/all-users`)
            .then((response) => setUsers(response.data))
    }, [])

    const Users = () => {
        return users.map((x, index) => {
            return (
                <Col key={index} span={6}>
                    <UserCard user={x} />
                </Col>
            )
        })
    }

    return (
        <div>
        <Row className="row-mb">
            <Col><Link to="/new-user"><Button>New User</Button></Link></Col>
        </Row>
            <Row gutter={[12, 12]} className="row-mb">
                <Users />
            </Row>
        </div>
    )
}

export default Dashboard
