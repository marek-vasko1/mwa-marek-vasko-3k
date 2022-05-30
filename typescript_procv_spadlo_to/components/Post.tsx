interface IPost {
    title:string;
    content: string;
    date?:string;
}



const Post = (props: IPost) => {
return(
    <div>
        <p>
            {props.title}
        </p>
        <p>
            {props.content}
        </p>
        <p>
            {props.date}
        </p>
        
    </div>
)
}
export default Post;