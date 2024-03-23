import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === "") {
      return anecdotes;
    }

    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
  };

  // to sort the anecdotes by number of votes
  const compare = (a, b) => {
    return b.votes - a.votes;
  };

  return (
    <div>
      {anecdotes.sort(compare).map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => vote(anecdote.id)}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
