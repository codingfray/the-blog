import { useState } from "react";

const Home = () => {


    const [blogs, setBlogs] = useState([
            {title: 'A new website', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime repudiandae facere, assumenda nihil dignissimos aperiam et maiores quis facilis minus explicabo cupiditate voluptate blanditiis alias fugit expedita cumque omnis.', author: 'mario' ,id: 1},
            {title: 'A new website', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime repudiandae facere, assumenda nihil dignissimos aperiam et maiores quis facilis minus explicabo cupiditate voluptate blanditiis alias fugit expedita cumque omnis.', author: 'luigi' ,id: 2},
            {title: 'A new website', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime repudiandae facere, assumenda nihil dignissimos aperiam et maiores quis facilis minus explicabo cupiditate voluptate blanditiis alias fugit expedita cumque omnis.', author: 'yoshi' ,id: 3},
        ]);

    return (
        <div className="blogs">
            {blogs.map((blog) => (
                <div className="details" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Writen by { blog.author }</p>
                    <a href="/create"><button>Read</button></a>
                </div>
            ))}
        </div>
    );
}
 
export default Home;

