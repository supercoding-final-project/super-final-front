import React from 'react';

import * as S from "./MentoTransactionHistory.style"
const MentoTransactionHistory = () => {


    let orderlist = [
        {
            "postName": "Blockchain and Cryptocurrency",
            "mentorNickname": "User4Nick",
            "transactionCalendars": [
                "2023-09-04-18",
                "2023-09-01-11"
            ],
            "email": "user4@example.com",
            "totalPrice": 800,
            "createdAt": "2023-09-12T05:20:00Z"
        },
        {
            "postName": "Mobile App Development with Flutter",
            "mentorNickname": "User3Nick",
            "transactionCalendars": [
                "2023-09-02-14",
                "2023-09-03-16",
                "2023-09-02-13"
            ],
            "email": "user3@example.com",
            "totalPrice": 900,
            "createdAt": "2023-09-12T04:20:00Z"
        }
    ]
    return (
        <>
            <S.OrderHistoryContainer>
                <S.orderHistoryHead>
                    <div>포스트 제목</div>
                    <div>멘토닉네임</div>
                    <div>수업진행시간</div>
                    <div>이메일</div>
                    <div>가격</div>
                </S.orderHistoryHead>

                {orderlist.map((data) => {
                    return (
                        <S.DivGrid key={data.orderId}>
                            <div>{data.postName}</div>
                            <div>{data.mentorNickname}</div>
                            <div>{data.transactionCalendars}</div>
                            <div>{data.email}</div>
                            <div>{data.totalPrice}</div>
                        </S.DivGrid>
                    )
                })}

            </S.OrderHistoryContainer>

        </>
    );
};

export default MentoTransactionHistory;