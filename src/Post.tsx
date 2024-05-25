//props: {author: "", content: ""}

export function Post(props){
// function Post(){
    console.log(props);
    return ( 
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )

}

// export default Post

//Default exports vs named Exports
//Default exports - vc pode dar o nome que quiser na hora de importar o componente
// named Exports - precisa ter o mesmo nome na importação, entre chaves