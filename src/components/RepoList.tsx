import { useState } from "react";
import { useActions } from "../hooks/useAcitions";
import { useTypedSelector } from "../hooks/useTypeSelector";

const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepo } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    searchRepo(term);
  };

  return (
    <div className="input-container">
      <form onSubmit={onSubmit}>
        <input
          className="search__input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search"
        />
        <button className="btn">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name) => (
          <div className="list-item" key={name}>
            {name}
          </div>
        ))}
    </div>
  );
};

export default RepoList;
