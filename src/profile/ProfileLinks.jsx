import React from 'react'

const linksArray = [{
    name: "Twitter Link", link: 'https://mobile.twitter.com/arok3nn'
}, {
    name: "Zuri Team", link: "https://training.zuri.team", id: "btn_zuri"
}, {
    name: "Zuri Books", link: "https://books.zuri.team/", id: "books"
}, {
    name: "Python Books", link: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>", id: "book_python"
}, {
    name: "Background Check for Coders", link: "https://background.zuri.team", id: "pitch"
}, {
    name: "Design Book", link: "https://books.zuri.team/design-rules", id: "book_design"
}]

function ProfileLinks() {
    return (<div>
        {linksArray.map((item) => <a>
            {item.name}
        </a>)}


    </div>

    )
}

export default ProfileLinks