
const NewPost = (props) => {

  return (
    <div>
   
        <label htmlFor="">Author</label><br />
        <input onChange={props.onAuthorChange} type="text" name="" id="author" />
        <br />
        <label htmlFor="comment">Text</label><br />
        <textarea name="" id="comment" rows={5} onChange={props.onCommentChange} ></textarea>
    
    </div>
  )
}

export default NewPost