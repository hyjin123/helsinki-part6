import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const anecdotes = useSelector((state) => {
    console.log("this is real", state);
    return state;
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch({
      type: "VOTE",
      payload: {
        id,
      },
    });
  };

  console.log("this is anecdote", anecdotes);

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch({
      type: "NEW_ANECDOTE",
      payload: {
        content,
      },
    });
  };

  // to sort the anecdotes by number of votes
  const compare = (a, b) => {
    return b.votes - a.votes;
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(compare).map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
