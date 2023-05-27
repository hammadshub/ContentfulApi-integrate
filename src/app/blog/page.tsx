import { error } from 'console'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const getBlogsData = async () => {

    try {

        const blogData = await fetch("https://cdn.contentful.com/spaces/gjvphl1aszuq/entries?access_token=TQ5D9VwDEhuegXUwXAQZooXagURAziOC5iaXX-NHdwA&content_type=blog")

        if (!blogData.ok) {
            console.log("Fail to Load")
            throw new Error("Fail to Load")
        }

        return blogData.json();

    } catch (err) {
        console.log(err)
    }



}


const Blogs = async () => {

    const blogData = await getBlogsData()
    console.log(blogData);
    return (
        <div>
            {blogData.items.map((blog: any) => {

                const blogimg = blogData.includes.Asset.find((img: any) => img.sys.id === blog.fields.image.sys.id)
                // const authorData = blogData.includes.Entry.find((author: any) => author.sys.id === blog.fields.author.sys.id)

                const imgurl = blogimg.fields.file.url
                // const authorName = authorData.fields.name

                return (

                    <div key={blog.sys.id}>

                        <h1>{blog.fields.title}</h1>
                        {/* <h3>{authorName}</h3> */}
                        <p>{documentToReactComponents(blog.fields.body)}</p>
                        <img className='' src={imgurl} />

                    </div>

                )

            }

            )}
        </div>
    )
}


export default Blogs