import React from 'react';
import PostCardItem from 'src/pages/main/PostCardItem';
const Postlist = ({ postList }) => {

    const result = postList.map((data, index) => {
        return (
            <PostCardItem key={index} data={data} />
        )
    })
    return (
        <>
            {result}
        </>
    );
};

export default Postlist;