import { Link } from "react-router-dom";

const posts = [
    {
        "id":1,
        "title":"Welcome to the new blog",
        "body":"Book description: In June, 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter. His mother long gone, his father recently deceased, and the family farm foreclosed upon by the bank, Emmett's intention is to pick up his eight-year-old brother, Billy, and head to California where they can start their lives anew. But when the warden drives away, Emmett discovers that two friends from the work farm have hidden themselves in the trunk of the warden's car. Together, they have hatched an altogether different plan for Emmett's future, one that will take them all on a fateful journey in the opposite direction—to the City of New York.",
        "likes":30
    },
    {
        "id":2,
        "title":"How to be a good programmer",
        "body":"Book description: In June, 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter. His mother long gone, his father recently deceased, and the family farm foreclosed upon by the bank, Emmett's intention is to pick up his eight-year-old brother, Billy, and head to California where they can start their lives anew. But when the warden drives away, Emmett discovers that two friends from the work farm have hidden themselves in the trunk of the warden's car. Together, they have hatched an altogether different plan for Emmett's future, one that will take them all on a fateful journey in the opposite direction—to the City of New York.",
        "likes":20
    },
    {
        "id":3,
        "title":"How to delete a post",
        "body":"Book description: In June, 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter. His mother long gone, his father recently deceased, and the family farm foreclosed upon by the bank, Emmett's intention is to pick up his eight-year-old brother, Billy, and head to California where they can start their lives anew. But when the warden drives away, Emmett discovers that two friends from the work farm have hidden themselves in the trunk of the warden's car. Together, they have hatched an altogether different plan for Emmett's future, one that will take them all on a fateful journey in the opposite direction—to the City of New York.",
        "likes":31
    },
    {
        "id":4,
        "title":"This is the end of the world",
        "body":"Book description: In June, 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter. His mother long gone, his father recently deceased, and the family farm foreclosed upon by the bank, Emmett's intention is to pick up his eight-year-old brother, Billy, and head to California where they can start their lives anew. But when the warden drives away, Emmett discovers that two friends from the work farm have hidden themselves in the trunk of the warden's car. Together, they have hatched an altogether different plan for Emmett's future, one that will take them all on a fateful journey in the opposite direction—to the City of New York.",
        "likes":15
    }
];


export default function Home() {
    const blogItems = posts.map( post => 
        <div className="post-preview">
            <Link href="/post">
                <h2 className="post-title">{post.id}.{post.title}</h2>
            </Link>
            <p className="post-subtitle">{post.body}</p>
            <p className="post-meta">
                Posted by
                <Link href="#!">Start Bootstrap</Link>
                on September 24, 2023
            </p>
        </div>
    );

    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url("/assets/img/home-bg.jpg")` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <span className="subheading">A Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">

                        {blogItems} 
                        <div className="d-flex justify-content-end mb-4">
                            <Link className="btn btn-primary text-uppercase" href="#!">Older Posts →</Link>
                        </div>
                    </div>
                </div>
            </div>	        	 
        </>
    );
}