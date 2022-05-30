interface ICard {
        title:string;
        content: string;
        date?:string;
}



const Card = (props: ICard) => {
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
export default Card;