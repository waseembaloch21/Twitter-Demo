import classes from './NewPost.module.css';

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
      <div className={classes.actions}>
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
