import React from 'react'
import { Card } from 'antd'
const { Meta } = Card

const UserCard = (props) => {
    let user = props.user
    return (
        <Card
            hoverable
            cover={
                <img
                    style={{maxHeight: 140}}
                    alt="example"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                />
            }
        >
            <Meta
                style={{textAlign: 'center'}}
                title={user.username}
                description={`${user.firstName} ${user.lastName}`}
            />
        </Card>
    )
}

export default UserCard
